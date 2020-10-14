import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import fetch from 'isomorphic-unfetch';
import BlogPostStartCard from "../components/BlogPostStartCard";




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
        {posts.map( post => (<BlogPostStartCard props={post} key={post._id} />))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
