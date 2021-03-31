import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there, Welcome to React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="/auth/google">Sign in with google</a>
      </header>
    </div>
  );
}

export default App;
