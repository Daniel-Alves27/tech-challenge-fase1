"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pencil, Trash2 } from 'lucide-react'

interface Transacao {
  id: number;
  tipo: string;
  valor: number;
  data: string;
}

interface TransactionListProps {
  transacoes: Transacao[];
  usuario: any;
  onUpdateUsuario: (usuarioAtualizado: any) => void;
  showSnackbar: (message: string, type: "success" | "danger" | "info" | "warning") => void;
}

export function TransactionList({ transacoes, usuario, onUpdateUsuario, showSnackbar }: TransactionListProps) {
  const [editando, setEditando] = useState<number | null>(null);
  const [valorEditado, setValorEditado] = useState("");

  const total = transacoes.reduce((acc, t) => acc + t.valor, 0);

  const handleSalvar = async (id: number) => {
    const valorNum = parseFloat(valorEditado);
    if (isNaN(valorNum) || valorNum <= 0) {
      showSnackbar("Digite um valor válido!", "warning");
      return;
    }

    const transacoesAtualizadas = usuario.transacoes.map((t: Transacao) =>
      t.id === id ? { ...t, valor: valorNum } : t
    );

    const saldoRecalculado = transacoesAtualizadas.reduce((acc: number, t: Transacao) => {
      if (t.tipo === "deposito") return acc + t.valor;
      return acc - t.valor;
    }, 0);

    const usuarioAtualizado = {
      ...usuario,
      saldo: saldoRecalculado,
      transacoes: transacoesAtualizadas,
    };

    try {
      await fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioAtualizado),
      });
      onUpdateUsuario(usuarioAtualizado);
      setEditando(null);
      setValorEditado("");
      showSnackbar("Transação atualizada com sucesso!", "success");
    } catch (error) {
      showSnackbar("Erro ao atualizar transação!", "danger");
    }
  };

  const handleExcluir = async (id: number) => {
    const transacoesAtualizadas = usuario.transacoes.filter((t: Transacao) => t.id !== id);

    const saldoRecalculado = transacoesAtualizadas.reduce((acc: number, t: Transacao) => {
      if (t.tipo === "deposito") return acc + t.valor;
      return acc - t.valor;
    }, 0);

    const usuarioAtualizado = {
      ...usuario,
      saldo: saldoRecalculado,
      transacoes: transacoesAtualizadas,
    };

    try {
      await fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioAtualizado),
      });
      onUpdateUsuario(usuarioAtualizado);
      showSnackbar("Transação removida com sucesso!", "info");
    } catch (error) {
      showSnackbar("Erro ao excluir transação!", "danger");
    }
  };

  return (
    <Table className="bg-white rounded-2xl">
      <TableCaption>Lista de suas últimas transações.</TableCaption>
      <TableHeader>
        <TableRow >

          <TableHead className="font-bold">Tipo</TableHead>
          <TableHead className="font-bold text-right">Valor</TableHead>
          <TableHead className="font-bold text-center">Data</TableHead>
          <TableHead className="text-right font-bold">Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transacoes.length > 0 ? (
          transacoes.map((t) => (
            <TableRow key={t.id}>

              <TableCell className=" capitalize">
                {t.tipo === "pix"
                  ? "Pix"
                  : t.tipo === "deposito"
                    ? "Depósito"
                    : "Doc/Ted"}
              </TableCell>

              <TableCell
                className={`text-right ${t.tipo === "deposito" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {editando === t.id ? (
                  <Input
                    type="number"
                    value={valorEditado}
                    onChange={(e) => setValorEditado(e.target.value)}
                    className="w-24 text-right"
                  />
                ) : (
                  `${t.tipo === "deposito" ? "+" : "-"} R$ ${t.valor.toFixed(2)}`
                )}
              </TableCell>

              <TableCell className="text-center">{t.data}</TableCell>

              <TableCell className="flex justify-center gap-2 ">
                {editando === t.id ? (
                  <>
                    <Button size="sm" onClick={() => handleSalvar(t.id)}>
                      Salvar
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditando(null)}>
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditando(t.id);
                        setValorEditado(t.valor.toString());
                      }}
                    >
                      <Pencil />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleExcluir(t.id)}
                    >
                      <Trash2 />
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center text-gray-500 py-4">
              Nenhuma transação encontrada.
            </TableCell>
          </TableRow>
        )}
      </TableBody>

      {transacoes.length > 0 && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total movimentado</TableCell>
            <TableCell className="text-right font-semibold">
              R$ {total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
