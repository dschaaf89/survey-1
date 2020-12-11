import React from "react";
import PropTypes from "prop-types";

class ReusableForm extends React.Component {
  constructor(props) {
          super(props);
          this.state = { inputs: ['0'] };
      }
  render(){
    console.log(this.props)
    console.log(this.state)
    return (
      <React.Fragment>
        <form onSubmit={this.props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name of survey' />
          <div id="dynamicInput">
            {this.state.inputs.map(q => 
              <input
              className='question'
              type='text'
              name={'question'+  q}
              defaultValue= ''
              placeholder='' />
              )}
              <button onClick={ () => this.appendInput() } type='button'>
                 CLICK ME TO ADD AN INPUT
             </button>
          </div>
          
          <button type='submit'>{this.props.buttonText}</button>
        </form>
        
      </React.Fragment>
    );
  }

  appendInput() {
    var newInput = this.state.inputs.length  ;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    console.log('hhhhhhhhhhhhhhhh',this.state)
  }

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;



// class MultipleChoice extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { inputs: ['input-0'] };
//   }

//   render() {
//       return(
//           <div>
//              <Form>
//                  <div id="dynamicInput">
//                      {this.state.inputs.map(input => <FormInput key={input} />)}
//                  </div>
//              </Form>
//              <button onClick={ () => this.appendInput() }>
//                  CLICK ME TO ADD AN INPUT
//              </button>
//           </div>
//       );
//   }

//   appendInput() {
//       var newInput = `input-${this.state.inputs.length}`;
//       this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
//   }
// }