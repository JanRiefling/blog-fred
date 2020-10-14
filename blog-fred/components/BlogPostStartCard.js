import styles from "./BlogPostStartCard.module.css";
import Link from "next/link";

export default function BlogPostStartCard({ props }) {
  return (
    <div className={styles.card}>
      <div className={styles.postCardHeader}>
        <h3>{props.title}</h3>
        <h5>by {props.author}</h5>
        <h6>{new Date(props.timestamp).toLocaleDateString()}</h6>
      </div>
      <div className={styles.postCardBody}>
        <p>{props.body}</p>
      </div>
      <div className={styles.postCardFooter}>
        <Link href={`/posts/${props._id}`}>
          <a>Read more...</a>
        </Link>
      </div>
    </div>
  );
}
