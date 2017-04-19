import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { MyComponent } from '../../components';

import './index.less';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}



App.contextTypes = {
	router: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
