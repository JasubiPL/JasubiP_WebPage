import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { MdPostAdd, MdFolderOpen, MdStarOutline } from "react-icons/md"
import Loading from "@/components/Loading"
import axios from "axios"
import PageLayout from "@/components/PageLayout"
import styles from '@/styles/dashboard/Dashboard.module.css'
import SetPost from "@/components/dashboard/SetPost"

export default function Dashboard(){
  const [currentUser, setCurrentUser] = useState({username:''})
  const [active, setActive] = useState({
    newPost:styles.active,
    myPost:styles.inactive,
    favorites:styles.inactive,
  })
  const [section, setSection] = useState(<SetPost />)
  const router = useRouter()

  useEffect(() =>{
    verifyUser()
  }, [])

  const verifyUser = async () =>{
    const response = await axios.get('/api/profile')
    const user = response.data
    //console.log(user)

    if(response.status === 200 && user.username === 'Admin'){
      setCurrentUser(user)
      return
    }else{
      router.push("/")
    }
  }

  const handleSection = (section) => {
    //console.log(section)
    switch(section){
      case 'new':
        setActive({
          newPost:styles.active,
          myPost:styles.inactive,
          favorites:styles.inactive,
        })
        setSection(<SetPost />)
        break
      
      case 'my':
        setActive({
          newPost:styles.inactive,
          myPost:styles.active,
          favorites:styles.inactive,
        })
        setSection('No disponible')
        break

      case 'favorites':
        setActive({
          newPost:styles.inactive,
          myPost:styles.inactive,
          favorites:styles.active,
        })
        setSection('No disponible')
        break
    }
  }

return(
  <PageLayout title={`Dashboard ${currentUser.username}`}>
    <Loading />
    <section className={styles.container}>
      <aside className={styles.aside}>
        <h2>Dashboard</h2>
        <ul>
          <li className={active.newPost} onClick={() => handleSection('new')}>
            <MdPostAdd />
            Nuevo artículo
          </li>
          <li className={active.myPost}  onClick={() => handleSection('my')}>
            <MdFolderOpen />
            Mis Articulos
          </li>
          <li className={active.favorites} onClick={() => handleSection('favorites')}>
            <MdStarOutline />
            Favoritos
          </li>
          
        </ul>
      </aside>
      {section}
    </section>
  </PageLayout>
)
}