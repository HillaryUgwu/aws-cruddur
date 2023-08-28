FROM 897590156694.dkr.ecr.us-east-1.amazonaws.com/cruddur-python:3.10-slim-buster

# Inside Container
# Make a new folder inside the container
WORKDIR /backend-flask

# Outside Container -> # Inside Container
COPY requirements.txt requirements.txt

# Inside Container
# Install the python libraries used for the app
RUN pip3 install -r requirements.txt

# 
COPY . .

EXPOSE ${PORT}

ENV PYTHONUNBUFFERED=1

# CMD (command)
CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=4567", "--debug" ]