# Week 1 — App Containerization

## Dockerfile Best Practices
1. Avoid installing unnecessary packages
Use a requirements file to install all the required packages:
```RUN pip3 install -r requirements.txt```
2. Chain all RUN commands
Don't do this:
```
RUN apt-get -y install firefox
RUN apt-get -y install vim
RUN apt-get -y update
```
Do this instead:
```
RUN apt-get -y install firefox \
   && apt-get -y install vim \
   && apt-get -y update
```
3. Use a .dockerignore file
4. Avoid installing unnecessary package dependencies 
5. Using a minimal base image:
