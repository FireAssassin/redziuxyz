import { useState, useEffect } from "react";
import "./styles/Main.css";
const images =
    "https://opengraph.githubassets.com/8056806c004513a73999244bf835282e797c60a057c4f0c2519074dc633303c1/FireAssassin/";

function Pages() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        let projectsRequest = [];
        fetch("https://api.github.com/users/FireAssassin/repos", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    projectsRequest.push({
                        id: data[i].id,
                        name: data[i].name,
                        description: data[i].description,
                        html_url: data[i].html_url,
                        image: images + data[i].name,
                    });
                }
            })
            .then(() => setProjects(projectsRequest));
    }, []);
    return (
        <div className="projects">
            {projects.map((project) => (
                <p key={project.id}>
                    <a href={project.html_url}>
                        <img src={project.image} alt={project.name} />
                    </a>
                </p>
            ))}
        </div>
    );
}

function Main() {
    return (
        <main className="Main">
            <Pages />
        </main>
    );
}

export default Main;
