from flask import jsonify
from src.controllers.data_controller import get_winner_movies

def getProducersForAwards(session):
    movies = get_winner_movies(session)
    all_movies = [movie.to_dict() for movie in movies]

    grouped_by_producer = {}
    max_interval_producer = []
    min_interval_producer = []
    max_interval = 0
    min_interval = None

    # separa os anos por producer
    for movie in all_movies:
        producers = [producer.strip() for producer in movie["producers"].split(",") + movie["producers"].split("and")]
        year = movie["year"]

        for producer in producers:
            if producer:
                if producer not in grouped_by_producer:
                    grouped_by_producer[producer] = set()

                grouped_by_producer[producer].add(year)
    
    # calcula intervalo de anos por producer
    grouped_by_producer_intervals = []
    for producer, years_set in grouped_by_producer.items():
        years_list = list(years_set)
        
        if len(years_list) > 1:
            for i in range(len(years_list) - 1):
                interval = {
                    "producer": producer,
                    "interval": years_list[i + 1] - years_list[i],
                    "previousWin": years_list[i],
                    "followingWin": years_list[i + 1]
                }
                grouped_by_producer_intervals.append(interval)

    # cria resposta com maximo e minimo
    for producer_intervals in grouped_by_producer_intervals:
        interval = producer_intervals['interval']

        # maximo
        if interval == max_interval:
            max_interval_producer.append(producer_intervals)
        if interval > max_interval:
            max_interval = interval
            max_interval_producer = [producer_intervals]
        # minimo
        if interval == min_interval:
            min_interval_producer.append(producer_intervals)
        if min_interval is None or interval < min_interval:
            min_interval = interval
            min_interval_producer = [producer_intervals]

    result = {"max": max_interval_producer, "min": min_interval_producer}

    return jsonify(result)