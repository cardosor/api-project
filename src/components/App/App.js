import './App.css';
import Pairs from '../Pairs/Pairs';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [pair, setPair] = useState({});

  const handleChange = async (event) => {
    console.log(event.target.value);
    const URL = "https://api.apilayer.com/currency_data/live?source=usd&currencies=EUR";
    try{
      //const response = await fetch(baseURL+apikey+query+movieTitle);
      //const data = await response.json();
      const response = await axios.get(URL, {
        headers: {
          apikey: "MISdtjtqxEPsuhsBPFhFMb8DHOmq1H32"
        }
      })
      console.log(response.data);
      setPair(response.data);
    }catch (e) {
      console.log(e);
    }

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
