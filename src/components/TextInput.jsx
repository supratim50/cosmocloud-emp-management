import React from 'react'

const TextInput = ({
  label, 
  placeholder="Please enter", 
  classes, 
  type="text", 
  changeHandler,
  value,
  name,
  disable=false}) => {
  return (
    <div className={`w-full flex flex-col ${classes && classes}`}>
        <label htmlFor={label} className='font-bold text-lg text-orange-600'>{label}</label>
        {
          type === "text" 
          ? <input type={type} 
            className='px-4 py-2 focus:outline-none bg-gray-200 rounded-md' 
            id={label} 
            placeholder={placeholder} 
            value={value}
            disabled={disable}
            onChange={(e) => changeHandler({[name]: e.target.value})}
          />
          : <textarea 
              className='px-4 py-2 focus:outline-none bg-gray-200 rounded-md min-h-16' 
              id={label} 
              placeholder={placeholder}  
              value={value}
              disabled={disable}
              onChange={(e) => changeHandler({[name]: e.target.value})}
            />
        }
    </div>
  )
}

export default TextInput