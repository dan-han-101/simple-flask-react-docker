FROM python:3.10-slim-buster
WORKDIR /app

COPY requirements.txt api.py .flaskenv ./
RUN pip install -r ./requirements.txt
ENV FLASK_ENV production

EXPOSE 5000
CMD ["gunicorn", "-b", ":5000", "api:app"]