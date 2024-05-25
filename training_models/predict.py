import numpy as np
from tensorflow import keras
from tensorflow.keras.models import load_model # type: ignore
from tensorflow.keras.preprocessing import image # type: ignore

# Load the image to predict
img_path = '/Users/rishimulchandani/ml-react-flask-tutorial-deploy/Animal Images/cats/9dd1aa7.jpg'
img = image.load_img(img_path, target_size=(150, 150))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x /= 255

# Load the model
model = load_model('/Users/rishimulchandani/ml-react-flask-tutorial-deploy/backend/models/dogs_cat_model.h5')

# Make the prediction
prediction = model.predict(x,verbose=0)
if prediction < 0.5:
    print("The image is a cat.")
else:
    print("The image is a dog.")

