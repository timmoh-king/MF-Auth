# MF-Auth

*Enjoy secure, fast, encrypted authentication services free from cyber attacks.*

![MF-Auth logo](https://drive.google.com/file/d/1B2AfOx0bSymFrr1wNkaP08aC2PLmN2ur/view?usp=drive_link)

## Table of Contents

- [Introduction](#introduction)
- [The Team](#the-team)
- [Technologies And Architecture](#technologies-and-architecture)
- [Third Party Services Used](#third-party-services-used)
- [API Endpoints](#api-endpoints)
- [Mockups](#mockups)
- [Work Schedule](#work-schedule)
- [Presentation Slides](#presentation-slides)
- [GitHub Repository](#github-repository)

## Introduction

A multi factor authentication system allows authentication of users using two or more verification factors to gain access to an application, which decreases the chances of a successful cyber attack. Our MFA system allows the user to authenticate via the username and password or sign in with google then enter the received OTP on their phone numbers to successfully login into the system.

## The Team

- Timothy Munene Kariuki: ALX Software engineering student
**GitHub**: [view profile](https://github.com/timmoh-king)
**LinkedIn**: [view profile](https://www.linkedin.com/in/timothy-kariuki-3t6s/)

## Learning Objectives

- How to declare API routes in a flask app
- How to set up and authenticate via google
- How to get and set JW-Tokens
- How to retrieve request form data
- How to return various HTTP status codes

## API Endpoints

The MF-Auth API provides the following endpoints:

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST  | /api/signin | Validate the user's email and password, create a session for the authenticated user, and set a cookie with the session ID. Return a JSON representation of the user object or an error message. |
| POST | api/signup | Create a new user account with some data and return a JSON representation of the user object or an error message. |
| GET | api/user/:id | Get a user account with some data and return a JSON representation of the user object or an error message. |
| PUT | api/user/reset/:id | Change a user pasword and return a JSON representation of the user object or an error message. |
| DELETE | api/user/delete/:id | Delete user account and return a JSON representation of the user object or an error message. |


## Technologies And Architecture

- **React Js**: JavaScript library for building  user interfaces
- **Flask**: Worked as a python backend framework
- **Python**: High level programming language, object oriented, with dynamic semantics
- **SQLite**: C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

## Third Party Services Used

- **Firebase Authentication**: Services provided by cloud providers that offer authentication features, including MFA, and integrate well with other cloud services.
- **SendGrid**: A cloud-based email service that you can use to send verification emails or password reset links.
- **Google Authenticator**: A widely used authenticator app that generates time-based one-time codes (TOTP)

## Mockups

The mockups for the MF-Auth project is available [here](https://www.figma.com/file/TVGWk1c9AoxREKzI4qCU0k/MFA-System?type=design&node-id=7%3A5661&mode=design&t=du1GTBUawnhEUT1I-1)

## Work Schedule

The work schedule for the MF-Auth project is available [here](https://trello.com/invite/b/AKRjoOAE/ATTI54332a470401e486f0c350b65df3967584A1E08B/mfa-system)

## Presentation Slides

The presentation slides for the MF-Auth project is available [here](https://docs.google.com/presentation/d/104XVfkRPSAnoIl-r3IKOWhxmqAHUu7m30oES42RcZL0/edit?usp=sharing)

## GitHub repository

The GitHub repository link for the MF-Auth project is available [here](https://github.com/timmoh-king/MF-Auth)

## MF-Auth Environment Variables

Environment variables are used to store sensitive or configurable information that should not be exposed in the code. They are usually set in a separate file or in the terminal before running the application. For MF-Auth, the following environment variables are required:
- PORT: port number of the MF-Auth Flask API server

To run the MF-Auth API server, you need to use this command:

`python app.py`

To ensure that python version 3.10.1 installs in Ubuntu 22.04, you need to run this command:

`sudo apt-upgrade sudo apt-install`
`sudo apt-get install python`

To ensure that Flask version 3.0.0 installs in Ubuntu 22.04, you need to run this command:

`sudo apt-upgrade sudo apt-install`
`sudo apt-get install flask`
