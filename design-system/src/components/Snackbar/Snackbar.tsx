import {CircleCheckBig, AlertTriangle, XOctagon, CircleAlert} from 'lucide-react';

interface SnackbarProps {
  variants?: 'success' | 'danger' | 'warning' | 'info' | 'dark';
}

const icons = {
  dark: null,
  success: <CircleCheckBig/>,
  danger: <XOctagon/>,
  warning: <AlertTriangle/>,
  info: <CircleAlert/>
}

export function Snackbar({variants= 'dark'}: SnackbarProps)  {
  return (
    <div className={`alert alert-${variants} alert-dismissible fade show text-center d-flex justify-content-between column-gap-3`} role="alert">
      <strong>{icons[variants]}</strong>
      <span>Mensagem padrão de exemplo.</span>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}