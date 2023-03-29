import "./styles/Background.css";

const objects = [...Array(25).keys()];

const min = {
    x: 5,
    speed: 5,
    color: 0,
    alpha: 0.3,
};
const max = {
    x: 95,
    speed: 20,
    color: 120,
    alpha: 0.5,
};

function Background() {
    return (
        <div className="background">
            {objects.map((object, index) => {
                let anim = Math.floor(Math.random() * (4) + 1);
                let background = `rgba(255, ${(
                    Math.random() * (max.color - min.color + 1) +
                    min.color
                ).toFixed(2)}, 0, ${
                    Math.random() * (max.alpha - min.alpha + 1) + min.alpha
                })`;
                let posx = `${(
                    Math.random() * (max.x - min.x + 1) +
                    min.x
                ).toFixed(0)}%`;
                let animation = `move${anim} ${(
                    Math.random() * (max.speed - min.speed + 1) +
                    min.speed
                ).toFixed(2)}s linear infinite`;
                return (
                    <div
                        className="object"
                        key={index}
                        style={{
                            left: posx, backgroundColor: background, animation: animation
                        }}
                    >
                        {/* <div className="left" style={{left: posx, backgroundColor: background, animation: animation}}></div>
                        <div className="right" style={{left: posx, backgroundColor: background, animation: animation}}></div>
                        <div className="top" style={{left: posx, backgroundColor: background, animation: animation}}></div>
                        <div className="bottom" style={{left: posx, backgroundColor: background, animation: animation}}></div>
                        <div className="front" style={{left: posx, backgroundColor: background, animation: animation}}></div>
                        <div className="back" style={{left: posx, backgroundColor: background, animation: animation}}></div> */}
                    </div>
                );
            })}
        </div>
    );
}

export default Background;
