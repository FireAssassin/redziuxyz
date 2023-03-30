import "./styles/Login.css";

async function login() {
    let username = document.getElementsByClassName("UsernameLOG")[0].value;
    let password = document.getElementsByClassName("PasswordLOG")[0].value;

    await fetch(`https://api.redziu.xyz/user/auth`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message !== "Zalogowano") {
                document.querySelector(".loginerror").innerHTML = data.message;
            } else {
                localStorage.setItem("login", JSON.stringify(data.token));
                window.location.replace("/");
            }
        });
}

async function register() {
    let username = document.getElementsByClassName("UsernameREG")[0].value;
    let password = document.getElementsByClassName("PasswordREG")[0].value;

    let headersList = {
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
        username: username,
        password: password,
    });

    await fetch(`https://api.redziu.xyz/user/`, {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
        mode: "same-origin",
    })
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".registererror").innerHTML = data.message;
        });
}

function Login() {
    return (
        <main className="Login">
            <div>
                <div className="login">
                    <h1>Zaloguj się</h1>
                    <form method="GET">
                        <label>
                            Login:
                            <input
                                type="text"
                                name="username"
                                className="UsernameLOG"
                            />
                        </label>
                        <label>
                            Hasło:
                            <input
                                type="password"
                                name="password"
                                className="PasswordLOG"
                            />
                        </label>
                        <input
                            type="button"
                            onClick={() => login()}
                            value="Zaloguj"
                        />
                    </form>
                    <p className="loginerror"></p>
                </div>
                <div className="register">
                    <h1>Zarejestruj się</h1>
                    <form method="POST">
                        <label>
                            Login:
                            <input
                                type="text"
                                name="username"
                                className="UsernameREG"
                            />
                        </label>
                        <label>
                            Hasło:
                            <input
                                type="password"
                                name="password"
                                className="PasswordREG"
                            />
                            <p>Hasło musi zawierać przynajmniej 5 znaków</p>
                        </label>
                        {/* <label>
                            Powtórz hasło:
                            <input type="password" name="password" />
                        </label> */}
                        <input
                            type="button"
                            onClick={() => register()}
                            value="Zarejestruj"
                        />
                    </form>
                    <p className="registererror"></p>
                </div>
            </div>
            {/* <input onClick={() => window.location.replace("/")} value="Strona główna"/> */}
            <a href="/">Strona główna</a>
        </main>
    );
}

export default Login;
