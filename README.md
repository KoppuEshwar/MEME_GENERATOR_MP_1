DEMO LINK : [Click Here](https://drive.google.com/file/d/1rYGvOLO2VkuimWnFellfwXoyQmmYPBT6/view?usp=sharing) 
# Meme Generator

A perfect platform for spreading humour and earning money.
## Description

- Developed a Web application using HTML, CSS, JavaScript, ReactJS, Bootstrap, for front‑end and back‑end on MySQL database and php.
- Used ImgFlip API for fetching the meme templates in order to render them as template gallery in our website.
- The user can either choose templates from the template gallery or can even make their own memes by uploading their templates from the system.

## Journey through Website
- The very first page displayed to the user is the welcome page which consists of login page for the existing user and register page for the new users. 
- The new user can register by giving his credentials like Email address and Instagram user name, whereas the existing user can get signed into it by giving his username. 
- Once the details get verified the user will be taken to the landing page it again consists of two sections.
- First section consists of choosing meme templates which are displayed like a photo gallery, and are fetched in the form of a "Response Array" of random images from the GET request of ImgFlip API.
- The latter section comprises of features where a user can upload his own meme templates from local storage and after writing the suitable captions he can save the image into his device by clicking on the download button.

## Technologies

**Front-End:** HTML, CSS, Bootstrap, JavaScript, ReactJS

**Back-End:** PHP(Hypertext Preprocessor)

**Database:** MySQL

**API used:** ImgFlip API (Application Program Interface)


## Challenges Faced

- One of the major challenges that we faced were to improve on the front‑end part and make the website look more visually appealing.
- As we are using xampp server, which in fact is not quite scalable and compatible sometimes, it was giving certain issues during the login part where the registered username is to be stored in the MySQL database.
- There were some issues while hitting correct API request for fetching the meme templates.
## Installation

You can follow the below steps for running the project in your local computer.

- Open XAMPP control panel and start the Apache server and MySQL.
-  Type “npm run” in cmd or VScode terminal pointing the directory where our react app is located.

```bash
  npm run <-app name->
```
- The program started successfully 
    
