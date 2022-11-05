# BODY BUILDING

The Live Site of [BODY BUILDING](https://github.com/facebook/create-react-app).

## Main Features

1. Routing the Pages using React Router
2. Some major components: like as-
   - Home
   - Services
   - About
   - Contact
   - Login
3. In the Header Page:
   - Banner(Carousel)
   - 3 Cards of Services
   - Footer 
## Core Funtionality of the project

1. Authenticatate User
2. SignIn and SignOut
   - Get Email and Password from the registered user
   - All the input fields are required. Means, without file up none can go forward
   - Login with Google
   - Forget Password if any user cannot remember his password
   - Toggle between Login and Registration
   - Simply Show error if occur.
3. Register a user
   - User name , Email, password is taken for registration.
   - user is registered with Email verification.
   - A checkbox implemented. If the checbox is unchecked, the submit button will be disabled.
4. SignOut button can be seen in the header with the name of user if he logged in
5. And By clicking SignOut button , the user will be Logged Out.
6. In the Service Component, if any user click the "Enroll Now" button. He will be redirect to the checkout page. Specific card information can be seen in the checkout page. Main funtionality of CheckOut page -
   - The Card contains an image, name of service, description, price and a button
   - It is a Protect page. That means, if any user don't logged in , he will be redirect to the Login page.
   - When the user is logged in, he will be redirect to the checkOut page.
   - A form is used using React Hook Form and clicking submit button a succes model can be seen.
7. Custom Hook is used for Services. In the Home Page 3 card will be shown and the Services page all the card can be seen.
8. In the Footer copyright symbol and dynamic year are set. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
