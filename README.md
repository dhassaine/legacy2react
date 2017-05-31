# legacy2react
This project demonstrates how potentially legacy code, e.g. a Backbone/jQuery app can be integrated with React by using Redux. The React/Redux app can be built using modern build tools and the latest standards allowing the legacy code to migrated slowly and carefully. Please see [How to graft React on to legacy code](https://hackernoon.com/how-to-graft-react-on-to-legacy-code-3ad86e55e2f1) for a more detailed description. You will need to understand the Ducks++ pattern for this project to make sense: [Ducks++](https://medium.com/@DjamelH/ducks-redux-reducer-bundles-44267f080d22).

# Usage
Simply open `index.html` to see a working example of two switches: one is implemented using Backbone, and the other is implemented in React; however both are synced through the backbone model and the Redux store.

# Installation
If you wish to experiment with the React code (located in the `src/react-module` directory), you will need node and npm. You install the dependencies by running `npm install` and to build the assets: `npm run build`.  
