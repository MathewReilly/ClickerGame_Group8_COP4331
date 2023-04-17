# ClickerGame_Group8_COP4331

## Setting Up Local Repo
Clone github repo by going to repo page. Under the button [<> CODE] copy the HTTPS link and in visual studo type:

> git clone (LINK HERE)

in the directory you would like the repo copy to be on your machine.

* * *
## Installing Node
Download Node. I went to the website https://nodejs.org/en/download where the "Latest LTS Version: 18.15.0 (includes npm 9.5.0)" was the one I downloaded. (This should also install npm)

* * *
## Viewing Database Changes (Mongo Compass)
Next is Mongo. I am installing the GUI support. Go to https://www.mongodb.com/products/compass. Downoad compass (I got v1.36.2).

* * *
## Setting up a local mongo container
Docker. This is to host Mongo in a container so that you can do local testing. The link to install docker desktop is https://www.docker.com/. Once you have Docker installed, there is a docker compose file (.yml) that can be used to start up a container for a Mongo Database.

To start up Mongo, in terminal, run:
> docker compose up

In Mongo Compass (the desktop GUI), set up a new connection mapping it to the same one in the .yml file:
> mongodb://localhost:27017

From here, you will go to authenticaiton, and using username/password include the username and password from the .yml. Then press connect. This will let you view the database running in the container.

NOTE:
> This sets up a local installation of Mongo, allowing us to develop against local copies without overwritting eachothers data/changes. This will require us to create backups of the main cloud database we need to set up from class. This will help us test changes without messing with the cloud database.

* * *
## Next is running the application:
NOTE:
> Next I set up express/react by following this post https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/ on how to set up express and the react application. 

The application has two main components, the server and client. The server is responsible for maintaining the database, providing access using a REST webservice over HTTP (Express). The client is responsible for making calls to the server to display information to the user in an interactive manner (React).

### To start the server:
Navigate to the "server" directory in terminal, if it is your first time running it first run:
> npm install

then run:
> node server.js

NOTE:
> The server code does not hot reload, if you change a file while the server is running those changes will not reflect until you restart the server (at least so far as I can tell).

### To start the client app:
Navigate to the "client" directory in terminal, if it is your first time running it first run:
> npm install

then run:
> npm start

NOTE:
> This will start the react application. package.json is set up to proxy localhost:5001, this means requests with fetch() that are not against a full URL (ie /test) will be sent to the proxy, which is also the default starting port in server.js. Unlike the express.js server code, react runs in a web development server that does allow for hot reloading. This means changes to a file reflect in real time in the browser.

If working solely on the backend, only express.js / the server needs to be started. If working on the front end, both must be started. We can use Postman to test requests.

* * *
## Branching:
Changes to the code should be made in branches. After cloning the repo, create branches using the following git command:

> git checkout -b <branch_name> origin/main

This will checkout a new branch with the specified name, tracking the "main" branch in the repo.
Changes can be merged directly (git pull <branch_name>) when "main" is checked out or via GitHub's UI by starting a pull request in the repo. If merging into "main" using GitHub, you need to upload your branch into the repo in GitHub and not just your local copy. To do this, you can run: 

> git push origin <branch_name>

Your branch can be updated to include new code from "main" by running the following command:

> git pull origin main