import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Typography } from 'keep-react'
import CarteleraTapiz from './CarteleraTapiz';
import CarteleraOtros from './CarteleraOtros';

const ParallaxLavado = ({url,tapiz2,tapiz3,focos,patentes,simunizado,i4x4,iAuto,iSuv}) => {
  return (
    <ParallaxBanner
      layers={[{ image: url, speed:40 }]}
      className="h-1/2"
    >
        <div className="lg:h-[120vh] md:h-[130vh] h-[130vh] xl:px-60 lg:px-50 md:px-28 px-5 py-5 bg-cover bg-no-repeat bg-center flex flex-col" style={{backgroundColor:'rgba(0,0,0,0.85)', WebkitFilter:'blur(0px) saturate(1)'}}>
            <Typography variant="heading-3" className="uppercase font-bold pt-12 mb-8 text-[#98ceae] lg:text-[3.5vw] md:text-[5.5vw] text-[8vw] text-center sm:text-left">Limpieza de tapiz</Typography>

          
            <div className="w-full lg:h-1/2 h-2/5 md:h-2/5 flex lg:flex-row gap-2 md:flex-col flex-col justify-center items-center">
            
                <CarteleraTapiz UrlTapiz={tapiz2} nombre={"Tapiz 2 corridas de asiento"} PTapizAuto={"$25.000"} PTapizSuv={"$30.000"} Ptapiz4x4={"$35.000"} iAuto={iAuto} iSuv={iSuv} i4x4={i4x4}/>
                <CarteleraTapiz UrlTapiz={tapiz3} nombre={"Tapiz 3 corridas de asiento"} PTapizAuto={"$35.000"} PTapizSuv={"$40.000"} Ptapiz4x4={"$45.000"} iAuto={iAuto} iSuv={iSuv} i4x4={i4x4}/>
            </div>



            <div className="w-full lg:h-1/2 md:h-2/3 pb-5 flex lg:flex-row md:flex-col flex-col gap-3 justify-center items-center mt-1">

                <CarteleraOtros nombre={"Restauracion de focos"} Url={focos} descripcion={"Lijado y pulido"} precio={"$8.000"}/>
                <CarteleraOtros nombre={"Grabado de patentes c/u"} Url={patentes} descripcion={"Grabado de patentes con Acido"} precio={"$2.000"}/>
                <CarteleraOtros nombre={"Simunizado por pieza"} Url={simunizado} descripcion={"Pulido con pasta para brillo y suavidad"} precio={"$7.000"}/>



            </div>
        </div>

    </ParallaxBanner>
  )
}

export default ParallaxLavado
