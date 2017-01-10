# Dogear
Track your reading habits. Read good stuff.

## Summary
An app built with Express, MongoDB, and React to manage reading habits over time. DogEar supports individual user authentication with secure encryption, sessions, and cookies. 

![screen shot 2017-01-10 at 12 37 52 pm](https://cloud.githubusercontent.com/assets/14319917/21826084/11e4b608-d73b-11e6-82fd-7228fe01dd41.png)

A user can add books to her reading list and mark individual books as complete. A user's current reading list and a list of all completed books is stored in the database for future retrieval. The app provides some basic data analysis by calculating the days it takes a user to complete each book (the current date minus the book was entered into the system) and the average pages read per day over time. 

![screen shot 2017-01-10 at 1 23 49 pm](https://cloud.githubusercontent.com/assets/14319917/21826091/14e1001e-d73b-11e6-9e3e-6d5af713a6a7.png)

![screen shot 2017-01-10 at 1 23 20 pm](https://cloud.githubusercontent.com/assets/14319917/21826087/13590200-d73b-11e6-9b83-72dc2fc7f118.png)

**Note: This app is still under active development**

## Getting Started

Run `npm install` to install package dependencies. DogEar runs on MongoDB and requires an active instance. Change the database information within server.js. 

Once your database has been configured, run `npm start` to run the application. 

## Running Tests

Run `npm test` to run all tests. 


