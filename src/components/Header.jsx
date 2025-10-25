import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide">Hello, Ritesh</h1>
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition font-medium">
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  )
}

export default Header