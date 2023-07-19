#### Echo is a two-person team project developed during the [Lighthouse Labs Web Development Bootcamp](https://www.lighthouselabs.ca/en/web-development-bootcamp). It is a ReactJS web app designed to allow its users to search for and save Youtube videos to their profile and save specific time snippets to that, which they can later play in a loop.

#### Tech stack

Our app is powered by the Youtube search API​. We built our client side using the Create React App toolchain and used React Router for the front-end routes. Once the functional part of the website was built, we applied a touch of React Bootstrap components and a spoonful of SASS.</br>
Our server runs on Node.js' Express framework​ and we used PostgreSQL to create and interface with our database​.

#### To run in development setting
The app has a [React front-end](https://github.com/nataliaCodes/echo-front-end) that supplies the static files in the build folder. (`npm run build` will supply new static files if any modifications are made on the front-end).</br>
Before running the app populate database with `npm run db:reset`.</br>
For this to work you need to have postgresql set up on your machine and have a database and user ready. In the root folder set up your .env file containing the following variables: DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT. These variables will be required when connecting to the database.</br>
To start the local app run `npm run dev`. It will run on port 3001.

#### Access user restricted functionality
The app is live at https://echo-replay.onrender.com/ </br>
User `testuser@test.com` with pass `password` will work on production (and dev once the database is populated) environments, or use the register functionality to create your own user.

#### Home page (can be accessed by logged in users and visitors)
![home-page](https://github.com/nataliaCodes/echo-front-end/blob/main/public/screenshots/Echo-home.png)

#### Moments page (can be accessed by logged in users and visitors - vistors can use the slider but will need to log in or register to save video and moments)
![moments-page](https://github.com/nataliaCodes/echo-front-end/blob/main/public/screenshots/Echo-moments.png)

#### Videos page (available to users only)
![videos-page](https://github.com/nataliaCodes/echo-front-end/blob/main/public/screenshots/Echo-videos.png)

#### Categories page (available to users only)
![categories-page](https://github.com/nataliaCodes/echo-front-end/blob/main/public/screenshots/Echo-categories.png)

#### Log in page (register page has similar design)
![login-page](https://github.com/nataliaCodes/echo-front-end/blob/main/public/screenshots/Echo-login.png)
