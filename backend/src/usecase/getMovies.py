# getMovies.py
from flask import jsonify
from src.controllers.data_controller import get_all_movies

def getMovies(session):
    movies = get_all_movies(session)
    return jsonify([movie.to_dict() for movie in movies])
