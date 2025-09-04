import React from 'react';

function Calculator() {
  return (
    <section className="calculator">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="left-image">
              <img src="assets/images/calculator-image.png" alt="Calculator" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-heading">
              <h6>Your Freedom</h6>
              <h4>Get a Financial Plan</h4>
            </div>
            <form id="calculate">
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" autoComplete="on" />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <label htmlFor="chooseOption" className="form-label">
                      Your Reason
                    </label>
                    <select name="Category" className="form-select" id="chooseOption">
                      <option defaultValue="">Choose an Option</option>
                      <option value="Online Banking">Online Banking</option>
                      <option value="Financial Control">Financial Control</option>
                      <option value="Yearly Profit">Yearly Profit</option>
                      <option value="Crypto Investment">Crypto Investment</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="orange-button">
                      Submit Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
