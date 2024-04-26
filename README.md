## Get-YouTube-Subscribers

Want to analyze YouTube subscriber data? This Almabetter capstone project builds a powerful backend system using Node.js, Express.js, and MongoDB. It provides APIs to retrieve, manage, and explore subscriber information, all delivered in a clear JSON format.

## Table of Contents

- [Introduction ](#introduction)
- [API Reference ](#api-reference)
- [Features ](#features)
- [Tech Stack ](#tech-stack)
- [Prerequisites ](#prerequisites)
- [Installation & Run](#installation-and-run)
  


## Introduction
Ever wondered who subscribes to your favorite YouTube channels? This project empowers to unlock those subscriber secrets!  Built with cutting-edge technologies (Node.js and Express.js), it provides a user-friendly RESTful API.  This API acts as a bridge, allowing us to retrieve valuable subscriber information for in-depth analysis.

Behind the Scenes:

Powerful Backend: Node.js forms the backbone, ensuring smooth operation and efficient data processing.

Seamless Communication: Express.js crafts the API, enabling clear and structured communication for our requests.

Data Hub: MongoDB acts as the data powerhouse, securely storing and managing all subscriber information.

## API Reference
The following API endpoints are for retrieving subscribers information using the GET method. 

- `/subscribers`: Want to see a list of all the subscribers for a channel? This endpoint delivers - you'll get a complete breakdown including subscriber ID, name, the channel they follow, and even the date they subscribed!

- `/subscribers/names`: Curious about subscriber names and which channels they're subscribed to? This endpoint gives you just that information - a quick and easy way to identify subscribers and their viewing interests.

- `/subscribers/id`: Have a specific subscriber ID in mind? This endpoint lets you dive deep and access all the information we have on that particular subscriber.


## Features
Some features of this application :
- **Seamless Data Retrieval:** Effortlessly fetch subscribers data from YouTube channels using API endpoints.
- **Structured JSON Output:** Present retrieved data in well-organized JSON format for easy interpretation.
- **Versatile API Endpoints:** Provide users with multiple API endpoints catering to various data retrieval needs.
- **Effective YouTube Data API Integration:** Interact seamlessly with the YouTube Data API for accurate data retrieval.
- **User-Friendly Setup:** Follow a straightforward setup process, enabling swift tool utilization.

## Tech Stack
GET-Youtube-Subscriber is built using the following technologies:

- **Node.js:** A runtime environment that executes JavaScript code on the server-side.
- **Express.js:** A node.js framework for building web applications and RESTful API.
- **MongoDB:** Is a NoSQL Database system that stores and manages data in JSON-like format.

## Prerequisites

To run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation and Run
1. Clone the repository from GitHub:
    ```
https://github.com/Shekharsuman689/Get-Youtube-Subscribers.git     
    ```
2. Redirect to the project folder:
    ```
     cd Get-YouTube-Subscribers
    ```
3. Install the required dependencies:
    ```
     npm install
    ```
4. Configure the application:
   - Create a `.env` file in the project's root directory.
   - Add the following environment variables to the `.env` file:
      ```
       PORT=3000                             # The port on which the application will run
       DATABASE_URI= <your_uri_here>         # The MongoDB connection string
      ```
5. Create Database:
    - Inserting subscribers data into MongoDB.
        ```
         npm run createDB
        ```
6. Start server:
    ```
     npm start
    ```
    > [!NOTE]
    > Access the  application in your web browser at `http://localhost:3000` (base URL)

## Deployed Project
https://get-youtube-subscribers-x7ks.onrender.com








