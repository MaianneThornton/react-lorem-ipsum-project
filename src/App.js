import React, { useState } from 'react';
import data from './data';
function App() {
  // Variable for the amount of paragraphs (entered by user)
  const [count, setCount] = useState(0);
  // Variable for the array of text to be displayed
  const [text, setText] = useState([]);
  // variable that will display hello world in the console once the lorem form is submitted (error handling)
  const handleSubmit = 
  (e) => {
    e.preventDefault();
    console.log(`hello world!`);
  }
  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
      <button type="submit" className="btn">generate</button>
    </form>

  </section>
    )
}

export default App;
