export const generateTargetBpm = () => {
  const MIN = 30;
  const MAX = 200;

  return Math.round(MIN + Math.random() * (MAX - MIN));
};
