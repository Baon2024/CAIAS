'use client'

import { useState } from 'react'
import ModalExample from './modal'

export default function ModalContainer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    (<div className="p-4">
      <button
        onClick={() => {
          setIsAnimating(true)
          setIsOpen(!isOpen)
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Toggle Modal
      </button>
      <ModalExample
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating} />
    </div>)
  );
}

