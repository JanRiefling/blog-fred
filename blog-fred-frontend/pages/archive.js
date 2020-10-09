import styles from "../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../components/Navbar";
import Link from "next/link";

export default function Archive() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Archive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Find former Posts by ...</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link href="#">
                  <a>Categorie</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Categorie</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Year</h3>
            <ul>
              <li>
                <Link href="#">
                  <a>2016</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>2017</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Elch
        </a>
      </footer>
    </div>
  );
}
