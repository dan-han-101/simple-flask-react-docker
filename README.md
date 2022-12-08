# Simple Flask React Docker

This is a simple application that uses a Flask backend with a React front end. It then uses Docker to run the app.

This project can be used as a starting point for real applications, but I recommend you go through the tutorial I mention below and build it from "scratch" on your own.
## How to run this code

```
docker-compose up -d
```

You should then be able to view the site at http://localhost:3000/ .

## How this was created

This project was created by following the [how to create react and flask project tutorials from Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project).

For the most part, I followed the tutorial as it was written, but I did make some digressions. The ones that I remember:

- The directory structure is a little different than the tutorial. I moved all of the react/ui stuff into a separate directory called `ui/`.  This feels a little cleaner to me.
- React has changed over the years, so the react app needed some minor adjustments in the "Route" code to work for me.