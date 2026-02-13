import React from 'react'

interface CardProps {
  title: string
  description: string
  price?: number
  image?: string
  children?: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  image,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden ${className}`}>
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {price && (
          <p className="text-xl font-bold text-blue-600 mb-4">
            ${price.toFixed(2)}
          </p>
        )}
        
        {children}
      </div>
    </div>
  )
}

export default Card
