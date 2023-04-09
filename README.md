# ClickerGame_Group8_COP4331
Clicker game made with MERN.

1) Clone github repo by going to repo page. Under the button [<> CODE] copy the HTTPS link and in visual studo type:
    "git clone (LINK HERE)"
in the directory you would like the repo copy to be on your machine.

2) Download Node. I went to the website https://nodejs.org/en/download where the "Latest LTS Version: 18.15.0 (includes npm 9.5.0)" was the one I downloaded. (This should also install npm)

3) Next is Mongo. I am installing the GUI support. Go to https://www.mongodb.com/products/compass. Downoad compass (I got v1.36.2).

4) Docker. This is to host Mongo in a container so that you can do local testing. The link to install docker desktop https://www.docker.com/. Once you have Docker installed, there is a docker compose file (.yml) that can be used to start up a container for a Mongo Database.

5) To start up Mongo, in terminal, run "docker compose up".

6) In Mongo Compass (the desktop GUI), set up a new connection mapping it to the same one in the .yml file:
    "mongodb://localhost:27017"
From here, you will go to authenticaiton, and using username/password include the username and password from the .yml. Then press connect. This will let you view the database running in the container.

^This sets up a local installation of Mongo, allowing us to develop against local copies without overwritting eachothers data/changes. This will require us to create backups of the main cloud database we need to set up from class. This will help us test changes without messing with the cloud database.


7) Next is setting up express. 

(I don't have the instructions from the TA rn but I am following this post https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/ on how to set up express. Most of the steps for this should not be relevant for anyone else durring the environment set up process.)
