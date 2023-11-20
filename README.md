# Payment Micro Sass

Payment Micro Sass is a Microsass software that utilizes paystack and stripe APIs to process payaments. This project is a proof of concept and isn't meant to be definitive or final.

## Features

- Payment processing with Paystack and Stripe
- REST API with Express.js
- MongoDB database
- Dockerized application

## Limitations

This project does not cover:

- User authentication
- Error handling for payment failures
- Unit tests

---

# CONTRIBUTING

## How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## Code of Conduct

Please refer to the [Code of Conduct](CODE_OF_CONDUCT.md) document.

---

# SETUP

## Prerequisites

- Node.js
- npm
- MongoDB
- Docker
- Git

## Local Setup

1. Clone the repository: `git clone https://github.com/username/project-name.git`
2. Navigate to the project directory: `cd project-name`
3. Install dependencies: `npm install`
4. Start the MongoDB service: `sudo systemctl start mongod`
5. Build the Docker image: `docker build -t your-image-name .`
6. Run the Docker container: `docker run -p 3000:3000 your-image-name`

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DB_CONNECTION`
- `PORT`
- `PAYSTACK_SECRET_KEY`
- `STRIPE_SECRET_KEY`

## Docker Image

You can pull the Docker image of this application from Docker Hub:

```
docker pull anajembaedwin/payment-micro-sass:latest
```

## Render Web Service

- The web server for this project is hosted on Render, which pulls the Docker image from Docker Hub. You can view the live application at [this link].

- The Docker image is manually updated on Docker Hub using GitHub Actions. Whenever changes are pushed to the main branch of the GitHub repository, a GitHub Actions workflow builds a new Docker image and pushes it to Docker Hub.
---

Please replace `'your-image-name'`, `'https://github.com/username/project-name.git'`, and `'project-name'` with the actual Docker image name, GitHub repository URL, and project name.