import React from 'react';
import ResultsList from '../ResultsList';
import { Link } from 'react-router-dom';
import css from './LeaderboardWrapper.module.scss';

const LeaderboardWrapper: React.FC<any> = () => (
  <div className={css.content}>
    <h1 className={css.header}>
      Top scores
    </h1>
    <ResultsList />
    <Link to='/game' className={css.link}>
      Play
    </Link>
  </div>
);

export default LeaderboardWrapper;
