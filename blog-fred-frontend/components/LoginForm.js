import { useState } from "react";

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");


    function performLogin(e) {
        e.preventDefault();
        console.log(username + " " + password);
    }

    return (
        <form onSubmit={performLogin}>
            <input
                name="username"
                type="text"
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