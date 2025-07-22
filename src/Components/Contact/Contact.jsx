import React from 'react'
import './Contact.css'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ab5dfe52-5c35-4f3b-ac8b-2c49e20c5c14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send us a message</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quam dolore! Eaque, alias minus quaerat sed consequatur a corrupti distinctio labore perferendis consectetur, non dicta ratione quo consequuntur, neque maxime!</p>
        <ul>
            <li>Conact@fumi'skitchen.dev</li>
            <li>798253813X</li>
            <li>77 mas ave,camb <br/> ma 02139,united states</li>
        </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >your name</label>
            <input type="text" name='name' placeholder='enter your name' required />
            <label >your phone no</label>
            <input type="tel" name='phone' placeholder='enter your phone number' required />
            <label >write your message here</label>
            <textarea name="message" rows='6' placeholder='write your message' required></textarea>
            <button type='submit' className="btn dark-btn">submit now <img src={white_arrow} alt="" /></button>

          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact