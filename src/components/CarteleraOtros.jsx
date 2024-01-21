import { Typography } from 'keep-react'

const CarteleraOtros = ({nombre, Url ,descripcion,precio}) => {
  return (
    <div className="lg:w-1/3 md:w-full h-full rounded-lg flex flex-col " >
            <Typography variant="description-1" className="uppercase font-bold  text-[#98ceae] md:text-[3vw]">{nombre}</Typography>

            <div className="w-full h-full rounded-xl  bg-white " style={{WebkitBoxShadow:"0px 0px 32px 4px rgba(152,206,174,0.33)",MozBoxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)", boxShadow:"0px 0px 32px 30px rgba(152,206,174,0.23)"}}>
              <div className="w-full h-2/3 bg-cover  bg-no-repeat bg-center rounded-t-xl " style={{backgroundImage:`url(${Url})`}}>

              </div>

              <div className='flex flex-col items-center'>
                  <Typography variant='body-1' className='mt-2 uppercase font-bold text-center' >{descripcion}</Typography>
                  <Typography variant='body-1' className='mt-1' >{precio}</Typography>
              </div>


            </div>
    </div>
  )
}

export default CarteleraOtros