import { useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function Dashboard(){
  const router = useRouter()

  useEffect(() =>{
    verifyUser()
  }, [])

  const verifyUser = async () =>{
    const response = await axios.get('/api/profile')
    const user = response.data.username

    if(response.status === 200 && user === 'Admin'){
      return
    }else{
      router.push("/")
    }
  }

return(
  <h1>Dashboard</h1>
)
}