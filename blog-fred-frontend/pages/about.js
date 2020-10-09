import styles from "../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>We are ...</h1>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Chef Dang &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </a>
          <a href="#" className={styles.card}>
            <h3>Mia Dong &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Elch
        </a>
      </footer>
    </div>
  );
}
