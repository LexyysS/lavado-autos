import { Typography } from 'keep-react'

const ButtonNavBar = ({nombre,href}) => {
    return (
      <a href={href} className="px-2 inline-block relative transition-all duration-500 ease-in-out rounded-xl text-white text-xl uppercase  
       hover:text-green-500 "><Typography variant="body-1">{nombre}</Typography></a>
    )
  }
  
  export default ButtonNavBar