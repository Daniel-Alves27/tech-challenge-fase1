export default function Footer() {
  return (
    <footer className="bg-orange-100 md:flex items-center justify-evenly py-9">
      <div className="flex flex-col gap-0.5 py-7 text-center md:py-0">
        <h3 className="font-bold text-lg">Serviços</h3>
        <span>Conta corrente</span>
        <span>Conta PJ</span>
        <span>Cartão de crédito</span>
      </div>

      <div className="flex flex-col gap-0.5 pb-7 text-center md:pb-0">
        <h3 className="font-bold text-lg">Contato</h3>
        <span>0800 004 250 08</span>
        <span>suporte@nexpay.com</span>
        <span>ouvidoria@nexpay.com</span>
      </div>

      <div className="grid grid-cols-3 gap-y-4 pb-9 md:pb-0">
        <img className="w-40 col-span-3 justify-self-center" src="/logo/Logo-Nexpay-preto.svg" alt="logo nexpay" />
        <img className="w-12 justify-self-center" src="/icon/twitter.png" alt="twitter" />
        <img className="w-12 justify-self-center" src="/icon/instagram.png" alt="instagram" />
        <img className="w-12 justify-self-center" src="/icon/whatsapp.png" alt="whatsapp" />
      </div>
    </footer>
  )
}