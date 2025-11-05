"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CreditCardUser from "@/src/components/CreditCard";
import { TransactionList } from "@/src/components/TransactionList";
import { TransactionModal } from "@/src/components/TransactionModal";
import AccountConfig from "@/src/components/AccountConfig";
import { Snackbar } from "@/src/components/Snackbar";

import { LogOut } from "lucide-react";
import Link from "next/link";

interface Transacao {
  id: number;
  tipo: string;
  valor: number;
  data: string;
}

interface Usuario {
  id: number;
  nome: string;
  saldo: number;
  transacoes: Transacao[];
}

export default function Dashboard() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [tipoModal, setTipoModal] = useState<"pix" | "deposito" | "doc" | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);


  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState<"success" | "danger" | "info" | "warning">("info");


  const showSnackbar = (message: string, type: "success" | "danger" | "info" | "warning") => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarVisible(true);
  };

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  const handleUpdateUsuario = (usuarioAtualizado: Usuario) => {
    setUsuario(usuarioAtualizado);
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));
  };

  return (
    <section className="bg-gray-200 min-h-screen w-full">
      <div className="w-full py-4 flex justify-between">
        <img className="w-30 ps-5" src="/logo/Logo-Nexpay-preto.svg" alt="logo nexpay" />
        <div className="flex items-center me-3">
          <Button
            className="cursor-pointer bg-transparent rounded-full hover:bg-gray-50"
            onClick={() => setIsAccountOpen(true)}
          >
            <img src="/images/profile-woman.png" alt="icone de configuração de perfil" />
          </Button>
          <Link href={'/'}><LogOut /></Link>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-80 mx-auto my-3">
        <span className="font-bold">{usuario?.nome || "Usuário"}</span>
        <span className="row-start-2 text-xs text-gray-500">Saldo atual</span>
        <span className="row-span-2 text-lg font-semibold justify-self-end">
          {usuario ? `R$ ${usuario.saldo.toFixed(2)}` : "R$ 0.00"}
        </span>
      </div>

      <div className="flex justify-center gap-3">
        <Button
          className="bg-transparent w-20 text-black hover:bg-gray-200 cursor-pointer"
          onClick={() => setTipoModal("pix")}
        >
          <img className="hover:bg-gray-50 rounded-full p-1" src="/icon/icon-pix.svg" alt="pix" />
        </Button>
        <Button className="cursor-pointer" onClick={() => setTipoModal("doc")}>Doc/Ted</Button>
        <Button className="cursor-pointer" onClick={() => setTipoModal("deposito")}>Depósito</Button>
      </div>

      <div className="w-80 mx-auto my-5">
        <CreditCardUser />
      </div>

      <div className="mx-10">
        <h2 className="text-xl font-semibold pb-3">Extrato</h2>
        <TransactionList
          transacoes={usuario?.transacoes || []}
          usuario={usuario}
          onUpdateUsuario={handleUpdateUsuario}
          showSnackbar={showSnackbar}
        />

      </div>

      {tipoModal && usuario && (
        <TransactionModal
          open={!!tipoModal}
          onClose={() => setTipoModal(null)}
          tipo={tipoModal}
          usuario={usuario}
          onUpdateUsuario={handleUpdateUsuario}
          showSnackbar={showSnackbar}
        />
      )}

      <AccountConfig
        open={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onUserUpdated={handleUpdateUsuario}
      />

      <Snackbar
        visible={snackbarVisible}
        message={snackbarMessage}
        variants={snackbarType}
        onClose={() => setSnackbarVisible(false)}
      />
    </section>
  );
}
