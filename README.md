# Dog Insurance App
-This React app presents an interactive page for a dog insurance website, offering a simulated insurance application designed for pet owners seeking coverage for their dogs. Users can explore various insurance plans, receive instant quotes by selecting their preferred plan and specifying the number of dogs. The app concludes by inviting users to rate their experience, enhancing engagement with its user-friendly interface.

# [Netlify Live Link](Netlify link here)

### Usage
For the React app only 
1. Clone the repository or download the files.
2. `npm start` or 'npm run build' in terminal to run the applicaton 
3.Runs the app.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

   
### Features
1. The BreedCard component fetches and displays a random dog image using data from The Dog API. It uses React's useState and useEffect hooks to manage state and handle side effects.

2. The InsuranceCalculator component is designed to provide an interactive form for users to calculate and select insurance plans based on the number of dogs they own.

3. The InsurancePlans component displays a section outlining different insurance plans offered by the application.

4. APP.js features code that creates a UI section for users to rate their experience using increment and decrement buttons utilizing redux.

### Files
1. index.js: The file connecting App to React 

2. App.js: The main file that renders all App components

3. store.js: The file configures a Redux store using createStore from Redux, along with an initial state and a rootReducer.

4. actions.js: The file that declares two action creator functions for Redux, which are responsible for creating actions that describe the intention to increment or decrement a count.

5. reducer.js: The file defines a Redux reducer function responsible for managing a simple count state.

6. src --> components: Stores all component files 

7. public --> index.html: Houses index.html that houses the "root" of app

8. src -->styles --> index.css: Houses the stylesheet for app



### Contributing
Contributions to this app are welcome! If you'd like to contribute to the project, please follow these steps:

1.Fork the repository.
2.Create a new branch (git checkout -b feature/my-feature).
3.Make your changes and commit them (git commit -am 'Add new feature').
4.Push to the branch (git push origin feature/my-feature).
5.Create a new Pull Request.
