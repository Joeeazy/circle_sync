# Cicle_Sync

# Overview

        The Connections Management App is a web application that allows users to seamlessly manage a list of connections. Users can create, read, update, and delete connections from their store with ease. The app features a stylish and responsive user interface with support for light and dark modes, ensuring a personalized and consistent experience across all devices.

# Features

CRUD Functionality: Seamlessly create, read, update, and delete connections from your store.

Stylish UI Components: Enhanced user experience with stylish UI components provided by Chakra UI.

Light and Dark Mode: Enjoy a personalized user interface experience with light and dark mode options.

Responsive Design: The app is designed to adapt to various screen sizes, ensuring a consistent experience across devices.

# Tech Stack

Frontend: React, Chakra UI

Backend: Flask, SQLAlchemy

Database: SQLite

Deployment: Render

# Best Practices

Utilizes best practices such as creating virtual environments (venv) for a clean and isolated development environment.

# Installation and Setup Prerequisites

Python 3

Node.js

npm (or yarn)

SQLite

# Backend Setup

# Clone the repository:

bash
Copy code
git clone https://github.com/Joeeazy/circle_sync.git
cd circle_sync/server
Create and activate a virtual environment:

bash
Copy code
python3 -m venv venv
source venv/bin/activate # On Windows use `venv\Scripts\activate`
Install the required packages:

bash
Copy code
pip install -r requirements.txt
Set up the database:

Run the Flask server:

bash
Copy code
flask run
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../client
Install the required packages:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm run dev

Deployment
The app is deployed on Render. Follow the instructions on the Render documentation to deploy your own version of the app.
