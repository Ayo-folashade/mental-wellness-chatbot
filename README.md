# MINDMEND

This README provides an overview of the files and functionality of the chatbot implemented using LangChain, OpenAI and FastApi. The chatbot is designed to provide answers related to mental health queries using conversational AI. There is also another version of this chatbot implemented using Flask and another with Streamlit [here](https://github.com/Ayo-folashade/mindmend)

## Files
The codebase consists of the following files:

- [main.py](): This file contains the main code for the FastAPI application. It sets up the server, handles HTTP requests, and communicates with the Langchain library to generate responses for the chatbot.
- [main.js](): This file contains the JavaScript code that handles the client-side functionality of the chatbot. It establishes a WebSocket connection with the server and sends user input to the server for processing. It also receives responses from the server and displays them in the browser.
- [index.html](): This file is an HTML template for the chatbot user interface. It defines the structure of the chatbot web page and includes placeholders for displaying user input and chatbot responses. It also includes a reference to the `main.js` file to enable the client-side functionality.
- [Mental_Health_FAQ.csv](): This file is a CSV (Comma-Separated Values) file that contains a dataset of frequently asked questions (FAQs) related to mental health. The chatbot utilizes this dataset to provide answers and information on mental health topics.
- [templates/](): This directory contains the HTML templates used for rendering the frontend pages.
- [static/](): This directory contains static files such as CSS, JavaScript, or image files. It might include the main.js file mentioned above.

## Setup
- Download the `main.py`, the `templates\`, `main.js`  and extract it to your local machine.

- Install the required Python packages by running the following command in the project directory:
```
pip install -r requirements.txt
```
- Set up the OpenAI API key by creating a `.env` file in the project directory. Add the following line to the .env file, replacing <your_api_key> with your actual OpenAI API key:
~~~
OPENAI_API_KEY=<your_api_key>
~~~

## Usage

### Run the application:
- Run the application by executing the following command in the project directory:
```
uvicorn main:app --reload
```
- Open your browser and visit `http://localhost:8000` to access the chatbot.
- Enter your queries or statements related to mental health in the input field.
- The chatbot will provide responses to queries based on the pre-trained models and the `Mental Health FAQ` dataset.
- If you encounter any errors or issues, please try again or seek assistance from a mental health professional.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project utilizes the Langchain library, OpenAI's GPT-3 language model and FastApi Web Framework.

## Important Note
Please ensure that you have a valid OpenAI API key to use the chatbot. If you don't have one, sign up for an API key at the OpenAI website before running the chatbot.
