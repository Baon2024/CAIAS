'use client'

import { useState, useEffect } from 'react'
import updateAPIFunction from './updateAPIFunction';

export default function ModalExample({isOpen, setIsOpen, isAnimating, setIsAnimating, modalDocumentId}) {
  //const [isOpen, setIsOpen] = useState(false)
  //const [isAnimating, setIsAnimating] = useState(false)
  const [ newEventName, setNewEventName ] = useState('');

  const toggleModal = () => {
    setIsAnimating(true)
    setIsOpen(!isOpen)
  }

  function updateEventNameHandler() {
    
    if (newEventName) {
    const updateEventNameResponse = updateAPIFunction(modalDocumentId, newEventName);
    //lets try and make this a reusable function, for each update
    }
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <>
      {(isOpen || isAnimating) && (
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          } flex items-center justify-center p-4`}
          onClick={toggleModal}
        >
          <div 
            className={`bg-white rounded-lg shadow-xl w-11/12 h-5/6 max-w-4xl max-h-full overflow-hidden flex flex-col transition-all duration-300 ${
              isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex-grow overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Edit Event Details</h2>
              <div>
                <label>change event name</label>
                <input placeholder="enter new event name" type="text" value={newEventName} onChange={(e) => setNewEventName(e.target.value)} />
                <button onClick={updateEventNameHandler}>Update</button>
              </div>
              {/* Add more content here as needed */}
            </div>
            <div className="p-6 bg-gray-100 flex justify-end">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}