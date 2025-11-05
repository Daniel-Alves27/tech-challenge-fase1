"use client";

import { useEffect, useState } from "react";

import {
  CreditCard,
  CreditCardBack,
  CreditCardChip,
  CreditCardFlipper,
  CreditCardFront,
  CreditCardLogo,
  CreditCardMagStripe,
  CreditCardName,
  CreditCardServiceProvider,
} from '../ui/shadcn-io/credit-card';
import type { HTMLAttributes } from 'react';

const AppleLogo = (props: HTMLAttributes<SVGElement>) => (
  <div className='w-30'>
    <img className='w-10' src="/logo/Logo-X-preto.svg" alt="Logo nexpay" />
  </div>

);

const AppleChip = ({ ...props }: HTMLAttributes<SVGElement>) => (
  <svg
    enableBackground="new 0 0 132 92"
    viewBox="0 0 132 92"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Chip</title>
    <rect
      x="0.5"
      y="0.5"
      width="131"
      height="91"
      rx="20.5"
      fill="url(#kibo-credit-card-chip-gradient-apple)"
      stroke="#CECCC8"
    />
    <rect
      x="9.5"
      y="9.5"
      width="48"
      height="21"
      rx="10.5"
      fill="#EAEAEA"
      stroke="#95958E"
    />
    <rect
      x="9.5"
      y="61.5"
      width="48"
      height="21"
      rx="10.5"
      fill="#EAEAEA"
      stroke="#95958E"
    />
    <rect
      x="9.5"
      y="35.5"
      width="48"
      height="21"
      rx="10.5"
      fill="#EAEAEA"
      stroke="#95958E"
    />
    <rect
      x="74.5"
      y="9.5"
      width="48"
      height="21"
      rx="10.5"
      fill="#EAEAEA"
      stroke="#95958E"
    />
    <rect
      x="74.5"
      y="61.5"
      width="48"
      height="21"
      rx="10.5"
      fill="#EAEAEA"
      stroke="#95958E"
    />
    <rect
      x="74.5"
      y="35.5"
      width="48"
      height="21"
      rx="10.5"
      fill="#EAEAEA"
      stroke="#95958E"
    />
    <defs>
      <linearGradient
        id="kibo-credit-card-chip-gradient-apple"
        x1="1"
        y1="46"
        x2="131"
        y2="91"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2F2F2" />
        <stop offset="1" stopColor="#BFBFBF" />
      </linearGradient>
    </defs>
  </svg>
);

const MastercardLogo = (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 431 319"
    {...props}
  >
    <title>Mastercard Logo</title>
    <path
      fill="#B4B4B4"
      d="M86.74 318.33v-20.3c0-7.76-4.82-12.85-13.1-12.85-4.13 0-8.63 1.34-11.73 5.75-2.4-3.7-5.86-5.75-11.04-5.75-3.46 0-6.9 1.02-9.64 4.73v-4.06H34v32.48h7.23v-17.94c0-5.75 3.1-8.47 7.91-8.47 4.82 0 7.23 3.03 7.23 8.47v17.94h7.23v-17.94c0-5.75 3.46-8.47 7.91-8.47 4.82 0 7.23 3.03 7.23 8.47v17.94h8Zm107.23-32.48h-11.72v-9.81h-7.23v9.81h-6.55v6.42h6.55v14.9c0 7.45 3.09 11.83 11.36 11.83 3.1 0 6.55-1.02 8.96-2.37l-2.09-6.1a11.73 11.73 0 0 1-6.22 1.69c-3.46 0-4.82-2.05-4.82-5.4v-14.55h11.72v-6.42h.04Zm61.38-.7a9.83 9.83 0 0 0-8.64 4.72v-4.06h-7.23v32.48h7.23V300c0-5.4 2.4-8.47 6.9-8.47 1.37 0 3.1.35 4.5.67l2.1-6.78c-1.45-.28-3.5-.28-4.86-.28Zm-92.74 3.38c-3.46-2.36-8.28-3.39-13.46-3.39-8.27 0-13.78 4.06-13.78 10.49 0 5.4 4.14 8.47 11.37 9.46l3.45.35c3.78.67 5.87 1.7 5.87 3.39 0 2.37-2.77 4.06-7.6 4.06a19.3 19.3 0 0 1-11.04-3.39l-3.45 5.4c3.77 2.72 8.96 4.06 14.14 4.06 9.64 0 15.18-4.41 15.18-10.48 0-5.76-4.5-8.8-11.37-9.82l-3.45-.35c-3.1-.36-5.5-1.03-5.5-3.04 0-2.36 2.4-3.7 6.22-3.7 4.14 0 8.28 1.69 10.36 2.72l3.06-5.76Zm192.34-3.39a9.83 9.83 0 0 0-8.63 4.73v-4.06h-7.23v32.48h7.23V300c0-5.4 2.4-8.47 6.9-8.47 1.37 0 3.1.35 4.5.67l2.1-6.7c-1.41-.36-3.46-.36-4.87-.36Zm-92.38 16.95c0 9.81 6.91 16.91 17.6 16.91 4.82 0 8.27-1.02 11.72-3.7l-3.45-5.76c-2.77 2.05-5.5 3.03-8.63 3.03-5.87 0-10-4.06-10-10.48 0-6.11 4.13-10.17 10-10.48 3.09 0 5.86 1.02 8.63 3.03l3.45-5.75c-3.45-2.72-6.9-3.71-11.72-3.71-10.69-.04-17.6 7.1-17.6 16.91Zm66.88 0v-16.24h-7.23v4.06c-2.41-3.04-5.87-4.73-10.36-4.73-9.32 0-16.55 7.1-16.55 16.91S302.54 319 311.86 319c4.82 0 8.27-1.7 10.36-4.73v4.06h7.23v-16.24Zm-26.55 0c0-5.75 3.78-10.48 10-10.48 5.86 0 10 4.41 10 10.48 0 5.76-4.14 10.49-10 10.49-6.19-.36-10-4.77-10-10.49Zm-86.51-16.95c-9.64 0-16.55 6.78-16.55 16.91 0 10.17 6.9 16.91 16.9 16.91 4.83 0 9.65-1.34 13.46-4.41l-3.45-5.09a16.61 16.61 0 0 1-9.64 3.4c-4.5 0-8.96-2.06-10-7.77h24.46v-2.72c.32-10.45-5.9-17.23-15.18-17.23Zm0 6.11c4.5 0 7.59 2.72 8.27 7.76h-17.23c.68-4.37 3.77-7.76 8.96-7.76ZM396 302.09V273h-7.23v16.91c-2.4-3.04-5.86-4.73-10.36-4.73-9.32 0-16.55 7.1-16.55 16.91S369.09 319 378.41 319c4.82 0 8.27-1.7 10.36-4.73v4.06H396v-16.24Zm-26.55 0c0-5.75 3.78-10.48 10-10.48 5.87 0 10 4.41 10 10.48 0 5.76-4.13 10.49-10 10.49-6.22-.36-10-4.77-10-10.49Zm-242.03 0v-16.24h-7.23v4.06c-2.4-3.04-5.86-4.73-10.36-4.73-9.32 0-16.55 7.1-16.55 16.91S100.51 319 109.83 319c4.82 0 8.27-1.7 10.36-4.73v4.06h7.23v-16.24Zm-26.87 0c0-5.75 3.78-10.48 10-10.48 5.87 0 10 4.41 10 10.48 0 5.76-4.13 10.49-10 10.49-6.22-.36-10-4.77-10-10.49Z"
    />
    <path
      stroke="#B4B4B4"
      strokeWidth="8"
      d="M132 4c29.88 0 57.27 10.32 78.97 27.38l3.98 3.13-3.96 3.15c-27.67 22-45.69 56.02-45.69 94.35 0 38.34 18 72.67 45.66 94.33l4.02 3.14-4 3.15A127.35 127.35 0 0 1 132 260.02C61.25 260.02 4 202.76 4 132 4 61.25 61.25 4 132 4Zm166.45 0c70.8 0 128.05 57.62 128.05 128 0 70.76-57.25 128.02-128 128.02a127.35 127.35 0 0 1-78.97-27.39l-4-3.14 4-3.15a119.32 119.32 0 0 0 45.66-94.33c0-38.33-18-72.35-45.68-94.35l-3.96-3.15 3.97-3.13A127.15 127.15 0 0 1 298.45 4Z"
    />
  </svg>
);

export default function CreditCardUser() {
  const [nomeUsuario, setNomeUsuario] = useState("Usuário");

  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) {
      const usuario = JSON.parse(user);
      setNomeUsuario(usuario.nome);
    }
  }, []);

  return (
    <CreditCard>
      <CreditCardFlipper>
        <CreditCardFront safeArea={24} className="bg-[#F2F2F2] text-[#909090]">
          <CreditCardLogo className="absolute top-0 left-0">
            <AppleLogo />
          </CreditCardLogo>

          <CreditCardChip className="right-1 left-auto w-1/5">
            <AppleChip />
          </CreditCardChip>

          <CreditCardName className="-translate-y-1/2 absolute top-1/2 mt-4">
            {nomeUsuario}
          </CreditCardName>
        </CreditCardFront>

        <CreditCardBack
          safeArea={0}
          className="bg-[#F2F2F2] text-[#909090]"
        >
          <CreditCardServiceProvider
            type="Mastercard"
            className="top-6 right-6 max-h-1/4 max-w-1/4"
          >
            <MastercardLogo className="w-full" />
          </CreditCardServiceProvider>

          <CreditCardMagStripe className="top-auto bottom-0 bg-[#BEBEC0]" />
        </CreditCardBack>
      </CreditCardFlipper>
    </CreditCard>
  );
}