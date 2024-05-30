
import './App.css';
import background from './images/background.png'


function App() {
  return (
    <form>
     <img src={background} className='backgrounds' alt="backroung"/> 
    <h1 className='fillcontained'>Fill Out Form</h1>

<div className='FirstContain'>
  <h2>First Name:</h2>
  <input
    type="text"
    name="FirstName"
    className='FirstNameCl'
  />
</div>

<div className='SecondNameContained'>
  <h2>Last Name:</h2>
  <input
    type="text"
    name="LastName"
    className='LastNameCL'
  />
</div>

<div className='EmailContained'>
  <h2>Email Address:</h2>
  <input
    type="email"
    name="email"
    className='EmailCL'
  />
</div>

<div className='PhoneContained'>
  <h2>Phone:</h2>
  <input
    type="text"
    name="Phone"
    className='TelephoneCL'
  />
</div>

<div className='addcontained'>
  <h2>Additional Information:</h2>
  <textarea
    type="text"
    name="Details"
    className='AdditionalCl'
  />
</div>

<button type="submit" className='submitcontatined'><h2 className='subtext'>Submit</h2></button>
</form>
  );
}

export default App;
