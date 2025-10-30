import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="mb-4">First React App</h1>
        <p>This is my first React app using Vite and Tailwind CSS!</p>

        <div className="mt-6">
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
