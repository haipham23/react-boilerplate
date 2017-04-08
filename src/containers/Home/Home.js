import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Page Title</h1>
            </Col>
          </Row>
        </Container>
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
