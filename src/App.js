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
    console.log(typeof count);
    // turns the string returned from the count into a number (error handling).
    let amount = parseInt(count);
    console.log(amount);

    // Displays the amount of paragraphs as selected by user (in the form).
    setText(data.slice(0,amount))
  }
  return (
    // Title
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>

    {/* Form */}
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
      <button type="submit" className="btn">generate</button>
    </form>

    {/* Text */}
    <article className="lorem-text">
      {/* Iterating over the data.js array and displaying every item in the array in paragraphs */}
      {text.map((item,index) => {
        return <p key={index}>{item}</p>
      })}
      

    </article>
  </section>
    )
}

export default App;
