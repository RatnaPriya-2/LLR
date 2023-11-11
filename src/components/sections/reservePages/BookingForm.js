import { useState } from "react";
import { Link } from "react-router-dom";

const ReservationForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }




  const validateForm = () => {
    if (fName === '') {
      return false;
    }
    if (lName === '') {
      return false;
    }

    if (email === '') {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Do something with the form data
  };

  
  return (
    <form className="reservation-form" onSubmit={handleSubmit}>

      <img  class="table" src={require('../../../assets/restaurant.jpg')} alt="Little Lemon restaurant cuisine"></img>

      <div class="reservation-details">
        
      <div class="details">
        <label htmlFor="fName">First Name</label>
        <input
        type="text"
        name="name"
        placeholder="First Name"
        minLength={2}
        maxLength={50}
        value={fName}
        onChange={(e) => setFName(e.target.value)}
        required
      />
      </div>

      <div class="details">
        <label htmlFor="lName">Last Name</label>
        <input
        type="text"
        name="name"
        placeholder="Last Name"
        minLength={2}
        maxLength={50}
        value={lName}
        onChange={(e) => setLName(e.target.value)}
        required
      />
      </div>
      <div class="details">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        minLength={4}
        maxLength={200}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      <div class="details">
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div class="details">
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div class="details">
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>
      <div class="details">
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div class="details">
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div  class="details">
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

     
      
      <Link className="action-button" to="/confirmation">
      <button class="submit-button" type="submit">Book a Table</button>
      </Link>
      </div>
    </form>
  );
};

export default ReservationForm;