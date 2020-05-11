import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

export const Alert = ({ alerts }) =>
  alerts !== null &&
  alert.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {};

const mapStateToProps = (state) => ({
  alerts: propTypes.array.isRequired,
});

export default connect(mapStateToProps)(Alert);
