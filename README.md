# dt money

This is a small example project created using CRA (create-react-app) and typescript, during the React course "Ignite" from Rocketseat.

It was focused in project configurations, style, format data, contexts, and mock api calls.

![alt App Preview](https://github.com/bernardobpl/dtmoney/blob/main/public/appPreview1.png?raw=true)

![alt App Preview With Modal](https://github.com/bernardobpl/dtmoney/blob/main/public/appPreview2.png?raw=true)

## Libraries
* React
* Typescript
* Axios
* Miragejs
* Polished
* Styled-components
* React-modal

# Running app
* Clone the project
  `git clone [repo_url]`
* Install dependencies
  `yarn`
  or
  `npm install`
* Run script "start"
  `yarn start`
  or
  `npm run start`
* It will open automatically in `http:/localhost:3000`

# What I've learned
* Learned about Miragejs. It is a very useful lib when the frontend and backend team are no synchronized and still need to let everything working to a future integration
* Polished is a good way to treat some css-in-js properties
* React-modal is a good option for Modals if you don't want to install large UI libraries with many unsued and complex components
* Different ways to make the same style
* Format dates and currency using INTL

# Notes
* It was not configured persistence of data. It means that you can create new transactions and it will appear on the list and will be evaluated on balance calculation, but if you refresh page the list will reset to initial values
* There are many things that could be implemented to a Money Management app, but this is just a small example
* I already knew most of the things taught but still learned different ways to solve some problems


