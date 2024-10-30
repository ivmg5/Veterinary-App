# **VeterinaryApp**
> *A React Native app for managing veterinary records efficiently.*

## **Introduction**
VeterinaryApp is a React Native application that provides a convenient way for veterinarians to manage and access records of animals under their care. This application enables user authentication, animal data storage, and record retrieval, allowing veterinary professionals to track information such as animal details, age, and image-based identification.

## **Project Description**
- **Main functionality:** This app includes features like user login, registration, a main menu for viewing all animals, and screens for adding new animals and viewing animal details.
- **Technologies used:** 
  - React Native
  - Firebase for authentication and Firestore database
  - React Navigation for handling navigation
  - TypeScript for enhanced type safety
- **Challenges faced:** Integration of Firebase Firestore and user authentication, managing state across various screens, and ensuring smooth cross-platform performance.
- **Future improvements:** Adding advanced features like search filters for animals, enhanced security layers, and more detailed record management options.

## **Table of Contents**
1. [Introduction](#introduction)
2. [Project Description](#project-description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)

## **Installation**

### Prerequisites
- **Node.js** - [Install Node.js](https://nodejs.org)
- **Yarn** - [Install Yarn](https://yarnpkg.com/)
- **Firebase Project Setup** - Create a Firebase project and configure authentication and Firestore.

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ivmg5/VeterinaryApp.git
   cd VeterinaryApp
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Firebase Configuration:**
   - Create a `firebaseConfig.js` file with Firebase API keys and configuration settings, following Firebase's setup for React Native.

4. **Run the application:**
   - For iOS:
     ```bash
     yarn ios
     ```
   - For Android:
     ```bash
     yarn android
     ```

### **Configuration Options**
- Enable `DEBUG=true` mode in the `.env` file for verbose logging.
- Set up environment variables in `react-native-dotenv` for sensitive configuration like Firebase API keys.

## **Usage**
Follow these steps to use the app:
1. **Launch the app** and sign in or create a new account.
2. **Navigate to the main menu** to view the list of animals.
3. **Add a new animal** by entering details and uploading an image.
4. **View animal details** by selecting an animal from the list.

**Example usage:**
```javascript
import { addAnimal } from './services/animalService';
addAnimal({ name: 'Buddy', age: 3, pictureUrl: 'https://...' });
```

## **License**
This project is licensed under the MIT License.

[![Build Status](https://img.shields.io/badge/status-active-brightgreen)](#)
[![Version](https://img.shields.io/badge/version-0.0.1-blue)](#)
