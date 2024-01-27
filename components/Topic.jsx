import { useEffect, useState } from 'react'

export default function Topic({ topic, className }){

  const [theme, setTheme] = useState('')

  useEffect(() =>{
    if(topic === 'Tecnologia'){
      setTheme(' bg-green-800 text-green-300 border-2 border-green-300')
    }
    else if(topic === 'Reflexión'){
      setTheme(' bg-yellow-800 text-yellow-300 border-2 border-yellow-300')
    }
    else if(topic === 'Desarrollo de Software'){
      setTheme(' bg-blue-800 text-blue-300 border-2 border-blue-300')
    }
    else if(topic === 'Cine'){
      setTheme(' bg-red-800 text-red-300 border-2 border-red-300')
    }
    else if(topic === 'Gaming'){
      setTheme(' bg-purple-800 text-purple-300 border-2 border-purple-300')
    }
  
  },[])
  return(
    <span className={`${className} ${theme} px-3 rounded-full`}>
      {topic}
    </span>
  )
}