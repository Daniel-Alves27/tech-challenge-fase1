"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TransactionModalProps {
  open: boolean;
  onClose: () => void;
  tipo: "pix" | "deposito" | "doc";
  usuario: any;
  onUpdateUsuario: (usuarioAtualizado: any) => void;
  showSnackbar: (message: string, type: "success" | "danger" | "info" | "warning") => void; // 👈 nova prop
}

export function TransactionModal({
  open,
  onClose,
  tipo,
  usuario,
  onUpdateUsuario,
  showSnackbar,
}: TransactionModalProps) {
  const [valor, setValor] = useState("");

  const handleConfirm = async () => {
    const valorNum = parseFloat(valor);
    if (isNaN(valorNum) || valorNum <= 0) {
      showSnackbar("Digite um valor válido!", "warning");
      return;
    }
    
    const taxa = tipo === "doc" ? valorNum * 0.02 : 0;
    const valorFinal = tipo === "doc" ? valorNum + taxa : valorNum;

    let novoSaldo = usuario.saldo;
    if (tipo === "pix" || tipo === "doc") {
      if (novoSaldo < valorFinal) {
        showSnackbar("Saldo insuficiente para realizar a transação!", "danger");
        return;
      }
      novoSaldo -= valorFinal;
    } else if (tipo === "deposito") {
      novoSaldo += valorNum;
    }

    const novaTransacao = {
      id: Date.now(),
      tipo,
      valor: valorNum,
      taxa,
      data: new Date().toLocaleString("pt-BR"),
    };

    const transacoesAtualizadas = [...(usuario.transacoes || []), novaTransacao];

    const usuarioAtualizado = {
      ...usuario,
      saldo: novoSaldo,
      transacoes: transacoesAtualizadas,
    };

    await fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        saldo: novoSaldo,
        transacoes: transacoesAtualizadas,
      }),
    });

    onUpdateUsuario(usuarioAtualizado);
    showSnackbar("Transação concluída com sucesso!", "success");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>
            {tipo === "deposito" ? "Depósito" : tipo === "pix" ? "Pix" : "Doc/Ted"}
          </DialogTitle>
          <DialogDescription>
            Digite o valor da {tipo === "deposito" ? "entrada" : "transferência"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Label htmlFor="valor">Valor (R$)</Label>
          <Input
            id="valor"
            type="number"
            placeholder="Ex: 100.00"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <Button onClick={handleConfirm}>Confirmar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
