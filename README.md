# Dogear
Track your reading habits. Read good stuff.

## Summary
An app built with Express, MongoDB, and React to manage reading habits over time. DogEar supports individual user authentication with secure encryption, sessions, and cookies. 

A user can add books to her reading list and mark individual books as complete. A user's current reading list and a list of all completed books is stored in the database for future retrieval. The app provides some basic data analysis by calculating the days it takes a user to complete each book (the current date minus the book was entered into the system) and the average pages read per day over time. 

This app is a current work in progress. 

## Getting Started

Run `npm install` to install package dependencies. DogEar runs on MongoDB and requires an active instance. Change the database information within server.js. 

Once your database has been configured, run `npm start` to run the application. 

## Running Tests

Run `npm test` to run all tests. 


