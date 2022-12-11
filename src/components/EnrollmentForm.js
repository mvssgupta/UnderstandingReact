import React from 'react';



// Requirements for the admission form are:
// - Only people within the age limit of 18-65 can enroll for the monthly classes and they will
// be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
// every month and he can pay it any time of the month.
// - They can enroll any day but they will have to pay for the entire month. The monthly fee is
// 500/- Rs INR.
// - There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
// participants can choose any batch in a month and can move to any other batch next
// month. I.e. participants can shift from one batch to another in different months but in
// same month they need to be in same batch


export default class EnrollmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      batch: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Check if the user is within the age limit of 18-65
    if (this.state.age >= 18 && this.state.age <= 65) {
      // Calculate the fee for the selected batch
      const fee = 500;
      // Submit the form with the age, batch, and fee
      // ...
    } else {
      alert('Sorry, you must be between 18 and 65 years old to enroll.');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Batch:
          <select
            name="batch"
            value={this.state.batch}
            onChange={this.handleChange}
          >
            <option value="">Select a batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
