import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <WelcomePage 
        courseName="Fullstack Development - 1"
        exerciseName="React JS Programming Week 09 Lab exercise"
        studentId="101342857"
        name="Rodrigo Elustondo"
        college="George Brown College, Toronto"
      />
    </div>
  );
}

export default App;
