import './App.css';

function App() {
  return (
    <div className="container">
        <h1>Simulating Bananas...<span className="banana-text">1%</span></h1>
        <div className="loading-bar">
            <div className="progress"></div>
        </div>
        <img width="25%" src="./spinning_banana.gif" alt='A gif of a spinning wireframe banana.'/>
    </div>
  );
}

export default App;
