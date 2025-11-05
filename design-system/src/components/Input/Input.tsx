interface inputProps {
  inputType?: 'email' | 'text' | 'password',
  placeholder?: string,
  label?: string,
  id?: string,
  size?: 'lg' | 'sm'
}

export function Input({inputType, placeholder, label, id, size}:inputProps) {
  return (
    <>
      <label htmlFor={id}  className="form-label">{label}</label>
      <input type={inputType} className={`form-control form-control-${size}`} id={id} placeholder={placeholder}/>
    </>  
  )
}