from src.utils.csv_reader import read_csv
from src.models.movie import Movie

def get_all_movies(session):
    return session.query(Movie).all()

def get_winner_movies(session):
    return session.query(Movie).filter(Movie.winner == True).order_by(Movie.year).all()

def populate_database_from_csv(csv_file_path, session):
    try:
        df = read_csv(csv_file_path)
        for index, row in df.iterrows():
            movie = Movie(
                year=row['year'],
                title=row['title'],
                studios=row['studios'],
                producers=row['producers'],
                winner=True if row['winner'] == 'yes' else False
            )
            session.add(movie)

        session.commit()
    except Exception as e:
        print(f"Erro ao popular o banco de dados: {e}")
        session.rollback()
