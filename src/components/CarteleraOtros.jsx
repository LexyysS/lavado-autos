import { Typography } from 'keep-react'

const CarteleraOtros = ({nombre, Url ,descripcion,precio}) => {
  return (
    <div className="lg:w-1/2 md:w-full h-full rounded-lg flex flex-col " >
            <Typography variant="description-1" className="uppercase font-bold  text-[#98ceae] lg:text-[2vw] md:text-[3vw]">{nombre}</Typography>

            <div className="w-full h-full rounded-xl  " style={{WebkitBoxShadow:"0px 0px 32px 4px rgba(152,206,174,0.33)",MozBoxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)", boxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)",backgroundColor:"rgba(255,255,255,0.5)" }}>
              <div className="w-full h-2/3 bg-cover  bg-no-repeat bg-center rounded-t-xl " style={{backgroundImage:`url(${Url})`}}>

              </div>

              <div className='flex flex-col items-center' >
                  <Typography variant='body-4' className='mt-2 uppercase font-bold text-center' >{descripcion}</Typography>
                  <Typography variant='body-4' className='mt-1 font-bold' >{precio}</Typography>
              </div>


            </div>
    </div>
  )
}

export default CarteleraOtros