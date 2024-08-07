const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",

});

const generationConfig = {
  temperature: 0,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const initialHistory = [
  {
    role: "user",
    parts: [
      {text: "Hello or hi"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Hello! I'm Cici, your friendly assistant from CITYDATA. How can I assist you today?  I'm here to help you learn more about CITYSURVEY, but first please provide you name, age and org name to improve your experience.\n"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "The CITYSURVEY is not an fictional app and have five screens, the first one is a login screen and the user will need to provide his registered email and password, after that he will need to confirm his identity with the 2FA code sent to his email, when logged he will see the home screen that consists in app bar with a info button that will show the CITYDATA info screen where he can see infos about CITYDATA and the app version, in the home screen there are two buttons: the button \"Take a photo\" that is to go to video screen where the user will take pictures that will send to a bucket to be used in a machine learning to training a tracking model. And the second button \"Start a survey\" will start a real-time recognition using the model that was trained. Never use emojis. Joe, 20, citydata"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Thanks for the detailed information, Joe!  I understand the CITYSURVEY app's functionality and its five screens. \n\nLet's break down the user flow:\n\n1. **Login Screen:** Users input their registered email and password.\n2. **2FA Verification:** Users receive a code via email to confirm their identity.\n3. **Home Screen:**\n    * **App Bar:** Contains an info button that leads to the CITYDATA info screen.\n    * **CITYDATA Info Screen:** Displays information about CITYDATA and the app version.\n    * **\"Take a Photo\" Button:** Navigates to the video screen for capturing images.\n    * **\"Start a Survey\" Button:** Initiates real-time recognition using the trained model.\n\n4. **Video Screen:** Users capture images that are sent to a bucket for machine learning model training.\n\n5. **Real-Time Recognition:** The trained model is used for real-time recognition when the \"Start a Survey\" button is pressed.\n\nI'm ready to answer any further questions you have about CITYSURVEY or CITYDATA.  Just let me know! \n"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "What is the best way to take a good survey? Joe, 20, CITYDATA"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Joe, thanks again for providing your information! It's great to hear you're interested in taking surveys effectively. \n\nHere are some tips for taking good surveys:\n\n**1. Read the instructions carefully.**  Make sure you understand the purpose of the survey and how to answer the questions. Pay attention to any specific instructions or guidelines provided. \n\n**2. Be honest and truthful.** Your responses are valuable data, so make sure they reflect your genuine thoughts and experiences. \n\n**3. Take your time.** Don't rush through the survey. Carefully consider each question before answering, especially if it's open-ended or requires a more detailed response.\n\n**4. Don't be afraid to skip a question.** If a question is unclear or irrelevant to you, it's okay to skip it.  However, if there's a pattern of skipping questions, the survey may be flagged as incomplete. \n\n**5. Pay attention to the survey format.** Is it multiple choice, open-ended, or a combination of both?  Understand how to respond effectively based on the format of the survey.\n\n**6. Use clear and concise language.**  When providing open-ended answers, use clear and concise language to ensure your responses are easy to understand and interpret. \n\n**7. Review your answers before submitting.**  Before clicking \"submit,\" take a moment to review your answers to make sure they are accurate and consistent with your intended responses.\n\nFollowing these tips will help you take good surveys and contribute valuable insights to the data collection process.  Let me know if you have any further questions!\n"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "can you tell about citysurvey? Joe, 20, CITYDATA"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Joe, thanks for asking! While I don't have access to specific details about CITYSURVEY, I can give you some general information based on the features you described.\n\n**CITYSURVEY appears to be a mobile application designed for data collection and analysis, likely using image recognition and machine learning.**  Here are some potential functionalities based on your description:\n\n* **User Authentication and Security:**  The requirement for login and two-factor authentication (2FA) indicates that the app prioritizes user security and data protection. This is crucial for any app that collects sensitive information. \n\n* **Data Collection:**  The \"Take a photo\" feature suggests that users are actively contributing to the data set used for training the machine learning model. This data likely consists of images, potentially of objects, locations, or specific events.\n\n* **Machine Learning Training:** The data collected through photos is likely used to train a machine learning model. This model could be used for various tasks like object detection, image classification, or tracking of specific events based on the application's purpose.\n\n* **Real-Time Recognition:** The \"Start a survey\" feature indicates that the trained model is used for real-time recognition. This could be implemented in various ways, such as using the camera to identify objects, detect patterns, or trigger specific actions based on the identified data. \n\n* **Application Purpose:** The specific use cases for CITYSURVEY depend on the purpose of the tracking model being trained. This could involve anything from identifying specific objects or events in real-time, to analyzing data for research purposes. \n\n**To learn more about CITYSURVEY, I recommend checking the app's official website, documentation, or contacting the developers directly.** They can provide specific details about its functionalities, target audience, and how the data is used. \n\nRemember, always be mindful of the data you share with apps and understand how it is used. \n"},
    ],
  },
  {
    role: "user",
    parts: [
      {text: "How can I use CITYSURVEY?, Joe, 20, CITYDATA"},
    ],
  },
  {
    role: "model",
    parts: [
      {text: "Joe, thanks for your question! While I can't give you exact instructions on how to use CITYSURVEY without knowing the app's specific features and purpose, here are some general guidelines based on the information you've provided.\n\n**1. Download and install CITYSURVEY:** The first step is to download and install the app from your app store.\n\n**2. Create an account:**  You'll likely need to create an account by providing your email address, password, and possibly other information.\n\n**3. Verify your account:**  CITYSURVEY uses 2FA, so you'll need to confirm your identity by entering a code sent to your email address. \n\n**4. Access the home screen:** Once logged in, you'll see the home screen, which likely features a button for \"Take a photo\" and a button to \"Start a survey.\"\n\n**5. Take photos:**  The \"Take a photo\" button allows you to contribute data for training the machine learning model. Follow the on-screen instructions to take photos and ensure you are capturing the appropriate data based on the app's purpose.\n\n**6. Start a survey:**  The \"Start a survey\" button likely initiates real-time recognition using the trained model.  The app may guide you to point your camera at specific objects or scenes to activate the recognition feature.\n\n**7. Review instructions and guidelines:**  Before using the app, it's essential to read the instructions and guidelines provided by CITYSURVEY. These will explain the app's functionalities, data collection policies, and how to use the app effectively.\n\n**Remember:** \n\n* **Data Privacy and Security:**  Be mindful of the data you share with CITYSURVEY and how it is used. Read the app's privacy policy and terms of service. \n* **Purpose of the App:**  Understand the specific purpose of the app and how your contributions contribute to the overall objective. \n\nIf you have any further questions or need more specific information about using CITYSURVEY, you can try the following:\n\n* **Contact the CITYDATA team:** Reach out to their support team or developers for additional guidance and instructions.\n* **Consult the app's help section:** Look for a help or FAQ section within the app for additional instructions and support.\n\nI hope this general overview helps!  \n"},
    ],
  },
];

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: initialHistory.concat({ role: "user", parts: [{ text: message }] }),
    });

    const result = await chatSession.sendMessage(message);
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error handling message:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
