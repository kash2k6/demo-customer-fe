import React, { useState } from "react";

const FlightResults = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState({
    id: "",
    born_on: "",
    email: "",
    family_name: "",
    gender: "",
    given_name: "",
    phone_number: "",
  });

  const handleSelectClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const requestBody = {
      data: {
        type: "hold",
        selected_offers: ["<selected_offer_id>"], // Replace with actual offer ID
        passengers: [passengerDetails],
      },
    };

    try {
      const response = await fetch("/duffel-flights-create-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log("Order Response:", responseData);
      // Handle response data as needed
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      {/* Response items go in this container */}
      <ul>
        <li className="offer-item">
          <p className="operator-name">name</p>
          <div>
            <p className="departing-at">departing at</p>
            <p className="origin-name">origin name</p>
          </div>
          <p className="duration">duration</p>
          <div>
            <p className="arriving-at">arriving at</p>
            <p className="destination-name">destination name</p>
          </div>
          <div>
            <p className="total-amount">amount</p>
            <button className="select-button" onClick={handleSelectClick}>
              Select
            </button>
          </div>
        </li>
      </ul>
      {isModalOpen && (
        <div className="select-modal">
          <h3>Enter Passenger Details</h3>
          <input
            name="given_name"
            placeholder="Given Name"
            onChange={handleInputChange}
          />
          <input
            name="family_name"
            placeholder="Family Name"
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleInputChange}
          />
          <input
            name="born_on"
            type="date"
            placeholder="Date of Birth"
            onChange={handleInputChange}
          />
          <select name="gender" onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FlightResults;