# Live Streaming App Using RTMP

This project is a StreamYard clone that enables live streaming on YouTube using RTMP (Real-Time Messaging Protocol). It captures video from the user's camera and streams it live on YouTube.

## Features

- Captures video from the user's camera
- Streams live video on YouTube using RTMP
- Real-time communication between client and server using WebSockets

## Technologies Used

- Node.js
- Express.js
- Socket.IO
- FFmpeg
- HTML
- CSS
- JavaScript

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- FFmpeg

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/live-streaming-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd live-streaming-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm run dev
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Allow the browser to access your camera and microphone.

4. Click the "Start" button to begin live streaming.

5. Your live video stream will be broadcasted to YouTube using RTMP.

## Docker Support

You can also run the application using Docker. Ensure you have Docker installed and then follow these steps:

1. Build the Docker image:

    ```bash
    docker-compose build
    ```

2. Run the Docker container:

    ```bash
    docker-compose up
    ```

## Contributing

Contributions are welcome! Please feel free to open a pull request or submit an issue.

