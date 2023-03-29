import { useState, useEffect } from "react";
import "./styles/blog.css";

function DateString(date) {
    const dateObject = new Date(date);
    return `${dateObject.getHours()}:${dateObject.getMinutes()} ${dateObject.getDate()}.${
        dateObject.getMonth() + 1
    }.${dateObject.getFullYear()}`;
}

function Blog() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function fetchData() {
            fetch("https://api.redziu.xyz/blog", {
                method: "GET",
                cache: "no-cache",
            })
                .then((response) => response.json())
                .then((data) => {
                    data = data.sort(
                        (a, b) => new Date(b.date) - new Date(a.date)
                    );
                    setBlog(data);
                });
        }
        fetchData();
    }, []);

    return (
        <main className="Blog">
            <h1>Blog</h1>
            {blog.map((post) => (
                <div className="post">
                    <div className="title">
                        <h2>
                            <span>{post.title}</span>
                        </h2>
                        <span>{DateString(post.date)}</span>
                    </div>
                    <p>
                        {post.content}
                        <p className="author">{post.author}</p>
                    </p>
                </div>
            ))}
        </main>
    );
}

export default Blog;
