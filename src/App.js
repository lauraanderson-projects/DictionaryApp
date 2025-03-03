import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyWord="hello" />
        </main>
      </div>
      <footer className="footer">
        This project was coded by{" "}
        <a href="https://github.com/lauraanderson-projects">Laura Anderson</a>{" "}
        and is on{" "}
        <a href="https://github.com/lauraanderson-projects/DictionaryApp">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://dictionary-app-reactjs-la.netlify.app/">Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
