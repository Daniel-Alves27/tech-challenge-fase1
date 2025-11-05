import { Button } from "@/components/ui/button"

export default function TransferReceipt() {
  return (
    <section className="bg-orange-100 h-screen">
      <div className="text-center py-3">
        <h2 className="font-semibold text-xl">Transfer Receipt</h2>
      </div>

      <div className="bg-white w-85 rounded rounded-b-2xl mx-auto">
        <img className="mx-auto" src="/images/img-man-flag.png" alt="" />
      </div>

      <div className="bg-white w-85 rounded rounded-t-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Transfer Success</h1>
          <h2 className="text-gray-500">Your money has been successfully sent to Nayantara V</h2>
        </div>
        <div className="flex flex-col text-center py-4">
          <span className="text-xl font-light text-gray-500">Total Transfer</span>
          <span className="font-bold text-2xl">R$1020.00</span>
        </div>
      </div>

      <div className="bg-white w-85 rounded mx-auto pb-4 border-t-2 border-dashed border-gray-300">
        <span className="text-gray-500 text-xs font-semibold ps-4 ">Recipient</span>
        <div className="grid grid-cols-3 bg-gray-100 py-2 mx-4 rounded">
          <img className="col-span-1 row-span-2 justify-self-center" src="/images/profile-woman.png" alt="" />
          <p className="text-xs font-extrabold">User dev</p>
          <span className="col-start-2 text-gray-500">8050530XXX</span>
          <span className="col-start-3 text-gray-500">3:02 PM</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white w-85 rounded mx-auto pb-2">
        <Button className="w-80 mx-auto rounded cursor-pointer py-5">Done</Button>
        <Button className="w-80 mx-auto rounded bg-transparent py-5 text-black cursor-pointer hover:bg-gray-100">Transfer more money</Button> 
      </div>
    </section>
  )
}