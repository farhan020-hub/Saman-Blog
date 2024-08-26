import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

function ContactUs() {
  const [state, handleSubmit] = useForm("mgegwqlq");
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(e);

    // After successful submission, reload the page
    window.location.reload();
  };
  
  return (
    <div>
      <hr className="hr1 d-flex ms-5 me-5" />

      <div>
        <section className="contact d-flex justify-content-center align-items-center flex-column">
          <div className="content rounded p-3 text-center">
            <h2>Contact Us</h2>
            <br />
            <p>
              Dr. Adan Saman is a distinguished figure in the field of
              education, bringing over two decades of expertise and innovation.
              His profound contributions to curriculum development, pedagogy,
              and educational consultancy have been pivotal in transforming
              educational systems globally.
            </p>
          </div>
          <div className="maincontainer  d-flex flex-column mt-4 w-100 align-items-center">
            <div className="contactInfo mb-4">
              <div className="box d-flex  rounded p-3 mb-3">
                <div className="icon d-flex  justify-content-center align-items-center">
                  <FiMapPin />
                </div>
                <div className="text  d-flex p-1 rounded flex-column ms-3">
                  <h3>Address</h3>
                  <p>
                    123/1,
                    <br />
                    Nairobi,
                    <br /> kenya.
                  </p>
                </div>
              </div>

              <div className="box d-flex  rounded p-3 mb-3 ">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FiPhoneCall />
                </div>
                <div className="text  rounded p-2 d-flex flex-column ms-3">
                  <h3>Phone</h3>
                  <p>0722724794</p>
                </div>
              </div>

              <div className="box d-flex  rounded p-3">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FiMail />
                </div>
                <div className="text  p-2 rounded d-flex flex-column ms-3">
                  <h3>Email</h3>
                  <p>adansaman@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contactForm rounded">
          <form onSubmit={handleFormSubmit} action="https://formspree.io/f/mgegwqlq" method="POST">
              <h2 className="text-center">Send Message</h2>
              <div className="inputBox mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="inputBox mt-2">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write Message"
                  autoComplete="off"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="button ">
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;