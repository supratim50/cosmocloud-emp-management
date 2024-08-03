
const Button = ({children, clickHandler, disable, classes}) => {
  return (
    <button onClick={clickHandler} className={`text-lg md:text-xl py-2 px-4 md:px-8 bg-orange-600 text-white rounded-md w-full cursor-pointer transition ${disable ? 'opacity-35' : 'hover:opacity-90'} ${classes && classes}`}>
        {children}
    </button>
  )
}

export default Button