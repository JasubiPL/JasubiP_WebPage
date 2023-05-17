import styles from "@/styles/Modal.module.css" 

export default function Modal({ message }){
return(
  <section className={styles.modal}>
    <p>
      {message}
    </p>
  </section>
)
}