"use client"

import { Button } from "@/components/ui/button"
import Footer from "../components/Footer";
import { LoginModal } from "../components/LoginModal";
import { SignUpModal } from "../components/SignUpModal";

import { useState } from "react";

export default function Home() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenSignUp = () => setIsSignUpOpen(true);
  const handleCloseSignUp = () => setIsSignUpOpen(false);

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  return (

    <section>
      <div className="bg-orange-100">
        <div className="py-5">
          <img className="w-35 mx-auto" src="/logo/Logo-Nexpay-preto.svg" alt="logo nexpay" />
        </div>

        <div className="grid grid-cols-2 gap-2 md:flex justify-center">
          <img className="justify-self-end self-end" src="/images/img-login-3.png" alt="" />
          <img src="/images/img-login-2.png" alt="" />
          <img className="col-span-2 justify-self-center" src="/images/img-login-1.png" alt="" />
        </div>
      </div>

      <div className="text-center my-7">
        <h1 className="text-2xl font-semibold pb-3">Pague online de forma fácil</h1>
        <h2 className="text-xs text-gray-500">
          Melhore sua experiência de pagamento agora mesmo. Nenhuma taxa administrativa adicional.
        </h2>
      </div>

      <div className="flex flex-col mx-3 pb-6 gap-4">
        <Button className="size-full h-[38px] rounded-sm font-semibold cursor-pointer md: w-90 mx-auto"
          onClick={handleOpenLogin}
        >
          Login
        </Button>
        <Button className="size-full h-[38px] rounded-sm border-2 border-solid border-black bg-white text-black font-semibold cursor-pointer hover:bg-gray-200 md: w-90 mx-auto"
          onClick={handleOpenSignUp}
        >
          Sign Up
        </Button>
      </div>

      <Footer />

      <LoginModal open={isLoginOpen} onClose={handleCloseLogin} />
      <SignUpModal open={isSignUpOpen} onClose={handleCloseSignUp} />
    </section>

  );
}
