
import ButtonNavBar from './ButtonNavBar'
import { useState, useEffect } from 'react';

const NavBar = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);








  return (
    <div className={`w-[100vw] p-4 fixed z-10 top-0 flex justify-center transition-all ease-in-out ${scrolling ? 'bg-[rgba(0,0,0,0.85)]' : 'bg-transparent'} `} >
            
            <nav className='w-full flex gap-2 justify-center'> 
              <ButtonNavBar href="#inicio" nombre={"Inicio"}/>
              <ButtonNavBar href="#precios" nombre={"Precios"}/>
              <ButtonNavBar href="#contacto" nombre={"Contacto"}/>

            </nav>


     </div>
  )
}

export default NavBar