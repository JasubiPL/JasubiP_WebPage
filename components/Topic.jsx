import { FcClapperboard, FcElectronics, FcRating, FcCommandLine, FcDecision  } from 'react-icons/fc'
import { RiGameFill  } from 'react-icons/ri'

export default function Topic({ topic, icon }){
  return(
    <>
    {topic}
    {icon === 'Cine' ? <FcClapperboard /> :
     icon === 'Tecnologia' ? <FcElectronics /> : 
     icon === 'Curiosidades' ? <FcRating /> :
     icon === 'Development' ? <FcCommandLine /> :
     icon === 'Reflection' ? <FcDecision /> :
     icon === "Gaming" ? <RiGameFill color='#ff8f00'/> :"" }
    </>
  )
}