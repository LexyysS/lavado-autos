import NavBar from "./components/NavBar"
import Cartelera from "./components/Cartelera"
import CarteleraTapiz from "./components/CarteleraTapiz"
import CarteleraOtros from "./components/CarteleraOtros"
import Formulario from "./components/Formulario"
import Acordion from "./components/Acordion"
import ParallaxLavado from "./components/ParallaxBanner"

import { Typography } from 'keep-react'


import image from "./assets/lavado.jpg"
import logo from "./assets/logo.png"
import bgImage2 from "./assets/bg-auto.jpg"
import bgImage3 from "./assets/lavadoParallax.jpg"

import IconoSimple from "./assets/icon-simple.png"
import IconoEncerado from "./assets/icon-auto.png"
import IconoAspirado from "./assets/icon-aspirado.png"
import IconoFull from "./assets/icon-full.png"
import iAuto from './assets/t-auto.png'
import iSuv from './assets/t-suv.png'
import i4x4 from './assets/t-4x4.png'
import iconWhat from './assets/icon-what.png'
import iconUbi from './assets/icon-ubi.png'


import auto from "./assets/auto.jpg"
import suv from "./assets/suv.jpg"
import camioneta from "./assets/4x4.jpg"
import tapiz2 from "./assets/tapiz2sillas.jpg"
import tapiz3 from "./assets/tapiz3sillas.jpg"

import focos from "./assets/focos.png"
import patentes from "./assets/patentes.jpg"
import simunizado from "./assets/simunizado.jpg"

import { Alerta } from "./components/Alerta"
import { useState } from "react"


import { ParallaxProvider } from "react-scroll-parallax"

function App() {
  
  const [isAlert , setIsAlert] = useState(false)

  

  return (
    <>


      <header className="w-[100vw]" >
        
          <NavBar />
          
      </header>

      <div id="inicio" className="w-[100vw] pb-20 pt-2 shadow-md bg-cover bg-center bg-no-repeat xl:px-60 lg:px-50 md:px-28 px-5 h-screen xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col flex justify-center items-center" style={{backgroundBlendMode: "soft-light" ,backgroundColor:"rgba(0, 0, 0, 0.85)" , clipPath:"polygon(0 0, 100% 0%, 100% 100%, 50% 90%, 0 100%)" ,backgroundImage:`url(${image})`
      }}>

          <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 xl:w-1/2  h-1/3 flex justify-center items-center" > 
            <img className=' xl:h-[400px] xl:w-[400px] lg:h-[200px] lg:w-[200px] md:h-[300px] md:w-[300px] sm:h-[200px] sm:w-[200px] ' src={logo} alt="logo"  />
            
          </div>



        <div className=" xl:w-1/2 lg:w-2/3  h-2/3 " style={{letterSpacing:"2px"}}>
          <Typography variant="heading-1" className="uppercase font-bold mb-3 py-4 lg:text-[4.5vw] md:text-[8vw] text-[12vw] leading-tight" style={{color:"transparent",WebkitBackgroundClip:'text' ,backgroundImage:'linear-gradient(25deg,#6df229 ,#225710)'}}>lavado de <span style={{color:"transparent",WebkitBackgroundClip:'text' ,backgroundImage:'linear-gradient(25deg,#d33469 ,#fc9ab6)'}}>autos</span></Typography>
          <Typography variant="body-1 " className="text-white md:text-[2.5vw] lg:text-[1.25vw] leading-7">En Mr.Green, nos dedicamos a brindar un servicio de lavado de autos y alfombras que redefine la frescura y la elegancia. Cada vehículo y cada fibra son tratados con meticulosidad, ofreciendo un estándar de limpieza que va más allá de lo convencional. Experimenta la diferencia en cada detalle, desde el cuidado artesanal hasta el brillo renovado. Tu búsqueda de calidad y distinción <span style={{color:"#6df229"}}>comienza aquí</span></Typography>
          
          <Typography variant="body-1" className="text-white mt-5 lg:text-[1.25vw] md:text-[2.5vw]">Vé nuestros <a href="#precios" className="underline text-[#4bd60a] hover:text-[#fc9ab6]" > Precios</a></Typography>
          
        </div>

        


      </div>

      <div className="bg-slate-200 xl:px-60 lg:px-50 md:px-28 px-5 flex flex-col justify-center mb-10" id="precios"  >

          <div className="flex items-center justify-center h-1/4" >
              <Typography variant="heading-3" className="uppercase font-bold text-[#fc9ab6] lg:text-[4vw] md:text-[7.8vw] text-[10vw]">Precios</Typography>
            
          </div>
          <Typography variant="heading-4" className="uppercase font-bold mb-5 mt-10 text-[#98ceae] lg:text-[3.5vw] md:text-[5.5vw] text-[8vw] text-center sm:text-left">Lavado de vehiculos</Typography>
          <Acordion titulo="Tipo de lavados" contenido1="Lavado exterior con shampoo y Renovación de plásticos negros del vehículo." contenido2="Lavado Simple Y Agrega una capa de cera para un brillo y acabado final mejorado" contenido3="Aspirado interior , Paño húmedo en tablero y puertas , Lavado exterior básico " contenido4="Incluye todo en el Lavado aspirado más aplicación de silicona en el interior para un brillo duradero, y Lavado exterior con cera para un acabado completo y reluciente "/>
          <div className="lg:flex w-full flex-wrap justify-center gap-2">
            <Cartelera nombre={"Auto"} UrlAuto={auto} PLavadoSimple={"$6.000"} PLavadoEncerado={"$7.000"} PLavadoAspirado={"$10.000"} PLavadoFull={"$14.000"} IconoSimple={IconoSimple} IconoEncerado={IconoEncerado} IconoAspirado={IconoAspirado} IconoFull={IconoFull} />
            <Cartelera nombre={"Suv"} UrlAuto={suv} PLavadoSimple={"$8.000"} PLavadoEncerado={"$10.000"} PLavadoAspirado={"$12.000"} PLavadoFull={"$17.000"} IconoSimple={IconoSimple} IconoEncerado={IconoEncerado} IconoAspirado={IconoAspirado} IconoFull={IconoFull} />
            <Cartelera nombre={"4x4"} UrlAuto={camioneta} PLavadoSimple={"$10.000"} PLavadoEncerado={"$13.000"} PLavadoAspirado={"$18.000"} PLavadoFull={"$22.000"} IconoSimple={IconoSimple} IconoEncerado={IconoEncerado} IconoAspirado={IconoAspirado} IconoFull={IconoFull} />

          </div>
          
          
      </div>
     
      
      <ParallaxProvider>
        <ParallaxLavado url={bgImage3} iAuto={iAuto} iSuv={iSuv} i4x4={i4x4} patentes={patentes} simunizado={simunizado} focos={focos} tapiz2={tapiz2} tapiz3={tapiz3} />

      </ParallaxProvider>
      

      
      

      



      <div className="h-screen lg:px-60 md:px-28 pt-20" id="contacto">
          <Typography variant="heading-3" className="uppercase text-center" >Contacto</Typography>

          <div className="flex justify-center items-center lg:flex-row flex-col gap-2 w-full">
            
            <div className="w-1/3 flex flex-col justify-center items-center">
              <Typography variant="body-1" className="">O llamanos al</Typography>
              <div className="flex justify-center items-center ">
                  <img src={iconWhat} className="h-[58px]" alt="Logo whatsapp "/>
                  <Typography variant="body-2" className="font-bold ">+56 9 73112617</Typography>
              </div>

            </div>
            <Formulario setIsAlert={setIsAlert}/>
            <div className=" w-1/3 flex flex-col  justify-left items-center ">
                <img src={iconUbi} className="h-[58px]" alt="Logo Ubicacion "/>
                <Typography variant="body-3" className="font-bold mt-2 italic">Jorge Andres Guerra N°89</Typography>
            </div>
          </div>

          {isAlert && (
              <div className="fixed bottom-2 right-2">
                <Alerta />
              </div>
            )}

      </div>

    
    </>
  )
}

export default App
