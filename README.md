# Project Title

My Experiences Web Application

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)
- [Git SCM Guide](#git-scm-guide)

## Project Description

'My Experiences' is a web application that allows users to discover and book unique activities around the world. Built with Node.js and Express for the backend, and using SQLite as a database, this platform provides a seamless experience for exploring different types of activities based on regions.

## Technologies Used

- [Express.js](https://expressjs.com/): A fast, unopinionated, and minimalist web framework for Node.js.
- [EJS](https://ejs.co/): Embedded JavaScript templates for generating dynamic HTML.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): The programming language used for server-side logic.
- [SQLite](https://www.sqlite.org/): A self-contained, serverless, and zero-configuration SQL database engine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm: [Install Node.js and npm](https://nodejs.org/)
- SQLite (Recommended for local development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ella13162/OldAssignment.git
  ```

2. Navigate to the project directory:

```bash
cd my-experiences
```

3. Install the required npm packages:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to view the application.


## Usage

The application supports the following routes:

- `GET /activity/:region` - Retrieve all activities in the specified region.
- `POST /experience/add` - Add a new experience.
- `POST /experience/:expID/book` - Book an experience by experience ID.

## Project Structure

??????????????????

## Features

- Look up activities in a specified region.
- Add new experiences to the database.
- Book an experience with the ability to specify the number of attendees.
- Interactive map display of experiences using Leaflet and OpenStreetMap.
- User authentication system for login and session management.
- Capability to handle bookings only for authenticated users.



## Testing

For testing the API endpoints, you can use tools like Postman or curl.

Example:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"exp_name": "Skydiving", "exp_type": "Adventure", "country": "USA", "region": "California", "lon": -120.238, "lat": 38.591, "exp_description": "Experience the thrill of skydiving with stunning views.", "bookings": 0}' http://localhost:3000/experience/add
```

## Built With

- [Node.js](https://nodejs.org/) - The runtime server environment.
- [Express](https://expressjs.com/) - The web application framework.
- [SQLite](https://www.sqlite.org/) - The database engine.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ella13162/OldAssignment.git).

## Authors

- **Elzbieta Strzyz** - *My Experience Web Application* - [ella13162](https://github.com/ella13162/OldAssignment.git)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## Git SCM Guide

## Git Scm tool
please install git scm command line tool from the link below

[Git SCM Tool](https://git-scm.com/)

# Steps for Github
1. Install Git Hub tool
2. Creat a git hub repository 
   1. Select Public/Private
   2. Select the .gitignore -- "Use appropriate Language e.g. NodeJS"
   3. You might select licence
3. check the git version using
   > git -v
4. Copy the contents of the github newly created rep .gitignore file and create a new .gitignore file locally and past it in the file
5. Add a Readme.md file locally as well
6. Initialise the existing folder as a new github repo/proj
   > git init
7. Add the exisitng file and folders and git command will ignore the files mentioned in .gitignore file
   > git add .
        or 
   > git add -A
        or
   > git add "filename"
8. Note: you can get the help of a available git commands using 
   > git help
9. Check the branch if it's **main** or **master**. The old github use to create the **master** branch but now it's the **main** branch which is default brach.
10. If you tool created a **master** branch then change/update it to **main** brach using the command below
    > -- check the branch 
    > git branch // Shows all available branches
    > git branch -a // Shows active brance

    Change from master to main branch
      > git branch -m main
11. Add the remote github to the ""origin". Go and copy the path of your github repo where you want to push all your files/folder 
    > git remote add origin https://github.com/ella13162/OldAssignment.git

    You can confirm the remote origin by using command
    >git remote add origin https://github.com/ella13162/OldAssignment.git
12. If you don't have any existing project and you want to **clone** existing project from github you can clone it like
    > git clone "Path of you github rep.git"
13. Add commit or comment
    > git commit -m "initial commit"
14. Check the status which file/folder will be added to remote repo
    > git status
15. Push all your files/folder to the Github
    > git push -u -f origin "name of your branch"

    e.g.
    > git push -u -f origin main // use this command for the first time

    if you already pushed your repo then use the simple push command
    > git push origin main

## Summary of Github Command
### clone existing project
    > git clone https://github.com/ella13162/OldAssignment.git
### Steps for making existing folder as repo
> git init
> git branch -m main
> git add .
> git commit -m "Initial Commit"
> git remote add origin "link to your repository"
> git push -u -f origin main // First time
> git push origin main    


# Git Pull command for Collobaration project
> git pull "path to the repo" https://github.com/ella13162/OldAssignment.git
> 