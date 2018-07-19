import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Title</h1>
      </div>
    );
  }
}

Home.propTypes = {
  //
};

function mapStateToProps({ i18n }) {
  return {
    i18n
  };
}

export default connect(
  mapStateToProps
)(Home);
