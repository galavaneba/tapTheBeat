import React from 'react';
import { Redirect } from 'react-router-dom' 
import { UserState } from '../../models';
import Button from '../Button';
import css from './Result.module.scss';

export interface ResultComponentProps {
  score: number;
}

export interface ResultActionProps {
  saveUser: (user: UserState) => void;
}

export interface ResultLocalState {
  userName: string;
  saved: boolean;
}

class Result extends React.Component<ResultComponentProps&ResultActionProps, ResultLocalState> {
  state = {
    userName: '',
    saved: false
  }

  handleSaving() {
    this.props.saveUser({
      userName: this.state.userName,
      score: this.props.score
    });

    this.setState({saved: true});
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({userName: event.target.value});
  }

  render() {
    if(this.state.saved) {
      return <Redirect to='/' />
    }

    return(
      <div className={css.content}>
        <div className={css.resultsValue}>
          Your result is {this.props.score}
        </div>

        <div className={css.inputWrapper}>
          <input type='text' placeholder='type your name' className={css.input} onChange={this.handleInputChange}/>
          <Button type='button' onClick={() => this.handleSaving()}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default Result;