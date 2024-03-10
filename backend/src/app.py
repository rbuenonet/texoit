from src.database.setup import setup_database
from src.controllers.data_controller import populate_database_from_csv

def initialize_app():
    session = setup_database()
    csv_file_path = './_db/movielist.csv'
    populate_database_from_csv(csv_file_path, session)


if __name__ == '__main__':
    initialize_app()
