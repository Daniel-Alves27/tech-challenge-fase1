"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/usuarios?email=${form.email}&senha=${form.senha}`
      );
      const data = await res.json();

      if (data.length > 0) {
        const usuario = data[0];
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        
        //alert(`Login bem-sucedido! Bem-vindo(a) ${data[0].nome}`);
        onClose();
        router.push("/pages/Dashboard");
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao tentar fazer login");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <Card className="w-full shadow-none border-none">
          <CardHeader>
            <CardTitle>Entre na sua conta</CardTitle>
            <CardDescription>
              Insira seu e-mail e senha para fazer login
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleChange}
                  value={form.email}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="senha">Senha</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  onChange={handleChange}
                  value={form.senha}
                />
              </div>

              <CardFooter className="flex flex-col gap-2 mt-2">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="w-full"
                  type="button"
                >
                  Cancel
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}