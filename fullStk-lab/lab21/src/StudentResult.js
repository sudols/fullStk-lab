/*
Q1 Create a function StudentResult in a file StudentResult.js. The function will read a Boolean variable using props and based on the Boolean true or false it will call these function components: StudentPassed(), StudentFailed(). 
In StudentPassed() return html with a string “Student has passed the exam” within <h1> tags and similarly for StudentFailed() 
 
Q2 Render the <StudentResult isPassed={true} /> by using ReactDom render method. See the web page output and similarly with isPassed={false} 
Q3 Use inline styling for a React html by giving style in this form: style={{color: "red"}} 
Q4 Use inline styling by making a mystyle variable with 4 css properties: color, backgroundcolor, font-size, font-family and use it in <h1> tag in this form: style={mystyle}. 
Q5 Create a test.css with a class tag named myclass and give above 4 properties. Import test.css in index.js and use myclass in <h1> tag in this form: className=”myclass”. See the effect on web page. 

*/

function StudentResult(props) {
    const css = {
        color: "red",
        backgroundColor: "green",
        fontSize: "1rem",
        fontFamily: "monospace",
    }
  function StudentPassed() {
    return <h1 style={{color: "red"}}>student passed exam</h1>;
  }

  function StudentFailed() {
    return <h1 style={css}>student failed</h1>;
  }

  if(props.passed){
    return <StudentPassed></StudentPassed>
  }
  return <StudentFailed></StudentFailed>
}

export default StudentResult;
