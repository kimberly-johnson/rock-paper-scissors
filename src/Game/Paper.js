import React from "react";
import paper from "../paper.jpg"

export default function Paper(props){
    return (
        <div style={{ float: "left", marginRight: "20px", border: `5px solid ${props.playerColor}` }}>
            <button onClick={() => props.decideWinner("paper")}><img src={paper} alt = "paper" width = "100" height = "100" /></button>
        </div>
    )
}