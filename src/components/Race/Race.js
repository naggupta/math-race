import React from 'react'
// import { connect } from 'react-redux'
import Classes from './Race.module.css'
import PlayerSection from '../PlayerSection/PlayerSection'

function Race(props) {
    const players = props.players.map((player, index) => (
        <PlayerSection
          key={player.id}
          playerno={`${player.id}`}
        />
    ));
    console.log('[Race] render', props.players);
    return (
        <div className={Classes.Race}>
            {players}
            {/* <div className={Classes.Divider}/> */}
        </div>
    )
}

export default Race
