import './App.css';
import Pairs from '../Pairs/Pairs';

function App() {

  const handleChange = (event) => {
    console.log(event.target.select);
  }

  return (
    <div className="App">
      <form>
      <label htmlFor="pairs">Choose a pairs:</label>
        <select name="pairs" id="pairs" onChange={handleChange}>
          <option value="USDAUD">USD - AUD</option>
          <option value="AUDUSD">AUD - USD</option>
          <option value="EURGBP">EUR - GBP</option>
          <option value="USDAOA">USD - AOA</option>
        </select>
      </form>
      <Pairs />
    </div>
  );
}

export default App;
