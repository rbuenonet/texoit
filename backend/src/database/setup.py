from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.models.movie import Base

def setup_database():
    engine = create_engine('sqlite:///_db/movies.db', echo=True)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    return Session()
