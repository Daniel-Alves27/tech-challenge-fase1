"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function AccountConfig({
  open,
  onClose,
  onUserUpdated,
}: {
  open: boolean;
  onClose: () => void;
  onUserUpdated: (usuarioAtualizado: any) => void;
}) {
  const [usuario, setUsuario] = useState<any>(null);
  const [novoNome, setNovoNome] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  // Carrega usuário logado do localStorage
  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
      const user = JSON.parse(usuarioLogado);
      setUsuario(user);
      setNovoNome(user.nome);
    }
  }, []);

  // Função para atualizar nome
  const handleSalvarNome = async () => {
    if (!novoNome.trim()) {
      alert("Digite um nome válido.");
      return;
    }

    const usuarioAtualizado = { ...usuario, nome: novoNome };

    await fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: novoNome }),
    });

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));
    setUsuario(usuarioAtualizado);
    onUserUpdated(usuarioAtualizado);
    alert("Nome atualizado com sucesso!");
    onClose();
  };

  // Função para atualizar senha
  const handleSalvarSenha = async () => {
    if (senhaAtual !== usuario.senha) {
      alert("Senha atual incorreta!");
      return;
    }

    if (!novaSenha.trim()) {
      alert("Digite uma nova senha válida.");
      return;
    }

    const usuarioAtualizado = { ...usuario, senha: novaSenha };

    await fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senha: novaSenha }),
    });

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));
    setUsuario(usuarioAtualizado);
    onUserUpdated(usuarioAtualizado);
    alert("Senha alterada com sucesso! Faça login novamente.");
    onClose();
  };

  if (!usuario) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Conta</TabsTrigger>
              <TabsTrigger value="password">Senha</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Conta</CardTitle>
                  <CardDescription>
                    Altere o nome da sua conta. Clique em salvar quando terminar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Digite seu novo nome"
                    value={novoNome}
                    onChange={(e) => setNovoNome(e.target.value)}
                  />
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSalvarNome}>Salvar alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Senha</CardTitle>
                  <CardDescription>
                    Altere sua senha. Após salvar, será necessário entrar novamente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <Label htmlFor="senhaAtual">Senha atual</Label>
                    <Input
                      id="senhaAtual"
                      type="password"
                      value={senhaAtual}
                      onChange={(e) => setSenhaAtual(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="novaSenha">Nova senha</Label>
                    <Input
                      id="novaSenha"
                      type="password"
                      value={novaSenha}
                      onChange={(e) => setNovaSenha(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSalvarSenha}>Salvar senha</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
