interface SpinnerProps {
  colorSpinner?: 'text-primary' | 'text-warning' | 'text-light' | 'text-dark'
}

export function Spinner({colorSpinner}: SpinnerProps) {
  return (
    <div className={`spinner-border ${colorSpinner}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}