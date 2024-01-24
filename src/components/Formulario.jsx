import { useState } from "react";
import Error from "./Error";

import { Alerta } from "./Alerta";

const Formulario = ({setIsAlert}) => {
    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');

    const [telefono,setTelefono ] = useState('');
    const [mensaje,setMensaje] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        //Validando formulario
        if([nombre,telefono,email,mensaje].includes('')){
          console.log("Faltan campos por llenar")
          setError(true)
          return;
        }
        setError(false)
        setNombre("")
        setEmail("")
        setTelefono("")
        setMensaje("")
        

        
          // Datos del formulario
        const formData = new FormData(e.target);

        // Enviar el formulario a formsubmit.co
        const url = 'https://formsubmit.co/ajax/paulinosxp@gmail.com'; // Reemplaza con tu correo electrónico registrado en formsubmit.co
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });
        
        setIsAlert(true)
        
        if (response.ok) {
          // Lógica adicional después de enviar el formulario con éxito
          
          console.log('Formulario enviado con éxito');
        } else {
          // Manejar errores en el envío del formulario
          console.error('Error al enviar el formulario');
        }
        
    }


  return (
    <div className="lg:w-1/2 md:w-full mx-5">
       
        <form  onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl py-10 px-5 mt-10 mb-10">
          {error && (
           <Error mensaje="Rellena todos los campos"/>
          )}
          <div className="mb-5">
            <label htmlFor="nombre" className="block text-black font-bold uppercase">Nombre</label>
            <input id="nombre" name="nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre.." value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>


          <div className="mb-5">
            <label htmlFor="email" className="block text-black font-bold uppercase">Email</label>
            <input id="email" name="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="telefono" className="block text-black font-bold uppercase">Teléfono</label>
            <input id="telefono" name="telefono" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="+56 9" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
          </div>

          <div className="mb-5">
            <label htmlFor="mensaje" className="block text-black font-bold uppercase">Mensaje</label>
            <textarea id="mensaje" name="mensaje" className="border-2 w-full p-2 pb-8 mt-2 placeholder-gray-400 rounded-md" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
          </div>

          <input type="submit" className="bg-[#6df229] w-full p-3 rounded-md text-white uppercase font-bold hover:bg-[#4bd60a] cursor-pointer transition-all" />

        </form>

    </div>
  )
}

export default Formulario