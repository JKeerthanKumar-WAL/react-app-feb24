import logo from './logo.svg';
import './App.css';
import RegistrationFormik from './RegistrationFormik';
import TodoApi from './TodoApi';

function App() {
  return (
    <div className='App'>
      <RegistrationFormik></RegistrationFormik>
      <TodoApi></TodoApi>
    </div>
  );
}

export default App;
