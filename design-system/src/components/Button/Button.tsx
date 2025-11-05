import React from "react";

interface ButtonProps {
  variants?: {
    bgColor?: 'primary' | 'secondary',
    outline?: 'outline-primary' | 'outline-secondary'
  }
  size?: 'lg' | 'sm',
  children: React.ReactNode,
  disabled?: true | false 
}

export const Button: React.FC<ButtonProps> = ({children, variants, size, disabled}) => {
  return (
    <button type="button" className={`btn btn-${variants?.bgColor || variants?.outline} btn-${size}`} disabled={disabled}>{children}</button>
  )
}