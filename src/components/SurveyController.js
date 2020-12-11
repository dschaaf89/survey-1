import React from 'react';
import CreateSurvey from './CreateSurvey';
//import { connect } from 'react-redux';
// import * as a from './../actions';
//import PropTypes from "prop-types";
import { withFirestore } from 'react-redux-firebase'


class SurveyController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render()
  {
    return (
      <CreateSurvey />
    );
  }
}
export default withFirestore(SurveyController);
