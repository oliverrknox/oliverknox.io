# oliverknox.io

![License](https://img.shields.io/github/license/oliverrknox/oliverknox.io)

## Overview

A portfolio website built with Next.js and PayloadCMS.

## Table of contents

1. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Features

- **Built with Next.js**: A fast, server-side rendered React framework for optimized performance and SEO.
- **Headless CMS with Payload**: Dynamic content management with Payload CMS for easy updates without altering code.
- **GitHub Integration**: Seamless integration with GitHub for managing and deploying the site.
- **Caching for Improved Performance**: Response caching for faster page loads and optimized user experience.
- **SEO Optimization**: Built-in SEO capabilities with Next.js, ensuring your portfolio ranks well in search engines.

## Requirements

Ensure you have the following installed:

- [Node.js v20.x or higher](https://nodejs.org)
- [npm 10.7.x or higher](https://npmjs.com)

## Installation

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/oliverrknox/oliverknox.io.git
    ```
2. Install dependencies
    ```bash
    npm install
    ```

## Configuration

Instructions to configure the application.

- **Environment Variables**
    - `PAYLOAD_SECRET`: A secret key used by PayloadCMS for auth (for local development any sufficiently long string will do).
    - `DATABASE_URI`: The URI of a MongoDB atlas cluster.
    - `BLOB_READ_WRITE_TOKEN`: The read write token for Vercel blob storage (for local development this can be omitted).

## Usage

Instructions to start and interact with the application.

### Starting the app

To run the app in development mode:

```bash
  npm run dev
```

To run the app in production mode:

```bash
  npm run build
  npm start
```

## Testing

Instructions for running tests.

### Unit Tests

To run unit tests:

### Integration Tests

To run integration tests:

## Deployment

Instructions for deploying the application to Vercel:

- The repository has Vercel integrated via GitHub.
- It will run a production build on pushes to the `main` branch.

## Contributing

Guidelines for contributing to the project.

- Fork the repository
- Create a new branch
- Make your changes
- Submit a pull request

> [!NOTE]
> Add any media files inside `public/media` as well as the CMS for better accessibility.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Author**: Oliver Knox
- **Email**: hi@oliverknox.io
- **GitHub**: [oliverrknox](https://github.com/oliverrknox)

---
