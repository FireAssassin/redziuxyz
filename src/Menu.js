import { useEffect, useState } from "react";
import "./styles/Menu.css";

function Menu() {
    const [logged, setLogged] = useState(false);
    let contentHREF, content;

    useEffect(() => {
        if (localStorage.getItem("login")) {
            let data = JSON.parse(localStorage.getItem("login")).data;
            fetch(`https://api.redziu.xyz/user/auth`, {
                method: "POST",
                body: JSON.stringify({data: data}),
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    else throw new Error("Błąd sieci!");
                })
                .then((data) => {
                    if (data.message === "Zalogowano") {
                        localStorage.setItem(
                            "login",
                            JSON.stringify({
                                user: data.user,
                                password: data.password,
                            })
                        );
                        setLogged(true);
                    } else {
                        localStorage.removeItem("login");
                        setLogged(false);
                    }
                });
        }
    }, []);

    if (logged === false) {
        contentHREF = "./login";
        content = "Zaloguj się";
    } else {
        contentHREF = "./logout";
        content = "Wyloguj się";
    }

    return (
        <div id="Menu">
            <a href="./">Strona główna</a>
            <a href="./contact">Kontakt</a>
            <a href="./blog">Blog</a>
            <a href="./about">O mnie</a>
            <a href="./information">Informacje</a>
            <a className="toright" href={contentHREF}>
                {content}
            </a>
        </div>
    );
}

export default Menu;
