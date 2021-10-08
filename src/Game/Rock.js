import React from "react";
import rock from "../rock.jpg"

export default function Rock(props) {
    return (
        <div style={{ float: "left", marginLeft: "37%", marginRight: "20px", border: `5px solid ${props.playerColor}` }}>
            <button onClick={() => props.decideWinner("rock")} onAnimationEnd={() => props.setBlink(0)}><img src={rock} alt="rock" width="100" height="100" /></button>
        </div>
    )
}
