import React, { Fragment } from 'react';
import * as Classes from './RaceComplete.module.css';

function RaceComplete(props) {
  const winner = props.players[0].points >= props.players[1].points ? props.players[0].name : props.players[1].name;

  const playAgain=() => {
    props.reset();
    props.history.push('/math-race/setup')
  }

  const players = [...props.players].reverse().map((player) => {
    if (!player.name) return <Fragment key={player.id} />;
    const score = +player.points + (winner === player.name ? 10 : 0);
    return (
      <div key={player.id}>
        <h1>
          {player.name}, {winner === player.name ? 'You won!!' : 'Opps You lost!!'}
        </h1>
        <span className={['fa-stack', Classes.Score].join(' ')}>
          <span className={['fa fa-star fa-stack-2x'].join(' ')} />
          <strong className="fa-stack-1x">{player.points}</strong>
          <span className={Classes.ScoreLabel}>Correct</span>
        </span>
        {/* <span className={['fa-stack', Classes.Score].join(' ')}>
          <span className={['fa fa-star fa-stack-2x'].join(' ')} />
          <strong className="fa-stack-1x">{-player.wrong}</strong>
          <span className={Classes.ScoreLabel}>Wrong</span>
        </span> */}
        {/* <span className={['fa-stack', Classes.Score].join(' ')}>
                    <span className={['fa fa-star fa-stack-2x'].join(' ')} />
                    <strong className="fa-stack-1x">
                    {0}
                    </strong>
                    <span className={Classes.ScoreLabel}>Time Bonous</span>
                </span> */}
        <span className={['fa-stack', Classes.Score].join(' ')}>
          <span className={['fa fa-star fa-stack-2x'].join(' ')} />
          <strong className="fa-stack-1x">{winner === player.name ? 10 : 0}</strong>
          <span className={Classes.ScoreLabel}>Win Bonus</span>
        </span>
        <span className={['fa-stack', Classes.Score].join(' ')}>
          <span className={['fa fa-star fa-stack-2x'].join(' ')} />
          <strong className="fa-stack-1x">{score}</strong>
          <span className={Classes.ScoreLabel}>Total</span>
        </span>
      </div>
    );
  });
  return (
    <div className={Classes.RaceComplete}>
      {players}
      <button type="button" onClick={playAgain} onKeyPress={playAgain} className={['w3-btn', 'w3-round-large', Classes.BtnGo].join(' ')}>
        Play Again &gt;&gt;
      </button>
    </div>
  );
}

export default RaceComplete;
