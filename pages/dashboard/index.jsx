import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { MdPostAdd, MdFolderOpen, MdStarOutline } from "react-icons/md"
import Loading from "@/components/Loading"
import PageLayout from "@/components/PageLayout"
import styles from '@/styles/dashboard/Dashboard.module.css'
import SetPost from "@/components/dashboard/SetPost"
import { SessionContext } from "@/hooks/SessionContext"
import MyPosts from "@/components/dashboard/MyPosts"

export default function Dashboard(){
  const { user } = useContext(SessionContext)

  //Styles actyive section
  const [active, setActive] = useState({
    newPost:styles.active,
    myPost:styles.inactive,
    favorites:styles.inactive,
  })
  const [section, setSection] = useState(<SetPost />)
  const router = useRouter()

  useEffect(() =>{
    if(user[2] === 'standar' || user[2] === undefined) router.push("/") 
  
  }, [])



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
        setSection(<MyPosts />)
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
  <PageLayout title={`Dashboard ${user[0]}`}>
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