import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return (
      <div>
        Copyright 2018 © Hai Pham
      </div>
    );
  }
}

Footer.propTypes = {
  //
};

function mapStateToProps({ i18n }) {
  return {
    i18n
  };
}

export default connect(
  mapStateToProps
)(Footer);
