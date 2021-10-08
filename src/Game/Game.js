import React, { useState } from "react";
import Score from "./Score";
import PlayButton from "./Reset";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

export default function Game(props) {
    const [scorep1, setScorep1] = useState(0);
    const [scorep2, setScorep2] = useState(0);
    const [message, setMessage] = useState("");
    const [rockColor, setRockColor] = useState("transparent");
    const [scissorColor,setScissorColor] = useState("transparent");
    const [paperColor, setPaperColor] = useState("transparent");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function decideWinner(playerSelection) {
        const options = ["rock", "paper", "scissors"];
        const player2Random = getRandomInt(3);
        let player1 = playerSelection;
        let player2 = options[player2Random];
        console.log("player selection", player1, "random", player2, "rock Color", rockColor, "paper Color", paperColor, "scissors color")

        switch (true) {
            case player1 === "rock" && player2 === "rock":
                setRockColor("violet");
                setScissorColor("transparent");
                setPaperColor("transparent");
                setMessage("It's a tie!!!!");
                break;
            case player1 === "rock" && player2 === "paper":
                setRockColor("blue");
                setScissorColor("transparent");
                setPaperColor("red");
                setScorep2(scorep2 + 1);
                setMessage("You lost!!!!")
                break;
            case player1 === "rock" && player2 === "scissors":
                setRockColor("blue");
                setScissorColor("red");
                setPaperColor("transparent");
                setScorep1(scorep1 + 1);
                setMessage("You won!!!!")
                break;
            case player1 === "paper" && player2 === "paper":
                setRockColor("transparent");
                setScissorColor("transparent");
                setPaperColor("violet");
                setMessage("It's a tie!!!!")
                break;
            case player1 === "paper" && player2 === "rock":
                setRockColor("blue");
                setScissorColor("transparent");
                setPaperColor("red");
                setScorep1(scorep1 + 1)
                setMessage("You won!!!!")
                break;
            case player1 === "paper" && player2 === "scissors":
                setRockColor("transparent");
                setScissorColor("red");
                setPaperColor("blue");
                setScorep2(scorep2 + 1)
                setMessage("You lost!!!!")
                break;
            case player1 === "scissors" && player2 === "rock":
                setRockColor("red");
                setScissorColor("blue");
                setPaperColor("transparent");
                setScorep2(scorep2 + 1);
                setMessage("You lost!!!!");
                break;
            case player1 === "scissors" && player2 === "scissors":
                setRockColor("transparent");
                setScissorColor("violet");
                setPaperColor("transparent");
                setMessage("It's a tie!!!!")
                break;
            case player1 === "scissors" && player2 === "paper":
                setRockColor("transparent");
                setScissorColor("blue");
                setPaperColor("red");
                setScorep1(scorep1 + 1);
                setMessage("You won!!!!");
                break;
        }
    }
    
    function resetGame(){
        setScorep1(0);
        setScorep2(0);
        setMessage("");
        setRockColor("transparent");
        setScissorColor("transparent");
        setPaperColor("transparent");
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1 >
                Rock, Paper, Scissors
            </h1>
            <Score scorep1={scorep1} scorep2={scorep2} />
            <PlayButton resetGame={resetGame} />
            <Rock decideWinner={decideWinner} playerColor={rockColor}/>
            <Paper decideWinner={decideWinner} playerColor={paperColor}/>
            <Scissors decideWinner={decideWinner} playerColor={scissorColor}/>
            <div style={{margin: "10%"}}>{message}</div>
        </div>
    )
}