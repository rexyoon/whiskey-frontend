import React from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary'
}) => {
  const baseClass = "font-bold py-2 px-4 rounded transition duration-300"
  const variantClass = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-gray-300 hover:bg-gray-400 text-gray-800'

  return (
    <button
      className={`${baseClass} ${variantClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
