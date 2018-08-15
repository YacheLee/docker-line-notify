#Docker-line-notify

#### A quick way to trigger your Line Notification by RESTFul API.

##### Usage
`docker run -d -p 8000:3000 --env default_access_token=YOUR_TOKEN --env default_message=HelloWorld mymislife/docker-line-notify`

##### Test for RESTFul
`curl http://localhost:8000 -X POST -H "Content-Type: application/json" -d '{"message":"I am robot!"}'`