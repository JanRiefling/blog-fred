import { useState } from "react";
import Router from 'next/router';
import cookie from 'js-cookie';

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");


    function performLogin(e) {
        e.preventDefault();
        
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        })
          .then((r) => {
            return r.json();
          })
          .then((data) => {
            if (data && data.error) {
              setLoginError(data.message);
            }
            if (data && data.token) {
              //set cookie
              cookie.set('token', data.token, {expires: 2});
              Router.push('/');
            }
          });
    }

    return (
        <form onSubmit={performLogin}>
            <input
                name="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <input type="submit" value="Submit" />
            {loginError && <p>{loginError}</p>}
        </form>
    )
}

export default LoginForm;