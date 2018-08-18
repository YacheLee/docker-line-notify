##Docker-line-notify

#### A quick way to trigger your Line Notification by RESTFul API.

###Get the access_token from Line
1. Go to [https://notify-bot.line.me](https://notify-bot.line.me)
2. Login
3. Go to [https://notify-bot.line.me/my/](https://notify-bot.line.me/my/) 
4. Click Generate Token ![image](step3.png)
5. Copy the generated token

##### Usage
`docker run -d -p 8000:3000 --env default_access_token=YOUR_DEFAULT_TOKEN --env default_message=HelloWorld mymislife/docker-line-notify`

##### RESTFul without YOUR_DEFAULT_TOKEN
`curl http://localhost:8000 -X POST -H "Content-Type: application/json" -d '{"message":"I am robot!"}'`

##### RESTFul with YOUR_NEW_TOKEN
`curl http://localhost:3000 -X POST -H "Content-Type: application/json" -d '{"message":"I am robot!", "access_token": "YOUR_NEW_TOKEN"}'`