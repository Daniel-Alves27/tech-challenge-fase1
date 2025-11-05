import {House, Pencil, Trash2, Eye, EyeClosed, CircleCheckBig, AlertTriangle, XOctagon, CircleAlert, Star, Heart} from 'lucide-react';

interface IconProps {
  variants?: 'house'| 'pencil'| 'trash'| 'eye'| 'eyeClosed' | 'star' | 'heart',
  colors?: 'success' | 'danger' | 'warning' | 'info' | 'dark'
}

export const icons: any = {
  house: <House/>,
  pencil: <Pencil/>,
  trash: <Trash2/>,
  eye: <Eye/>,
  eyeClosed: <EyeClosed/>,
  star: <Star/>,
  heart: <Heart/>,
  success: <CircleCheckBig/>,
  danger: <XOctagon/>,
  warning: <AlertTriangle/>,
  info: <CircleAlert/>
}



export function Icon({variants= 'house', colors}: IconProps) {
  return (
    <span className={`text-${colors}`}>{icons[variants]}</span>
  )
}