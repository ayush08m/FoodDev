# 🍕 FoodDev – React Native Food Ordering App

FoodDev is a React Native (Expo) mobile application that lets users browse food items, view veg/non-veg sections, see offers and special items – all powered by Firebase (Auth + Firestore).

This app reads data added from a separate **React Web Admin Panel** and displays it in a clean, modern UI for users.

---

## 🚀 Features

- 📱 **React Native (Expo) app**
- 🔐 **Firebase Authentication** (Email + Password)
- ☁️ **Firebase Firestore** for storing food items and user data
- 🥗 **Category-based food listing** (Veg / Non-Veg / Today’s Special)
- 🔍 **Search bar** to find food by name
- 🃏 **Card sliders** for:
  - Today’s Special
  - Veg Lover
  - Non-Veg Lover
- 🛠 Clean, component-based structure:
  - `HomeScreen`, `LoginScreen`, `SignupScreen`
  - Components like `HomeHeadNav`, `Categories`, `OfferSlider`, `Cardslider`

---

## 🧱 Tech Stack

- **React Native** (Expo)
- **Firebase**
  - Authentication
  - Firestore
- **React Navigation**
- **Expo Vector Icons**

---

## 📂 Project Structure (simplified)

```bash
FoodDev/
  ├─ src/
  │  ├─ screens/
  │  │  ├─ HomeScreen.js
  │  │  ├─ LoginSignupScreens/
  │  │  │  ├─ LoginScreen.js
  │  │  │  └─ SignupScreen.js
  │  ├─ components/
  │  │  ├─ HomeHeadNav.js
  │  │  ├─ Categories.js
  │  │  ├─ OfferSlider.js
  │  │  └─ Cardslider.js
  │  ├─ Firebase/
  │  │  └─ FirebaseConfig.js
  │  └─ globals/
  │     └─ style.js
  ├─ App.js
  ├─ package.json
  └─ README.md
🛠 Setup & Installation
1️⃣ Clone the repo
git clone https://github.com/ayush08m/FoodDev.git
cd FoodDev

2️⃣ Install dependencies
npm install
or
yarn install

3️⃣ Firebase configuration
Go to:
src/Firebase/FirebaseConfig.js

Make sure it matches your Firebase project:

import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
export { app, auth, db };

🔒 For production, move secrets to environment variables / secure config.
Also in Firebase Console:
Enable Authentication → Email/Password
Create a Firestore database
Create collection FoodData (this is filled via the admin panel).

4️⃣ Run the app (Expo)
npx expo start
Press a to run on Android emulator
Or scan QR with Expo Go on your phone


<img width="387" height="883" alt="Screenshot 2025-11-03 162244" src="https://github.com/user-attachments/assets/efb4c5cb-b3bf-4a53-b679-3d3bdcc8f593" />
<img width="215" height="462" alt="Screenshot 2025-11-03 163004" src="https://github.com/user-attachments/assets/20d91410-2e59-4d31-a3d6-f89bdac9630f" />
<img width="414" height="886" alt="Screenshot 2025-11-03 162302" src="https://github.com/user-attachments/assets/3d1aa759-4325-4975-93db-b1ab55fe856a" />
<img width="208" height="448" alt="Screenshot 2025-11-20 195057" src="https://github.com/user-attachments/assets/54672469-3a17-42ee-ab24-276bb383d60b" />
<img width="208" height="449" alt="Screenshot 2025-11-20 195049" src="https://github.com/user-attachments/assets/c343f82e-a363-4caa-b10f-3a03f955f436" />
<img width="214" height="447" alt="Screenshot 2025-11-20 195124" src="https://github.com/user-attachments/assets/df9917a0-a403-4a45-92c3-430d84a599b5" />
<img width="203" height="443" alt="Screenshot 2025-11-20 195108" src="https://github.com/user-attachments/assets/83a5e819-6d9c-4c86-8235-622bb476fc53" />

✨ Future Improvements

Add cart & order flow
Add user profile & order history
Filter / sort food items
Add image upload instead of URL
Integrate payment gateway ( Razorpay / Stripe )

👨‍💻 Author
Ayush More
GitHub: @ayush08m

🔗 Related Project (Admin Panel)
This mobile app gets its food data from my React Web admin panel:
👉 Admin
 Panel Repo:
https://github.com/ayush08m/fooddevadminpanel
The admin panel lets you add food items (name, price, image URL, category, restaurant info) into the FoodData Firestore collection. Those items are then displayed in this mobile app.
