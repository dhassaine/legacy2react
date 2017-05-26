import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import makeStore from './state/store';
import ducks from './state/ducks';

// For more details on what a ducks pattern is, please see
// this article: https://medium.com/@DjamelH/ducks-redux-reducer-bundles-44267f080d22

// Our React interface provides both a render and destroy method
// so that the controlling app has full control of its life cycle
function bridge({ store, el, component }) {
  return {
    render() {
      ReactDOM.render(
        <Provider store={store}>
          <div>
            {component}
          </div>
        </Provider>,
        el
      );
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(el);
    }
  };
}

// build our redux store
const store = makeStore();

// setup our React interface and mount it to the global window to be accessible by the legacy codebase
// We also expose the store and ducks modules so that the parent app can sync to the redux store
window.reactModule = {
  make: ({ el, props = {} }) => {
    return bridge({ store, el, component: <App {...props} /> });
  },
  ducks,
  store
};