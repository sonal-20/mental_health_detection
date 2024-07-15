import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questions.css"; // Make sure to create a QuestionnaireComponent.css file for your styles

const QuestionnaireComponent = () => {
  const Navigate = useNavigate()

  const handleSubmit = () => {
    let totalMarks = 0;

    let ageValue = document.getElementById("age").value;
    if (ageValue === "option1") {
      totalMarks+=10;
    } else if (ageValue === "option2") {
      totalMarks+=7;
    } else {
      totalMarks+=5;
    }
    
    console.log("After Age:",totalMarks)

    let cgpaValue = document.getElementById("cgpa").value;
    if (cgpaValue === "option1") {
      totalMarks+=0;
    } else if (cgpaValue === "option2") {
      totalMarks+=5;
    } else {
      totalMarks+=10;
    }
    console.log("After cgpa:",totalMarks)

    let depressionFeelValue = document.getElementById("feel").value;
    if (depressionFeelValue === "option1") {
      totalMarks += 10;
    }
    console.log("After feel:",totalMarks)

    let anxietyValue = document.getElementById("anxiety").value;
    if (anxietyValue === "option1") {
      totalMarks += 10;
    }

    console.log("After anxiety:",totalMarks)

    let healthIssueValue = document.getElementById("health").value;
    if (healthIssueValue === "option1") {
      totalMarks += 10;
    }
    

    console.log("Total Marks:", totalMarks);

    if (totalMarks > 40) {
      Navigate("/result3");
    } else if (totalMarks > 20) {
      Navigate("/result2");
    } else {
      Navigate("/result");
    }
  };

  return (
    <div className="container2">
      {/* <nav>
        <div className="logo">
          <a href="#">Student Mental Health<span>Detection</span></a>
        </div>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="buttons">
          <a href="login3.html" className="login">Log in</a>
          <a href="registration.html" className="btn">Register</a>
        </div>
      </nav> */}
      <div className="content">
        <h2>Answer a Few Questions</h2>
        <p>
          Help us understand your mental health by answering the following
          questions:
        </p>
      </div>
      <div className="questionnaire">
        <div className="form">
          <label htmlFor="question1">Question 1: Choose your gender</label>
          <select id="question1" name="question1" required>
            <option value="option1">Male</option>
            <option value="option2">Female</option>
            <option value="option3">Other</option>
          </select>

          <label htmlFor="question2">Question 2: What is your Age</label>
          <select id="age" name="age" required>
            <option value="option1">0-15</option>
            <option value="option2">16-30</option>
            <option value="option3">31 and Above</option>
          </select>

          <label htmlFor="question3">
            Question 3: Select your course in which your studying
          </label>
          <select id="question1" name="question1" required>
            <option value="option1">Engineering</option>
            <option value="option2">BCS</option>
            <option value="option3">Diploma</option>
            <option value="option4">Other</option>
          </select>

          <label htmlFor="question4">
            Question 4: Current year of studying
          </label>
          <select id="question1" name="question1" required>
            <option value="option1">First</option>
            <option value="option2">Second</option>
            <option value="option3">Third</option>
            <option value="option3">Fourth</option>
          </select>

          <label htmlFor="question5">
            Question 5:what is your current CGPA?
          </label>
          <select id="cgpa" name="cgpa" required>
            <option value="option1">0 to 4</option>
            <option value="option2">4 to 7</option>
            <option value="option3">7 to 10</option>
          </select>

          <label htmlFor="question6">
            Question 6:What is your marital status?
          </label>
          <select id="question1" name="question1" required>
            <option value="option1">Yes</option>
            <option value="option2">No</option>
          </select>

          <label htmlFor="question7">
            Question 7: Do you feel depression ?
          </label>
          <select id="feel" name="feel" required>
            {/* <option value="option1" onClick={setDepressionFeel(true)}> */}
            <option value="option1">No</option>
            <option value="option2">Yes</option>
          </select>

          <label htmlFor="question8">Question 8: Do you have Anxiety ?</label>
          <select id="anxiety" name="anxiety" required>
            {/* <option value="option1" onClick={setAnxiety(true)}> */}
            <option value="option1">No</option>
            <option value="option2">Yes</option>
          </select>

          <label htmlFor="question9">
            Question 9: Do you have any health issue ?
          </label>
          <select id="health" name="health" required>
            {/* <option value="option1" onClick={setHealthIssue(true)}> */}
            <option value="option1">No</option>
            <option value="option2">Yes</option>
          </select>

          <label htmlFor="question10">Question 10: How is your current mood? </label>
          <select id="question1" name="question1" required>
            <option value="option1">Happy</option>
            <option value="option2">Sad</option>
          </select>

          {/* Repeat the above block for each question, adjusting the question number and select options */}

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireComponent;
