
import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";
import { Typography } from 'keep-react'

const Acordion = ({titulo,contenido1,contenido2,contenido3,contenido4}) => {
  return (
    <Accordion className="pb-10  text-black w-full rounded-md">
      <Accordion.Panel className="bg-[#98ceae] rounded-md">
        <Accordion.Container>
          <Accordion.Title ><Typography variant="body-4" className="font-bold uppercase text-[#225710] text-[min(5vw,1.2rem)]">{titulo}</Typography></Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content className="lg:h-[70px] flex items-center text-black ">
          <div className="w-1/3 mr-2">
            <Typography variant="body-1" className="font-bold ">Lavado Simple</Typography>
          </div>
          <div className="w-2/3 pl-3 md:text-lg border-l-4 border-[#fc9ab6] ">
            <Typography variant="body-1">{contenido1}</Typography>
          </div>
        </Accordion.Content>
        <Accordion.Content className="lg:h-[70px]  flex items-center text-black">
          <div className="w-1/3 mr-2">
            <Typography variant="body-1" className="font-bold ">Lavado Encerado</Typography>
          </div>
          <div className="w-2/3 pl-3 md:text-lg border-l-4 border-[#fc9ab6]">
            <Typography variant="body-1">{contenido2}</Typography>
          </div>
        </Accordion.Content>
        <Accordion.Content className="lg:h-[70px]  flex items-center text-black">
          <div className="w-1/3 mr-2">
            <Typography variant="body-1" className="font-bold ">Lavado Aspirado</Typography>
          </div>
          <div className="w-2/3 pl-3 md:text-lg border-l-4 border-[#fc9ab6]">
            <Typography variant="body-1">{contenido3}</Typography>
          </div>
        </Accordion.Content>
        <Accordion.Content className="lg:h-[90px]  flex items-center text-black">
          <div className="w-1/3  mr-2">
            <Typography variant="body-1" className="font-bold ">Lavado Full</Typography>
          </div>
          <div className="w-2/3 pl-3 md:text-lg border-l-4 border-[#fc9ab6]">
            <Typography variant="body-1">{contenido4}</Typography>
          </div>
            
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

export default Acordion