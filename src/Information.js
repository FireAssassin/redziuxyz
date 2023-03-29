import "./styles/Information.css";

function Information() {
    return (
        <main className="Information">
            <div>
                <h1>Informacje o stronie</h1>
                <p>
                    Strona została stworzona w celu nauki programowania w React.
                    Hostowana jest przy pomocy NodeJS.
                    <br />
                    Użyte technologie: React, NodeJS, HTML, CSS, JavaScript.
                    <br />
                    <p className="author">
                        Wersja strony <span className="bold">3.1.0</span>
                        <br />
                        grok#0113.
                    </p>
                </p>
            </div>
        </main>
    );
}

export default Information;
