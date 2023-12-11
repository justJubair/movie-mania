# Movie Mania

[Live site link](https://movie-mania-peach.vercel.app) 

### Features
Down below I briefly discussed about the top features of this website.

- The data has been fetched from movieDB api to create this landing page.
- Users can login with email or social logins are also implemented.
- Users can like any specific movies they want and those movies or series will show up on their watch list. But for this functionality users must be logged in

### Run this project locally
First clone this project on your local machine
```
git clone https://github.com/justJubair/movie-mania.git
```
Install all the dependencies
```
npm install
```
Create a project on firebase and change .env.local file with your own credentials.
```
VITE_APIKEY=Your_Credentials
VITE_AUTHDOMAIN=Your_Credentials
VITE_PROJECTID=Your_Credentials
VITE_STORAGEBUCKET=Your_Credentials
VITE_MESSAGINGSENDERID=Your_Credentials
VITE_APPID=Your_Credentials
```
Finaly, run the project on development server.
```
npm run dev
```






