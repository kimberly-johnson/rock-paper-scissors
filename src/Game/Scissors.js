import React from "react";
import scissors from "../scissors.jpg";

export default function Scissors(props) {
    return (
        <div style={{ float: "left", border: `5px solid ${props.playerColor}` }}>
            <button onClick={() => props.decideWinner("scissors")}><img src={scissors} alt="scissors" width="100" height="100" /></button>
        </div>
    )
}