import pickle,os
import zipfile
with zipfile.ZipFile('similarity.zip', 'r') as zip_ref:
    zip_ref.extractall('')

movie  = pickle.load(open('movie_origin.pkl', mode = 'rb'))
similar = pickle.load(open('similarity.pkl', mode = 'rb'))

def recommend_same_genre_movie(tmdb_id):
    recommended_tmdbid = []
    index = movie[movie['tmdbid'] == tmdb_id].index[0]
    distances = sorted(list(enumerate(similar[index])),reverse=True,key = lambda x: x[1])
    for i in distances[1:13]:
        recommended_tmdbid.append(int(movie.iloc[i[0]].tmdbid))
    return recommended_tmdbid
