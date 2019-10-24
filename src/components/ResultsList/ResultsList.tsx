import React from 'react';
import { UserState } from '../../models';
import css from './ResultsList.module.scss';
import { comparator } from '../../utils/comparator';

export interface ResultsListProps {
  users: UserState[];
  fakeCall: () => void;
}

class ResultsList extends React.Component<ResultsListProps> {
  componentDidMount() {
    this.props.fakeCall();
  }

  sortUsersScore(){
    return this.props.users.sort(comparator);
  }

  render() {
    return (
      <div className={css.content}>
        {
          this.props.users.length !== 0 
          ? <ul>
              {this.sortUsersScore().map((user, index) => (
                <li className={css.wrapper} key={index}>
                  {`${index + 1}. ${user.userName} - ${user.score}`}
                </li>))}
            </ul>
          : <p>There is no leader yet</p>
        }
      </div>
    );
  }
}

export default ResultsList;
