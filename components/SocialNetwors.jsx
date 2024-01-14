import { FaGithub } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from 'react-icons/ai'
import styles from '../styles/SocialNetworks.module.css'

export const SocialNetwork = () =>{
  return(
    <div className={styles.social_network_container}>
      <a href='https://x.com/jasubip' target='_blank'><BsTwitterX /></a>
      <a href='https://www.instagram.com/jasubip' target='_blank'><AiFillInstagram /></a>
      <a href="http://github.com/JasubiPL" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      {/*loginUser*/}
  </div>
  )
}