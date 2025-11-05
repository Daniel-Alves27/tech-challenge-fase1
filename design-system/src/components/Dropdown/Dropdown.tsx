import React, { CSSProperties } from "react";

interface DropdownProps {
  children?: React.ReactNode
  size: {
    paddingY: '.90rem',
    paddingX: '5.5rem' | '7.7rem',
    textSize: '1rem'
  }
}

export function Dropdown({size}: DropdownProps) {
  return (
      <div className="dropdown">
        <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
          style={{
            "--bs-btn-padding-y": `${size.paddingY}`, 
            "--bs-btn-padding-x": `${size.paddingX}`, 
            "--bs-btn-font-size": `${size.textSize}`
          } as CSSProperties}
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu w-100 text-center">
          <li><a className="dropdown-item" href="#">dropdown item 1</a></li>
          <li><a className="dropdown-item" href="#">dropdown item 2</a></li>
          <li><a className="dropdown-item" href="#">dropdown item 3</a></li>
        </ul>
      </div>
    
    
  )
}