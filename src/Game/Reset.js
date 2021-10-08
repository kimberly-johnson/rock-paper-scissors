import React from "react";

export default function ResetButton(props) {
    return (
        <div>
            <button onClick={() => props.resetGame()} type="button" style={{ marginBottom: "30px" }}>
                Reset Score
            </button>
        </div>
    )
}