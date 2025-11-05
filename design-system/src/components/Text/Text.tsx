import React from "react"

interface TextProps {
  tags?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  size?: 'fs-1' | 'fs-2' | 'fs-3' | 'fs-4' | 'fs-5' | 'fs-6',
  children?: React.ReactNode,
  transform?: 'text-lowercase' | 'text-uppercase' | 'text-capitalize',
  weight?: 'fw-bold' | 'fw-semibold' | 'fw-medium' | 'fw-normal' | 'fw-light',
  lineHeight?: 'lh-1' | 'lh-sm' | 'lh-base' | 'lh-lg'
}
export function Text({
  tags, 
  size, 
  children,
  transform,
  weight,
  lineHeight
}: TextProps) {
  const Tag = tags || 'h1';
  return (
    <Tag className={size || transform || weight || lineHeight}>{children}</Tag>
  )
}