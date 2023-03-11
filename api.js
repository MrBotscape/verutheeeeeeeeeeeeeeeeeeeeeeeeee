const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
      const response = `
      <html>
        <head>
          <title>Welcome to Restinspace API</title>
          <style>
          body {
              font-family: 'Source Code Pro', monospace;
              font-size: 16px;
              line-height: 1.5;
              background-image: url('https://i.ibb.co/55SW6m2/background-jpg0ggjggjg.jpg');
              background-repeat: no-repeat;
              background-size: cover;
              padding: 1px; /* add a small padding to fix any issues with the background image not being fully blurred at the edges of the screen */
            }
            
            .container {
              max-width: 800px;
              margin: 0 auto;
              margin-bottom: 50px;
              padding: 30px;
              background-color: white;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
              text-align: center;
            }
            
            .logo {
              position: absolute;
              top: 20%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 150px;
              height: 150px;
              background-image: url('https://i.ibb.co/y4CP9xK/logo.jpg');
              background-size: contain;
              background-repeat: no-repeat;
              border-radius: 50%;
              overflow: hidden;
              border: 8px solid white;
              position: relative;
              z-index: 1; 
            }
            
            .logo::before {
              content: "";
              position: center;
              top: -75px;
              left: 0;
              width: 100%;
              height: 30px;
              background-color: rgba(255, 255, 255, 0.9); /* add a white background to the top part of the logo */
              z-index: -1; /* send the background to the back */
            }
            .social-container {
              max-width: 500px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 50px;
            }            
            h1 {
              font-size: 50px;
              font-weight: bold;
              margin: 30px 0;
              font-family: 'Courier New', monospace;
              text-transform: capitalize;
              color: black; /* change the text color to black */
            }
            p {
              font-size: 24px;
              margin-bottom: 30px;
              font-family: 'Courier New', monospace;
              text-transform: capitalize;
            }
            button {
              background-color: black;
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              font-size: 20px;
              font-family: 'Courier New', monospace;
              text-transform: capitalize;
            }
            .social-icons {
              margin-top: 50px;
              text-align: center;
            }
            
            .social-icons a {
              display: inline-block;
              width: 50px;
              height: 50px;
              margin: 10px 50px;
              border-radius: 50%;
              overflow: hidden;
            }
            
            .social-icons img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            
          </style>
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Courier+New&display=swap" rel="stylesheet">
        </head>
        <body>
          <div class="logo"></div>
          <div class="container">
            <h1>Welcome to Restinspace API</h1>
            <p>This is the Restinspace API, which allows you to access and manipulate data related to space exploration and astronomy.</p>
            <a href="https://example.com"><button>API Documentation »</button></a>
            <div class="social-icons">
            <a href="http://t.me/restinspaceofficial"><img src="https://assets.stickpng.com/images/5842a8fba6515b1e0ad75b03.png" alt="Telegram"></a>
            <a href="https://www.instagram.com/restinaleo"><img src="https://simg.nicepng.com/png/small/356-3563301_instagram-instagram-circle-icon.png" alt="Instagram"></a>
            <a href="https://www.youtube.com/@restinspace"><img src="https://www.seekpng.com/png/detail/145-1450088_youtube-logo-png-circle.png" alt="Youtube"></a>
          </div>
          
        </body>
      </html>
    `;
      res.status(200).send(response);
  } catch (e) {
      res.status(400).json({ error: e });
      console.log(e);
  }
});

  





















app.listen(process.env.PORT || 3000)
