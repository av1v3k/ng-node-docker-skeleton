Creating Angular App in current directory without installing node in host machine(locally).

Resources:
 - https://www.youtube.com/watch?v=e4n8Dja5PKo
- Docker Compose in 12 mins - https://www.youtube.com/watch?v=Qw9zlE3t8Ko
- 
https://www.youtube.com/watch?v=0B2raYYH2fE

2 images running with docker-compose,

https://www.youtube.com/watch?v=UB3-qj2QA50



General commands overview,

docker ps => for listing running containers.
docker images => for listing images.

For running new angular app,

docker-compose run frontend_app ng new angular-docker --directory .

For re-building images:

docker-compose up —build
docker-compose up




For Back-end NodeJS-Express:
=======================

Tutorials referred:
https://www.youtube.com/watch?v=CsWoMpK3EtE


- Building the image
	docker build -t backendcodebuild . 
- Running the particular image as container,
	docker run -it -p <port>:<port> <imagename>
	docker run -it -p 4300:4300 backendcodebuild
- Running the particular image as container in detach mode,
	docker run -d 4300:4300 backendcodebuild 