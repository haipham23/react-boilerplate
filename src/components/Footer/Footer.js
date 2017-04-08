import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return (
      <nav className="pt-navbar pt-transparent">
        <div className="pt-navbar-group pt-align-right">
          Copyright 2017 © Hai Pham
        </div>
      </nav>
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
