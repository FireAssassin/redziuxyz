import React from "react";
import ReactDOM from "react-dom/client";
import Background from './Background'
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";
import Information from "./Information";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Menu from './Menu';
import Blog from "./Blog";
import CheckAPI from './CheckAPI';
import "./styles/index.css";

const body = ReactDOM.createRoot(document.body);

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.setProperty("--menu-height", `${document.querySelector("#Menu").scrollHeight}px`);
});

switch(window.location.pathname) {
    case "/":
        body.render(
            <React.StrictMode>
                <Menu />
                <Main />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    case "/contact":
        body.render(
            <React.StrictMode>
                <Menu />
                <Contact />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    case "/about":
        body.render(
            <React.StrictMode>
                <Menu />
                <About />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    case "/information":
        body.render(
            <React.StrictMode>
                <Menu />
                <Information />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    case "/login":
        body.render(
            <React.StrictMode>
                <Login />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    case "/logout":
        body.render(
            <React.StrictMode>
                <Logout />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    case "/blog":
        body.render(
            <React.StrictMode>
                <Menu />
                <Blog />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
    default:
        body.render(
            <React.StrictMode>
                <NotFound />
                <CheckAPI />
                <Background />
            </React.StrictMode>
        );
        break;
}