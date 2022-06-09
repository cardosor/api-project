import './App.css';
import Pairs from '../Pairs/Pairs';
import { useState } from 'react';
import axios from 'axios'; //Ajax requests

function App() {

  const [pair, setPair] = useState({});

  const [exAmount, setExAmount] = useState(1);
    const [total, setTotal] = useState(0);

    const handleChangeEx = (event) => {
      if(pair.success){
        setExAmount(event.target.value);
        const tempTotal = pair.quotes[Object.keys(pair.quotes)[0]].toFixed(2);
        tempTotal && setTotal((event.target.value*tempTotal).toFixed(2));
      }
    }

  const handleChange = async (event) => {
    const pairSelected = event.target.value;
    //const source = pairSelected.substring(0,3);
    const currency = pairSelected;//.substring(3,6);
    const URL = `https://api.apilayer.com/currency_data/live?source=usd&currencies=${currency}`;
    try{
      const response = await axios.get(URL, {
        headers: {
          apikey: "714zDRFAnCFCc96aMvF6g8l3fQVwHFFP"
        }
      })
      setPair(response.data);
      setExAmount(1);
      console.log(response.data);
      setTotal(response.data.quotes[Object.keys(response.data.quotes)[0]].toFixed(2))
    }catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 title">Jumbo Exchange</h1>
          <p class="lead">Returning big bucks for your money</p>
        </div>
      </div>

      <form>
      <label htmlFor="pairs">Convert USD to:</label>
        <select name="pairs" id="pairs" onChange={handleChange}>
          <option value="EUR">Euro</option>
          <option value="JPY">Japanese yen</option>
          <option value="GBP">Pound sterling</option>
          <option value="MYR">Malaysian ringgit</option>
          <option value="RON">Romanian leu</option>
        </select>
      </form>
      <Pairs pair={pair}/>
      <label htmlFor="hiTeo">Exchange Amount: </label>
      <input type="number" min="0.1" step="0.1" value={exAmount} name="hiTeo" id="hiTeo" onChange={handleChangeEx}/>
      <input type="number" value={total} readOnly/>
    </div>
  );
}

export default App;
