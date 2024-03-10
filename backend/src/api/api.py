from flask import Flask
from src.database.setup import setup_database
from src.usecase.getMovies import getMovies
from src.usecase.getProducersForAwards import getProducersForAwards

app = Flask(__name__)

@app.route('/')
def hello():
    session = setup_database()
    return getProducersForAwards(session)

@app.route('/list', methods=['GET'])
def get_movies():
    session = setup_database()
    return getMovies(session)

def run_api():
    print('API iniciando')
    app.run(host="0.0.0.0", debug=True)

if __name__ == '__main__':
    run_api()