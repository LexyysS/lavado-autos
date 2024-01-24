
import { Typography } from 'keep-react'
const CarteleraTapiz = ({nombre,UrlTapiz, PTapizAuto, PTapizSuv,Ptapiz4x4 , iAuto, iSuv,i4x4}) => {
  return (
    <div className="lg:w-1/2 md:w-full sm:min-w-[400px] w-full  lg:h-3/5 md:h-1/2 h-1/2  rounded-3xl shadow-xl mb-4  flex justify-center " style={{WebkitBoxShadow:"0px 0px 32px 10px rgba(152,206,174,0.33)",MozBoxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)", boxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)"}} >
                <div className="lg:w-1/2 w-2/5 h-full bg-black rounded-l-3xl bg-cover bg-no-repeat bg-center" style={{backgroundBlendMode: "soft-light", backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundImage:`url(${UrlTapiz})`}}>
                    
                    
                </div>

                <div className="sm:w-1/2 w-3/5 h-full pb-3 flex flex-col rounded-r-3xl items-center justify-center p-2 " style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
                  <Typography variant="body-3" className="uppercase font-bold text-black   text-center">{nombre}</Typography>
                  <div className="w-full h-1/2 gap-2 mt-2 flex sm:mt-7 ">

                    <div className='w-1/3 flex flex-col items-center'>
                      <img className="h-[32px] w-[32px]" src={iAuto}/>
                      <Typography variant="body-4" className="uppercase font-bold mb-3  text-[#6df229] ">Auto</Typography>
                      <Typography variant="body-4" className="uppercase  text-black font-bold">{PTapizAuto}</Typography>
                    </div>

                    <div className='w-1/3 flex flex-col items-center'>
                      <img className="h-[32px] w-[32px]" src={iSuv}/>
                      <Typography variant="body-4" className="uppercase font-bold mb-3 text-[#6df229] ">Suv</Typography>
                      <Typography variant="body-4" className="uppercase  text-black font-bold">{PTapizSuv}</Typography>

                    </div>
                    <div className='w-1/3 flex flex-col items-center'>
                      <img className="h-[32px] w-[32px]" src={i4x4}/>
                      <Typography variant="body-4" className="uppercase font-bold mb-3 text-[#6df229] ">4x4</Typography>
                      <Typography variant="body-4" className="uppercase   text-black font-bold">{Ptapiz4x4}</Typography>

                    </div>

                  </div>


                </div>



            </div>
  )
}

export default CarteleraTapiz