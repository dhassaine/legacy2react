import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import makeStore from './state/store';


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

const store = makeStore();
window.reactModule = {
  make: ({ el, props = {} }) => {
    return bridge({ store, el, component: <App {...props} /> });
  }
};