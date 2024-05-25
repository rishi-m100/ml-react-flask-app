# React App Machine Learning Model Classifier Mini-Project 

This project implements a machine learning model to detect whether an uploaded image contains a cat or a dog. The model is built using TensorFlow and served via a Flask backend. The frontend is built using React to provide a user-friendly interface for uploading images and viewing predictions.

## Deployment Link

The project is deployed and accessible at: [Machine Learning Model Deployment](https://ml-react-flask-app.onrender.com/)

## Features

- Upload images to predict whether they contain a cat or a dog.
- Display prediction results in real-time.

## Technologies Used

- **Frontend**:
  - React
  - Axios

- **Backend**:
  - Flask
  - TensorFlow

## Usage

1. Visit the deployment link: [Machine Learning Model Deployment](https://ml-react-flask-app.onrender.com/)
2. Click on the "Select a file" button to upload an image.
3. Click on the "PREDICT" button to see the prediction result.
4. Repeat the process to upload and predict new images.

## Local Development

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/rishi-m100/ml-react-flask-app.git
# Clone
```
2. Install dependencies:
   
  ```bash
  npm install  # For frontend dependencies
  pip install -r requirements.txt  # For backend dependencies
  ```
3. Start the frontend and backend servers:

  ```bash
    npm start  # Start the React server
    python server.py  # Start the Flask server
  ```
