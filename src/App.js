import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-info m-3 p-4 border-dark border-bottom">
        first_division
      </div>
      <div className="bg-light m-3 p-4 border rounded">second_division</div>
      <div className="bg-light m-3 p-4 border border-danger border-top-0 rounded">
        third_division
      </div>
      <div className="text-danger bg-light m-3 p-4 border rounded shadow-lg">
        fourth_division
      </div>
    </div>
  );
}

export default App;
