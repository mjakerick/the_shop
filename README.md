# the shop.

## Overview
'the shop' is a social website designed for people who like to get tattoos. Users can create accounts and share their experiences that they've had at different tattoo shops around the world. As someone who likes to travel and get tattoos, a lot of times it can be hard to tell if it will be a pleasant experience based off of an artist's portfolio or Instagram account. The goal of 'the shop' is to be a place for users to get the info they really want about a shop or tattooer.

## Technologies Used
'the shop' follows the MVC file structure, employs the 7 RESTful routes, and full CRUD. It uses multiple models, controllers, and EJS partials. It is hosted on Heroku.

'the shop' was built with the following:
- Node.js
- Express
- EJS
- Mongoose
- Mongo
- Method Override
- Express Session
- Morgan
- BCrypt
- Bootstrap

## Approach
First, I spent a lot of time trying to come up with ideas for an app that could really put our class material to work, but also be something that wasn't a carbon copy of something already out there for the world to use. I built basic MVC structure, and started building the CRUD app for making pages for tattoo shops. From there, it went further, adding CRUD for users to tell their 'story', and rate the shop. Finally, adding users, customizing the experience, and adding styling using Bootstrap and my own CSS.

# User Story
Getting tattooed sucks, and anyone who tells you otherwise is a liar. Not only does it hurt, but it is hard to find someone to tattoo you who is talented, personable, and willing to work with you on your ideas. I find myself constantly asking people questions after they get tattooed by someone I want to get work from; "were they cool?", "how heavy was their hand?", "how long did they take to do it?". In modern tattooing, most tattooers use Instagram as their main portfolio format, but 'the shop' is designed for the information the tattooer cannot convey via that platform.

# Unsolved Problems
I spent a lot of time working with different image upload APIs. I really wanted to add the option for users to add photos to their stories.

## Notes
In the future, I would like to add the following:

- A splash or index page, that encourages users to sign up and introduces 'the shop as a community'.
- Image Upload API.
- Information about each artist at each shop. Carousels of their artwork.
- A averaged out rating of each shop and artist based on user provided ratings in their stories.
- Google Maps interface to show where shops are located around the world.
- More heavily encryted user info, and a email component to registration.
