const top_rated = [9965,12902,13976,14438,8016,8290,8785,9063,10293,14611,15359,15400,17905,21683,22257,22553,24357,24660,24696,24914,25572,32334,32916,34326,36968]
const best_picks = [38234,39768,41937,1405,11205,11606,12683,12708,45706,45864,47715,47759,50162,53168,54287,55146,60843,73884,77875,113279,115199,179150,210947,253272,253303]
const you_may_like = [290999,335970,344041,357786,362584,367326,406563,11427,14590,14594,22289,42884,51533,137698,42159,81949,170657,282963,452830,19433]
const all_time_hits = [20894,30055,44297,12778,13894,13915,14595,15080,15320,16133,17435,17796,18762,20848,21620,24784,25117,27260,27850,27935,30238,32318,34283,36095,37129]

const movieRoutes = {
  fetchTopRated: {
    order: 1,
    category: 'Top Rated',
    type: 'movie',
    url: top_rated
  },
  fetchActionMovies: {
    order: 2,
    category: 'Best Picks',
    type: 'movie',
    url: best_picks
  },
  fetchComedyMovies: {
    order: 3,
    category: 'You May Like',
    type: 'movie',
    url: you_may_like
  },
  fetchHorroMovies: {
    order: 4,
    category: 'All Time Hits',
    type: 'movie',
    url: all_time_hits
  }
};

export default movieRoutes;