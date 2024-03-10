FROM python:3

WORKDIR /backend

COPY ./backend .

RUN pip install -r requirements.txt

CMD python index.py