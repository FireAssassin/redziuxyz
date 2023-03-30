import { useState, useEffect } from "react";

function CheckAPI() {
    const [data, setData] = useState("Offline");

    useEffect(() => {
        async function fetchData() {
            fetch("https://api.redziu.xyz/", { method: "GET", cache: "no-cache" })
                .then(data =>
                    setData(data.status === 200 ? "Online" : "Offline")
                );
        }
        fetchData();
    }, []);

    return (
        <span
            className="api"
            style={{
                position: "fixed",
                right: 0 + "px",
                bottom: 0 + "px",
                textAlign: "right",
            }}
        >
            Status serwera: {data}
        </span>
    );
}

export default CheckAPI;
