import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { generateTargetBpm } from '../../utils/generateTargetBPM';
import { ResultState } from '../../models';
import css from './Game.module.scss';

export interface GameProps {
  score: number;
}

export interface GameActionsProps {
  saveResult: (result: ResultState) => void;
}

export interface GameLocalState {
  targetBpm: number;
  timeRemainingInSeconds: number;
  started: boolean;
  beatTimes: Date[];
  currentScore: number;
  avgBpm: number;
  exhilaration: string;
}

class Game extends React.Component<GameProps&GameActionsProps, GameLocalState> {
  private timer: any;

  state = {
    targetBpm: generateTargetBpm(),
    timeRemainingInSeconds: 10,
    started: false,
    beatTimes: [],
    currentScore: 0,
    avgBpm: 0,
    exhilaration: ''
  }

  decrementTimeRemaining = () => {
    if (this.state.timeRemainingInSeconds > 0) {
      this.setState({ timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1 });
    } else {
      this.setState({started: false});
      this.setState({avgBpm: this.calculateBpm()});
      this.countScore();
      this.props.saveResult({score: this.state.currentScore});
      
      clearInterval(this.timer!);
    }
  }

  startCountDown() {
    this.timer = setInterval(() => {
      this.decrementTimeRemaining();
    }, 1000);
  }

  onPlayClick() {
    if(!this.state.started) {
      this.startCountDown();
      this.setState({started: true});
    }

    if(this.state.started) {
      this.setState(prevState => ({
        beatTimes: [...prevState.beatTimes, new Date()]
      })) 
    }
  }

  continueGame() {
    this.reset();
  }

  reset() {
    this.setState({
      targetBpm: generateTargetBpm(),
      timeRemainingInSeconds: 10,
      started: false,
      avgBpm: 0,
      exhilaration: '',
    });
  }

  calculateBpm() {
    const MS_PER_MIN = 60000;
    let diffs: any[] = [];
    let { beatTimes } = this.state;
  
    beatTimes.reduce((prev, curr) => {
      diffs.push(curr - prev);
      return curr;
    }, beatTimes[0]);
  
    if (diffs.length > 1) {
      diffs.shift();
    }

    const bpms = diffs.map((diff) => MS_PER_MIN / diff);
    const sumBpm = bpms.reduce((memo, x) => { return memo + x; }, 0);
    const avgBpm = Math.round(sumBpm / bpms.length);
  
    return avgBpm;
  }

  countScore() {
    const { targetBpm } = this.state;
    const bpm = this.calculateBpm();

    const correct = Math.abs(targetBpm - bpm) <= 10;

    if (correct) {
      this.setState({currentScore: this.state.currentScore + 5});
      this.setState({exhilaration: 'Well done!'});

      if (targetBpm === bpm) {
        this.setState({currentScore: this.state.currentScore + 10});
        this.setState({exhilaration: 'Perfect!'});
      }
    } else {
      this.setState({exhilaration: 'Nope! Try again'});
    }
  }

  render() {
    const {targetBpm, timeRemainingInSeconds, currentScore, avgBpm, exhilaration} = this.state;

    return (
      <div className={css.content}>
        <div className={css.target}>
          Target: {targetBpm}
        </div>

        <div className={css.timer}>
          Timer: {timeRemainingInSeconds}
        </div>

        <div className={css.score}>
          <p>Score: {currentScore} </p>
          {
            exhilaration && <p>
              {exhilaration}
            </p>
          }
          {
            avgBpm > 0 && <p>
              Your BPM was {avgBpm}!
            </p>
          }
        </div>

        {
          timeRemainingInSeconds !== 0 ?
          <div className={css.tachpad} onClick={() => this.onPlayClick()}>
            Tap here to start
          </div> :
          <Button type='button' onClick={() => this.continueGame()}>
            Play again
          </Button>
        }
        { 
          currentScore > 0 && 
          <Link to='/result' className={css.link}>
            Save result
          </Link>
        }
      </div>
    );
  }
};

export default Game;
