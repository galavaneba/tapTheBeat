export const comparator = (a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0)