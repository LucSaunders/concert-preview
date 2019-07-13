Project Shift Hackathon March 28-29, 2019

Concert Concierge

General Gist: An app that provides users with a list of upcoming concerts specific to a city or metro area and provides a scrollable sidebar of videos of the artists in the list.

Specs:
UI

    **********SEARCH**********
    *****************************
    Search Bar: Take in city name (metro area) and a specific date range.


    **********RETURN**********
    *****************************
    Upcoming Concert List: List upcoming concerts. Each list will specify artist, venue, date.
    	API: Upcoming concerts APIs: Eventful; PredictHQ; Songkick; Spotify
    		API keys acquired: Eventful; PredictHQ;
    		API keys pending: Songkick

    Video List & Viewer: List playable YouTube clips of artists featured in Upcoming Concert List.
    	API: Video Viewer: YouTube
    		API keys: Keys from Backbone-YouTube eval and later YouTube assignments.

APIs:
Eventful
Main API page: http://api.eventful.com/
API doc: http://api.eventful.com/docs
Description: Prompt and free to register an account and acquire keys and access to API

    PredictHQ:  https://developer.predicthq.com/
    Endpoint: https://api.predicthq.com
    Description: 30-day free trial of API; 14-day free trial of web app;
    		test-drive PredictHQ API Postman Collection

Extension 1: Allow for a specific date range to be entered into the search field, and return events that match the location and date range.

Extension 2: Make artist names in Concert List clickable links to the artist homepage

Extension 3A: Limit video returns to live clips

Extension 3B: Infinite scroll for videos

Super Ninja Extension: A “Concerts You Missed” feature, that returns past concerts (back to two weeks prior to current date) and live videos

=================================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
