import { HeaderComponent } from "./components/molecules/Header";
import { inputData } from "./imputData";
function App() {
  return (
    <div className="App">
      <HeaderComponent props={inputData} />
    </div>
  );
}

export default App;
