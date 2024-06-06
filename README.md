# Notesy 📒

## Description
Notesy is a simple and intuitive application for taking notes. Whether you need to jot down quick reminders or keep track of important information, Notesy makes it easy and efficient. 

## How to Use 🚀
1. **Visit**: Go to [notesyapp.vercel.app](https://notesyapp.vercel.app)
2. **Login/Register**: Use any username and password to log in or register.
3. **Start Adding Notes**: Add your notes and voila!

## Tech Stack 💻
- **Next.js**: For Complete Full Stack Development (SSR, CSR, API, and routing).
- **React.js**: To Build Components and Pages.
- **Firebase (RTDB)**: Real-time Database for storing notes in real-time.
- **Tailwind CSS**: For Styling the components and UserInterface of Notesy.

## Working Description 🛠️
The application consists of three API endpoints:
1. **/notes/<noteid>**
   - **GET**: Retrieve a specific note.
   - **PUSH**: Add a new note.
   - **PUT**: Update an existing note.
2. **/auth**
   - **GET**: Register a new user.
   - **PUSH**: Authenticate and log in a user.
3. **/userNotes/**
   - **POST**: Retrieve and update the list of user notes.

## Clone the Repo 📂
To run the application locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Apx-Monstr/notesy
2.  **Initialize Firebase**:

1. Go to the Firebase console and create a new project.
2. Generate your web configuration IDs.

3. **Set up Environment Variables**:

1. Create a `.env.local` file in the root of your project.
2. Add your Firebase configuration in the following format:

    ```makefile
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4. **Install Dependencies**:

    ```sh
    npm install
    ```

5. **Run the Development Server**:

    ```sh
    npm run dev
    ```

6. **You're Good to Go! 🎉**

Alternatively, you can use the live version at [notesyapp.vercel.app](https://notesyapp.vercel.app).
