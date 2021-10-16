# :cloud: Weathy :cloud:

This project is an SPA bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and built under the principles of atomic web design using reusable MaterialUI components.

The app consists of three pages, (only two of them are mandatory):
- Login page, (Mandatory).
- Dashboard, (Mandatory).
- Error, not found, page, (Not Mandatory).

Authentication is basic, using local storage, and it has simple input validation for login.
Username and password should:
- Contain at least 6 characters.
- Not contain special characters and / or spaces.
- Should not be empty.

The routing system redirect to login, (used as root route), and also let us know if a route exists in the app or not, (it redirects to Error Not Found Page). Navigation is based in this routing system.

Inside dashboard, an API call is made using a secret key registered as an env file, you should add your own variable in order to make this call.
If you have yours, API call will be made normally, and data will render, if you don't set it, Error Boundary will display.

Finally, you can logout by clicking in Logout button inside the Dashboard.

## 👉 Requirements

1. Git in your local environment.
2. .env file containing a variable with your secret key.
    - `REACT_APP_SECRET_KEY=<YOUR-SECRET-KEY>`
2. node installed
3. yarn installed

## :computer: Getting started

_Runs the app in the development mode._

1. Clone the repo with the SSH.
2. Open the project in your preferred text editor or IDE.
3. Navigate to the projects root directory.
4. Run one of the following commands:
    - `yarn`
    - `yarn install`
5. For start the project run: 
    - `yarn start`
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
Remember to restart your localhost anytime you change the .env file.

## 🛠 Built with

- Typescript
- React
- MaterialUI
- Styled Components
- Local storage
- Fetch
- Yarn
- Atomic desing

## Contact & Support

🙍 Guadalupe Rangel - luzaks.software@gmail.com - ☄

You liked it? ⭐️ Star the project!!!

Any comment that you want to send I'll be happy to receive it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
