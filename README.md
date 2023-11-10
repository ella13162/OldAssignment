# Project Title

My Experiences Web application

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

List any prerequisites that need to be installed or set up before the user can get started with your project.

- Node.js and npm: [Install Node.js and npm](https://nodejs.org/)
- SQLite (Recommended for local development)

### Installation

Step-by-step instructions on how to install your project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/my-experiences.git
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

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-username/my-experiences/tags).

## Authors

- **Elzbieta Strzyz** - *My Experience Web Application* - [YourUsername](https://github.com/your-username)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

---

Remember to replace the placeholders such as `your-username`, `Your Name`, repository URLs, and any specific installation or configuration details with information relevant to your 'My Experiences' web application.