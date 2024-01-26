# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the image
WORKDIR /code

# Copy the requirements file into the image
COPY ./requirements.txt /code/requirements.txt

# Install the required Python packages
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Install additional packages using the package manager (apk)
RUN apt-get update && apt-get install -y iputils-ping curl

# Copy the main.py file into the image
COPY ./app /code/app

# Expose the required port for the FastAPI application
EXPOSE 8000

# Command to start the FastAPI application
CMD ["uvicorn", "app.main:app", "--host", "127.0.0.1", "--port", "8000"]