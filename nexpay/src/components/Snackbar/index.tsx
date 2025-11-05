import { CircleCheckBig, AlertTriangle, XOctagon, CircleAlert, X } from "lucide-react"
import { useEffect } from "react"

interface SnackbarProps {
  variants?: "success" | "danger" | "warning" | "info" | "dark"
  message: string
  visible: boolean
  onClose: () => void
}

const icons = {
  dark: null,
  success: <CircleCheckBig className="text-green-600" />,
  danger: <XOctagon className="text-red-600" />,
  warning: <AlertTriangle className="text-yellow-500" />,
  info: <CircleAlert className="text-blue-500" />,
}

const variantStyles = {
  success: "bg-green-100 text-green-800 border-green-300",
  danger: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
  dark: "bg-gray-800 text-gray-100 border-gray-700",
}

export function Snackbar({
  variants = "dark",
  message,
  visible,
  onClose,
}: SnackbarProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000) // fecha depois de 3s
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div
      role="alert"
      className={`
        fixed bottom-5 right-5 z-50
        flex items-center justify-between gap-3 px-4 py-3 rounded-md border shadow-md
        transition-all duration-300 ease-in-out
        ${variantStyles[variants]}
      `}
    >
      <div className="flex items-center gap-2">
        {icons[variants]}
        <span className="font-medium">{message}</span>
      </div>
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="p-1 hover:bg-black/10 rounded-full transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
