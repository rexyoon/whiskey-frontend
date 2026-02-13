import React from 'react'

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'font-semibold rounded-lg transition duration-300 ease-in-out hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800'
  }

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className} px-4 py-2`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {label}
    </button>
  )
}

export default Button
