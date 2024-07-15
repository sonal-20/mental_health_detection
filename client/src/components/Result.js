import React from 'react';
import './Result.css'; // Make sure to import your CSS file

const Result = () => {
  return (
    <div className="container">
      
      {/* <div className="content">
        <h2>Thank You!</h2> */}
        
      {/* </div> */}
      <div className="result">
      <h3>Result</h3>
        <p>As per your answers your mental health </p>
        <h5><b>Status:</b>High</h5>
        <h5><b>Consultation:</b> need to worry. Need of any consultation.</h5>
      </div> 
     </div>
  );
};

export default Result;
