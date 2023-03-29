import "./styles/Logout.css";

function logout(logout) {
    if (logout) {
        localStorage.removeItem("login");
        window.location.replace("/");
    } else {
        window.location.replace("/");
    }
}

function Logout() {
    if (localStorage.getItem("login")) {
        return (
            <main className="Logout">
                <h1>Logout</h1>
                <h2>Czy jesteś pewien?</h2>
                <div>
                    <input type="button" onClick={() => logout(true)} value="Tak" />
                    <input type="button" onClick={() => logout(false)} value="Nie" />
                </div>
            </main>
        );
    } else {
        return (
            <main className="Logout">
                <h1>Logout</h1>
                <p>Nie jesteś zalogowany.</p>
                <input type="button" onClick={() => logout(false)} value="Wróć" />
            </main>
        );
    }
}

export default Logout;
