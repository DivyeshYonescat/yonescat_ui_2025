// components/Accordion.js
import { useState } from 'react'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border rounded mb-2 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
      >
        {title}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-700">
          {content}
        </div>
      )}
    </div>
  )
}

export default function Accordion({items}) {
  const [openIndex, setOpenIndex] = useState(null)
  
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}
