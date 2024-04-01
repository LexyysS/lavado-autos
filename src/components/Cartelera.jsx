
import { Typography } from 'keep-react'
import { useState } from 'react'




const Cartelera = ({nombre ,UrlAuto , PLavadoSimple, PLavadoEncerado, PLavadoAspirado, PLavadoFull , IconoSimple, IconoEncerado, IconoAspirado, IconoFull}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className = " lg:h-[60vh] md:h-[50vh] h-[50vh] min-w-[300px] lg:min-w-[420px]  mb-5 rounded-xl shadow-xl bg-white "  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <div className= {` w-full h-1/2 bg-black rounded-t-xl bg-cover bg-no-repeat bg-center text-center transition-all ease-in-out pt-3 ${isHovered ? 'scale-105' : ''}`} style={{objectFit:"cover",clipPath:"ellipse(100% 69% at 50% 30%)",backgroundImage:`url(${UrlAuto})`}}>
                    <Typography variant="description-4" className="uppercase font-bold  inline bg-gray-400 px-2 py-1 rounded-3xl opacity-60 text-black mt-8 text-center md:text-[2.7vw] lg:text-[1.5vw]">{nombre}</Typography>
                    
                </div> 

                <div className="h-1/2 p-8 sm:p-12  flex flex-col items-left justify-center relative">

                    <Typography variant="body-1" className='mb-2 text-[min(4.8vw,1.3rem)]'><span className="float-left mr-4"><img className="xl:h-[32px]  h-[30px]" src={IconoSimple}/> </span>Lavado simple <span className="float-right font-bold">{PLavadoSimple}</span></Typography>
                    <Typography variant="body-1" className='mb-2 text-[min(4.8vw,1.3rem)]'><span className="float-left mr-4"><img className="xl:h-[32px]  h-[30px]" src={IconoEncerado}/> </span>Lavado encerado <span className="float-right font-bold">{PLavadoEncerado}</span></Typography>
                    <Typography variant="body-1" className='mb-2 text-[min(4.8vw,1.3rem)]'><span className="float-left mr-4"><img className="xl:h-[32px]  h-[30px]" src={IconoAspirado}/> </span>Lavado aspirado <span className="float-right font-bold">{PLavadoAspirado}</span></Typography>
                    <Typography variant="body-1" className='mb-2 text-[min(4.8vw,1.3rem)]'><span className="float-left mr-4"><img className="xl:h-[32px]  h-[30px]" src={IconoFull}/> </span>Lavado Full <span className="float-right font-bold">{PLavadoFull}</span></Typography>

                    


                </div>



            </div>
  )
}

export default Cartelera