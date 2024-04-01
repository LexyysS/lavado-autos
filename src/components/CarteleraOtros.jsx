import { Typography } from 'keep-react'

const CarteleraOtros = ({nombre, Url ,descripcion,precio}) => {
  return (
    <div className="lg:w-1/2 md:w-full w-full h-full rounded-lg flex flex-col " >
            <Typography variant="description-1" className="uppercase font-bold  text-[#98ceae] sm:text-left text-center text-[min(6vw,2.2rem)] mb-2">{nombre}</Typography>

            <div className="w-full h-full rounded-xl  " style={{WebkitBoxShadow:"0px 0px 32px 4px rgba(152,206,174,0.33)",MozBoxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)", boxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)",backgroundColor:"rgba(255,255,255,0.5)" }}>
              <div className="w-full h-2/3 bg-cover  bg-no-repeat bg-center rounded-t-xl " style={{backgroundImage:`url(${Url})`}}>

              </div>

              <div className='flex flex-col h-1/3 items-center justify-center' >
                  <Typography variant='body-4' className=' uppercase font-bold text-center' >{descripcion}</Typography>
                  <Typography variant='body-3' className=' font-bold text-[#225710]' >{precio}</Typography>
              </div>


            </div>
    </div>
  )
}

export default CarteleraOtros