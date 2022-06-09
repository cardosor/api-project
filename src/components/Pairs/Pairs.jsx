import '../App/App.css';
import { useState } from 'react';


function Pairs({pair}) {


    return (
    <div className="Pairs">
    {
      pair.success ? 
        <h1>{pair.quotes[Object.keys(pair.quotes)[0]].toFixed(2)}</h1>
      :
        <h1>Failed to get to pair</h1>
    }
      {/* <label htmlFor="hiTeo">Exchange Amount: </label>
      <input type="number" min="0.1" step="0.1" value={exAmount} name="hiTeo" id="hiTeo" onChange={handleChange}/>
      <input type="number" value={total} readOnly/> */}
    </div>
    
  );
}

export default Pairs;