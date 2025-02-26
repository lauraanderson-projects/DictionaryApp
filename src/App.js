import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="footer">Coded by Laura Anderson</footer>
    </div>
  );
}

export default App;
