import styles from "./BlogPostStartCard.module.css"

export default function BlogPostStartCard({props}) {
   
   return (
    <div className={styles.card}>
        <h3>{props.title}</h3>
   <p>{props.body}</p>
        <p></p>
        <p></p>
    </div>
    );
}