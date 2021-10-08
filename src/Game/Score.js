import React from "react";

export default function Score(props) {
    const { scorep1, scorep2 } = props;

    return (
        <div style={{display: "flex"}}>
            <h2 style={{marginLeft: "560px", float: "left", color: "blue"}}>Player 1</h2>
            <div style={{marginLeft: "40px", marginTop: "25px", float: "left", color: "blue"}}>{scorep1}</div>
            <h2 style={{marginLeft: "40px", float: "left", color: "red"}}>Player 2</h2>
            <div style={{marginLeft: "40px", marginTop: "25px", float: "left", color: "red"}}>{scorep2}</div>
        </div>
    )
}