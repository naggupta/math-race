import React from 'react'
// import { connect } from 'react-redux'
import Classes from './Background.module.css'
import PlayerSection from '../PlayerSection/PlayerSection'

function Background(props) {
    const players = props.players.map((player, index) => (
                                                            <PlayerSection
                                                              // eslint-disable-next-line react/no-array-index-key
                                                              key={index}
                                                              playerno={`${index}`}
                                                              points={player.points}
                                                            />
                                                        ))
    return (
        <div className={Classes.Background}>
            {players}
            {/* <div className={Classes.Divider}/> */}
        </div>
    )
}

export default Background
