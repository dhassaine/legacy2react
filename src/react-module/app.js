import React from 'react';
import globalKeyValueDuck from './state/ducks/keyValues';
import { connect } from 'react-redux';

function ReactToggle({ on, handleChange }) {
  return (
    <div>
      <input id="toggle" type="checkbox" checked={on ? 'checked' : ''} onClick={()=>handleChange(!on)} />
      React-module toggle
    </div>
  );
}

const mapStateToProps = state => {
    const v = globalKeyValueDuck.selectors.getValue(state, 'toggle');
    const on = v === undefined ? false : v;
    return { on };
};

const mapDispatchToProps = dispatch => ({
    handleChange: value =>
        dispatch(globalKeyValueDuck.actionCreators.setValue('toggle', value))
});

const connectToRedux = Component => connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

const ConnectedReactToggle = connectToRedux(ReactToggle);
export default ConnectedReactToggle;