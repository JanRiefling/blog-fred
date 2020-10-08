import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import cookie from "js-cookie";
import Router from 'next/router';


export default function Home() {
  const { data, revalidate } = useSWR("/api/jwt-util", async function (args) {
    const res = await fetch(args);
    return res.json();
  });

  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.username) {
    loggedIn = true;
  }

  console.log(loggedIn);

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
            <h3>Blog Entry One &rarr;</h3>
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

      <footer className={styles.footer}>
        {!loggedIn ? 

        <LoginForm /> :

        <div>
        <button
          onClick={() => {
            cookie.remove('token');
            revalidate();
            Router.push('/');
          }}
        >
          Logout
        </button>
      </div>
        }
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Elch
        </a>
      </footer>
    </div>
  );
}
