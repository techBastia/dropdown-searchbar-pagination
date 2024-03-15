import React, { useState } from 'react'

export const Dropdown = () => {
    const [dropdown, setDropdown] = useState('')
  return (
    <div>
        <h2>You Are Selected : </h2>
        <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
            <option value=""> selec an option</option>
            <option value="opt1">Apple</option>
            <option value="opt2">Banana</option>
            <option value="opt3">Orange</option>
        </select>
    </div>
  )
}
