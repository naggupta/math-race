import React from 'react'

function RaceComplete(props) {
    const winner = props.players[0].points >= props.players[1].points ? props.players[0].name : props.players[1].name;

    return (
        <div>
            <p>{winner} winner</p>
            <a
              role="button"
              onClick={(e) => props.reset()}
              tabIndex={0}
              onKeyPress={(e) => props.reset()}
            >Play Again
            </a>
        </div>
    )
}

export default RaceComplete
