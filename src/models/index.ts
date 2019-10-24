export interface UserState {
  userName: string;
  score: number;
}

export interface ResultState {
  score: number;
}

export interface State {
  results: ResultState;
  users: {
    users: UserState[];
  };
}