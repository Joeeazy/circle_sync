# Circle_Sync

## Overview

Circle_Sync is a web application designed to help users seamlessly manage a list of connections. Users can create, read, update, and delete connections effortlessly. The app boasts a stylish and responsive user interface with support for both light and dark modes, ensuring a personalized and consistent experience across all devices.

## Features

- **CRUD Functionality**: Seamlessly create, read, update, and delete connections from your store.
- **Stylish UI Components**: Enhanced user experience with stylish UI components provided by Chakra UI.
- **Light and Dark Mode**: Enjoy a personalized user interface experience with light and dark mode options.
- **Responsive Design**: The app adapts to various screen sizes, ensuring a consistent experience across devices.

## Tech Stack

- **Frontend**: React, Chakra UI
- **Backend**: Flask, SQLAlchemy
- **Database**: SQLite
- **Deployment**: Render

## Best Practices

- Utilizes best practices such as creating virtual environments (venv) for a clean and isolated development environment.

## Installation and Setup

### Prerequisites

- Python 3.x
- Node.js
- npm (or yarn)
- SQLite

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Joeeazy/circle_sync.git
   cd circle_sync/server
   ```

2. **Create and activate a virtual environment**:

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask server**:

   ```bash
   flask run
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../client
   ```

2. **Install the required packages**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm run dev
   ```

## Deployment

The app is deployed on Render.
