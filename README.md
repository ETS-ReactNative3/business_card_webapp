<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
The contributors link does work!
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="empty stacc.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Empty Stacks Business Cards</h3>

  <p align="center">
    Business Card Generator for ITC 2022 Web Development Competition
    <br />
    <br />
    <br />
    ·
    <a href="https://github.com/Empty-Stacks/business_card_webapp/issues">Report Bug</a>
    ·
    <a href="https://github.com/Empty-Stacks/business_card_webapp/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was developed for Cal Poly MISSA's 26th annual Information Technology Competition for the Web Application category. Teams were prompted to create a web application based on a given case study which in this case details the development of a web application to generate business cards based on a user's contact information and uploaded images. 


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm in both frontend and root folders
  ```sh
  npm install 
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Empty-Stacks/business_card_webapp
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .ENV file to store ports, MongoDB connection, JWT_Secret Key, and NodeMailer Host Password
   ```js
    NODE_ENV = development;
    PORT = 5000;
    MONGO_URI =;
    JWT_SECRET = ;
    ADMIN_PASSWORD = ;
   ```
   
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Users are first routed to the home page, introducing the company and the application
![image](https://user-images.githubusercontent.com/71349943/161404522-36959363-f5c4-4a23-b3cd-5117d6c347cf.png)

Users must login and create an account to utilize the services.
![image](https://user-images.githubusercontent.com/71349943/161404532-6750f67f-3752-4c9b-9cf2-19d294886d6d.png)

Creating a Business card is as simple as entering in one's information and uploading an image.
![image](https://user-images.githubusercontent.com/71349943/161404539-e5501ed9-225f-4cd9-be79-7836e5819aab.png)

Previewing one's business cards only requires choosing a template layout within the PreviewCard interface. Users can view all of their cards in each layout through these pages
![image](https://user-images.githubusercontent.com/71349943/161404676-66468d48-3a69-4c46-8eb6-9dcfbfae6be4.png)

![image](https://user-images.githubusercontent.com/71349943/161404639-8f3e9047-399a-428d-ba51-109e0d40ffa7.png)

More information and requests can be made through the About Us Page and the Contact Us Page.

<p align="right">(<a href="#top">back to top</a>)</p>


## ARCHITECTURE/DESIGN

The MERN stack was utilized as the major frameworks for this application. The MERN stack consists of MongoDB, Express.js, React.js, and Node.js.

**MONGODB** <br/>
    - Used as database to store User Login information and each of the user's business card information and uploaded files <br/>
    - Allows for easy access to store and retrieve user information through HTTP requests <br/>

**EXPRESS.JS** <br/>
        - Used to create REST API's & endpoints to handle multiple HTTP requests to store and retrieve data to and from the database in MongoDB <br/>
    - Users call these API requests through the front end application in account creation, card creation, and card previews <br/>
    - Also used to send messages through NodeMailer to send messages to the team's contact email <br/>

**REACT.JS** <br/>
        - Used to create front end userinterface, navigation bars, submission fields, and submission buttons <br/>
     - Used to display business card information and uploaded images with the assistance from react-bootstrap <br/>
     - Also used to display static information such as the home page, and about us page <br/>

**NODE.JS** <br/>
     - Used to create the front end HTTP server that allows users to interact with the application <br/>
    - Created web server interacts with Express.JS and listens for HTTP requests for Express to handle with the assistance of axios.js <br/>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Ryan Peji - [LinkedIn](https://www.linkedin.com/in/ryan-peji/)
    <br />
Eldrin Pile - [LinkedIn](https://www.linkedin.com/in/eldrin-pile-70b623217/)
    <br />
Jonathan Galon - [LinkedIn](https://www.linkedin.com/mwlite/in/jonathan-galon-516b59224)
    <br />
Matt Alcasabas - [LinkedIn](https://www.linkedin.com/in/matthew-alcasabas-455522162/)
    <br />

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

All the extraneous/non-native node modules we used! Also, shout-out to Stack Overflow, 80/20 Coding, and Traversy Media for all the guidance and help with MERN!

* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [colors](https://www.npmjs.com/package/colors)
* [concurrency](http://www.npmjs.com/package/concurrently)  
* [cookie-parser](http://www.npmjs.com/package/cookie-parser)
* [cors](http://www.npmjs.com/package/cords)
* [dotenv](http://www.npmjs.com/package/dontenv)
* [express-async-handler](http://www.npmjs.com/package/express-async-handler)
* [jsonwebtoken](http://www.npmjs.com/package/jsonwebtoken)
* [mongoose](http://www.npmjs.com/package/mongoose)
* [multer](http://www.npmjs.com/package/multer)
* [@material-ui](https://www.npmjs.com/package/@material-ui/core)
* [@mui](https://www.npmjs.com/package/@mui/material)
* [axios](http://www.npmjs.com/package/axios)
* [boostrap](http://www.npmjs.com/package/bootstrap)
* [react-bootstrap](https://react-bootstrap.github.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]:https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/Empty-Stacks/business_card_webapp/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Empty-Stacks/business_card_webapp/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
