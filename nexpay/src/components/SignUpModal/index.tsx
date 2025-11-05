"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUpModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // guarda os dados do formulário
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });

  // atualiza o estado quando o usuário digita
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // envia os dados para o JSON Server
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const usuario = {
      ...form,
      saldo: 0,
      transacoes: [],
    };

    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });

    //alert("Usuário cadastrado!");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <Card className="w-full shadow-none border-none">
          <CardHeader>
            <CardTitle>Abra uma conta</CardTitle>
            <CardDescription>
             Digite suas informações abaixo para criar sua conta
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Ex: Mario"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="senha">Password</Label>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  onChange={handleChange}
                />
              </div>

              <CardFooter className="flex flex-col gap-3 mt-2">
                <Button type="submit" className="w-full">
                  Registrar
                </Button>
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="w-full"
                  type="button"
                >
                  Cancelar
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}