import React from 'react';
import PropTypes from 'prop-types'
import { useFirestore } from 'react-redux-firebase'
import ReusableForm from './ReusableForm'


function CreateSurvey(props){
  const firestore = useFirestore();

  function addSurveyToFireStore(event){
    event.preventDefault();
   
    console.log(event.target.getElementsByClassName("question"))
    const questions =[];
    const test = event.target.getElementsByClassName("question")
    console.log(test.length)
    for(let i = 0 ; i < test.length ; i++ )
    {
      questions.push(test[i].value);
    }
    
     console.log(questions); 
    
   
    //this.props.onSurveyCreation();
    return firestore.collection('surveys').add(
      {
        Name:event.target.name.value,
        questions: questions

      }
        
    )
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addSurveyToFireStore}
        buttonText="Submit" />
    </React.Fragment>
  )
}

CreateSurvey.propTypes = {
  questions: PropTypes.array,
  onSurveyCreation:PropTypes.func
}
// const mapStateToProps = state => {
//   return{
//     questions: state.questions,
//   }
// }
export default  CreateSurvey;
