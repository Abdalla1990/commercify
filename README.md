### How To Use It :

In package.json : 

| script | Job |
| -------------------- | ------ |
| start | start the node server 'no hot reload'
| dev-server | loads the front-end ONLY , no interaction withthe api|
| build:dev | prepares a build bundle.js file
| build:dev | prepares a bundle.js.map file for deployment
| heroku-postbuild | used by Heroku to build the app upon deployment

1- `git clone` the repo https://github.com/Abdalla1990/twitter-api.git

2- `cd` to the folder of the app 

3- run `npm install` to install the `node_modules`


###### if you want to load only the front-end 'no data will be fetched' : 

5- run `npm run dev-server` 

###### if you want to make a development build , run it on "express"(the backend) : 

6- run `npm run build:dev` and then `npm run hotload-api` if you have nodemo installed on your machien or `npm run start`

###### if you want to make a deployment build : 

7- run `npm run build:prod` 
