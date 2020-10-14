import styles from "./Navbar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>The Blog</h1>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/archive">
            <a>Archive</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
