import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// RestaurantBookingForm component
const ReservationForm = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState(""); // Default to an empty string
  const [seatingPreference, setSeatingPreference] = useState(""); // Default to an empty string
  const [comments, setComments] = useState("");

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // History for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (!firstName.trim())
      validationErrors.firstName = "First Name is required !";
    if (!lastName.trim()) validationErrors.lastName = "Last Name is required !";
    if (!email.trim()) validationErrors.email = "Email is required !";
    if (!date.trim()) validationErrors.date = "Date is required !";
    if (!time.trim()) validationErrors.time = "Time is required !";
    if (!numberOfGuests.trim())
      validationErrors.numberOfGuests = "Number of Guests is required !";
    if (!occasion.trim()) validationErrors.occasion = "Occasion is required !";
    if (!seatingPreference.trim())
      validationErrors.seatingPreference = "Seating Preference is required !";

    // If there are validation errors, set them in the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, clear any previous errors
    setErrors({});

    // Perform booking logic (you can replace this with your actual booking logic)

    // Redirect to confirmation page
    navigate("/confirmation");
  };

  return (
    <div class="details">
      <form className="reservation-form" onSubmit={handleSubmit}>
        <img
          class="table"
          src={require("../../../assets/restaurant.jpg")}
          alt="Little Lemon restaurant cuisine"
        ></img>

        <div class="reservation-details">
          <div class="details">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.firstName}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.lastName}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.email}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.date}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            {errors.time && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.time}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="numberOfGuests">Number of Guests:</label>
            <input
              type="number"
              id="numberOfGuests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
            {errors.numberOfGuests && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.numberOfGuests}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select an Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="marriage anniversary">Marriage Anniversary</option>
              <option value="office meeting">Office Meeting</option>
              <option value="casual">Casual</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other</option>
            </select>
            {errors.occasion && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.occasion}
              </p>
            )}
          </div>

          <div class="details">
            <label htmlFor="seatingPreference">Seating Preference:</label>
            <select
              id="seatingPreference"
              value={seatingPreference}
              onChange={(e) => setSeatingPreference(e.target.value)}
            >
              <option value="">Select a Seating Preference</option>
              <option value="none">None</option>
              <option value="outdoor-patio">Outdoor (Patio)</option>
              <option value="outdoor-sidewalk">Outdoor (Sidewalk)</option>
              <option value="indoors">Indoors</option>
            </select>
            {errors.seatingPreference && (
              <p style={{ marginTop: 0, marginBottom: "20px", color: "red" }}>
                {" "}
                {errors.seatingPreference}
              </p>
            )}
          </div>

          <div class="details">
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

          <button class="submit-button" type="submit">
            Book a Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
