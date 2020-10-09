import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import useUser from "../data/use-user";
import styles from "./Footer.module.css";
import LogoutButton from "./LogoutButton";

export default function Footer() {
  const { user } = useUser();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    if (user.username) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <footer className={styles.footer}>
      {loggedIn === false ? <LoginForm /> : <LogoutButton />}
      <a href="#" target="_blank" rel="noopener noreferrer">
        Powered by Elch
      </a>
    </footer>
  );
}
