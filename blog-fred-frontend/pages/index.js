import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import fetch from 'isomorphic-unfetch';




export async function getStaticProps() {

  const res = await fetch("http://localhost:3000/api/posts")
    const posts = await res.json()

  return {
     props: {
       posts,
      },
    }
  }
  

export default function Home({posts}) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our Blog!</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
        {posts.map(post => (
            <h3>{post.title}</h3>
            ))}
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Blog Entry Two &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Blog Entry 3 &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Blog Entry Four &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
