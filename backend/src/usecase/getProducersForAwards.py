from flask import jsonify
from src.controllers.data_controller import get_winner_movies

def getProducersForAwards(session):
    movies = get_winner_movies(session)
    all_movies = [movie.to_dict() for movie in movies]

    grouped_by_producer = {}
    max_interval_producer = None
    min_interval_producer = None
    max_interval = 0
    min_interval = None

    for movie in all_movies:
        producers = [producer.strip() for producer in movie["producers"].split(",") + movie["producers"].split("and")]
        year = movie["year"]

        for producer in producers:
            if producer:
                if producer not in grouped_by_producer:
                    grouped_by_producer[producer] = set()

                grouped_by_producer[producer].add(year)
    
    for producer, years_set in grouped_by_producer.items():
        years_list = list(years_set)
        
        if len(years_list) > 1:
            interval = max(years_list) - min(years_list)

            if interval > max_interval:
                max_interval = interval
                max_interval_producer = {
                    "producer": producer,
                    "interval": interval,
                    "previousWin": min(years_list),
                    "followingWin": max(years_list)
                }

            if min_interval is None or interval < min_interval:
                min_interval = interval
                min_interval_producer = {
                    "producer": producer,
                    "interval": interval,
                    "previousWin": min(years_list),
                    "followingWin": max(years_list)
                }

    result = {"max": [max_interval_producer], "min": [min_interval_producer]}

    return jsonify(result)