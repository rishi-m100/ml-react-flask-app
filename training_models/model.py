import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers # type: ignore


# Define the model architecture
model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(512, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='rmsprop',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# Data preprocessing
train_datagen = keras.preprocessing.image.ImageDataGenerator(rescale=1./255)
train_generator = train_datagen.flow_from_directory(
        '/Users/rishimulchandani/ml-react-flask-tutorial-deploy/data/Animal Images',
        target_size=(150, 150),
        batch_size=20,
        class_mode='binary')

# Data Validation
validation_datagen = keras.preprocessing.image.ImageDataGenerator(rescale=1./255)
validation_generator = validation_datagen.flow_from_directory(
        '/Users/rishimulchandani/ml-react-flask-tutorial-deploy/data/Animal Images',
        target_size=(150, 150),
        batch_size=20,
        class_mode='binary')

# Train the model
history = model.fit(
      train_generator,
      steps_per_epoch=100,
      epochs=30,
      validation_data=validation_generator,
      validation_steps=50)


model.save('dogs_cat_model.h5')