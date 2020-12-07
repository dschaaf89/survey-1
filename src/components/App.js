import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import SurveyController from "./SurveyController";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <SurveyController />
      <Footer />
    </React.Fragment>
  );
}

export default App;