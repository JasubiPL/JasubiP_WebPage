import { FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import styles from '../styles/SocialNetworks.module.css'

export const SocialNetwork = ({ className }) =>{
  return(
    <div className={`${styles.social_network_container} ${ className }`}>
      <a href='https://x.com/jasubip' target='_blank'><BsTwitterX /></a>
      <a href='https://www.linkedin.com/in/jasubip/' target='_blank'><FaLinkedin /></a>
      <a href="http://github.com/JasubiPL" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      {/*loginUser*/}
  </div>
  )
}