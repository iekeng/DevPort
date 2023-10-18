# DevPort Web Application

The DevPort Web Application is a full-stack web platform built to help developers showcase their work and achievements in one place. It enables users to create a personalized portfolio by integrating their GitHub repositories, education details, work experience, and personal information. This README provides an overview of the application and its key features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### GitHub OAuth Authentication
- Users can sign up and log in using their GitHub accounts through OAuth authentication.
- OAuth ensures secure and convenient access to users' GitHub data, such as repositories, for portfolio building.

### GitHub Repositories Integration
- The application integrates with the user's GitHub account to fetch and display repositories deployed via GitHub Pages.
- It also retrieves the programming languages used in each repository and showcases them on the user's portfolio.

### Portfolio Creation
- Users can add and customize their portfolio, including details about their education, work experience, and personal information.
- The portfolio creation process is user-friendly and offers real-time preview capabilities.

### Portfolio Preview
- Users can review how their portfolio looks before publishing it.
- The preview feature helps ensure that their portfolio represents them effectively.

### Portfolio Download
- Users have the option to download a copy of their portfolio in a format of their choice.
- This feature enables users to share their portfolios offline or with potential employers.

## Technologies Used

The DevPort Web Application utilizes a variety of technologies to provide its functionality:

### Frontend
- React: The application's frontend is built using the popular JavaScript library React, creating an interactive user interface.
- Create React App: Create React App simplifies the setup of the development environment, allowing for faster development and deployment.

### Backend
- Node.js: The backend is implemented using Node.js, which provides the server infrastructure for the application.
- Express.js: Express.js is used for creating the RESTful API endpoints.
- MongoDB: User data, portfolio content, and other information are stored in a MongoDB database, ensuring data persistence.
- Redis: Redis is used for caching data, improving the application's performance and responsiveness.

## Installation

To run the DevPort Web Application locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/yourusername/DevPort.git
   ```

2. Navigate to the project directory:
   ```shell
   cd DevPort
   ```

3. Install dependencies for both the frontend and backend:
   ```shell
   cd devport-app
   npm install
   cd ../server
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the server directory and set the necessary environment variables, such as your MongoDB connection string and GitHub OAuth credentials.

5. Start the server and the React application:
   - In the `server` directory, run:
     ```shell
     npm start
     ```
   - In the `devport-app` directory, run:
     ```shell
     npm start
     ```

6. Open your web browser and access the application at `http://localhost:3000`.

## Usage

1. Sign Up:
   - Use the GitHub OAuth authentication to sign up for the DevPort Web Application.

2. Connect GitHub:
   - After signing up, link your GitHub account to the application to fetch repositories and programming languages used in your projects.

3. Create Your Portfolio:
   - Add your education details, work experience, and personal information to build your portfolio.

4. Preview:
   - Review your portfolio to make sure it reflects your skills and achievements.

5. Download:
   - Download a copy of your portfolio if you wish to share it offline or with potential employers.

## Contributing

Contributions to the DevPort Web Application are welcome. To contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:
   ```shell
   git checkout -b feature/your-feature-name
   ```

3. Make your changes, commit them, and push to your fork:
   ```shell
   git commit -m "Your commit message"
   git push origin feature/your-feature-name
   ```

4. Create a pull request to the original repository.

5. Ensure your code adheres to the project's coding standards and practices.

## License

The DevPort Web Application is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

