import styles from "../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import CreatePostForm from "../components/CreatePostForm";
import useUser from "../data/use-user";


export default function Dashboard() {


const {user} = useUser();


  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {user ? user.username : "..."} </h1>

        <div className={styles.grid}>
         <CreatePostForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}