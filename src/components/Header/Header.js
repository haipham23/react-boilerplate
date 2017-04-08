import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <nav className="pt-navbar pt-transparent">
        <div className="pt-navbar-group pt-align-left">
          <button className="pt-button pt-minimal pt-icon-home">Home</button>
          <span className="pt-navbar-divider" />
          <button className="pt-button pt-minimal pt-icon-info">About</button>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <button className="pt-button pt-minimal pt-icon-user" />
          <button className="pt-button pt-minimal pt-icon-notifications" />
          <button className="pt-button pt-minimal pt-icon-cog" />
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  //
};

function mapStateToProps({ i18n }) {
  return {
    i18n
  };
}

export default connect(
  mapStateToProps
)(Header);
