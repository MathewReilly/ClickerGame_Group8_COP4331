import { useState, useEffect } from 'react';
import flower from './Images/Flower.png';
import './App.css';

const runExampleRequest = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}

const App = () => {

  const [responseData, setResponseData] = useState(undefined);

  useEffect(() => {
    runExampleRequest()
      .then(response => setResponseData(response.express))
      .catch(err => console.log(err));

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={flower} className="App-logo" alt="flower" width="600" height="600"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          Test backend communication:
          <div>
            {responseData}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
