import React from "react";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <>
      <section id="Contact">
        <div className="container">
          <h1 className="flick" data-text="CONTACT">
            CONTACT
          </h1>
        </div>

        <div className="container">
          <div className="grid contact_area">
            <div className="contact_info">
              <h3 className="satoshi">Get In Touch!</h3>
              <p className="satoshi">
                Feel free to leave me a message using the form, email me
                directly, or give a call using the provided information below.
              </p>
              <p className="satoshi">Thanks for stopping by!</p>

              <div className="contact_links">
                <a
                  href="https://goo.gl/maps/WE3nLqs7HnT1BTJ76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location"
                >
                  <Icon icon="akar-icons:location" />
                  <span className="satoshi">
                    &nbsp;&nbsp;&nbsp;Toronto, Ontario
                  </span>
                </a>

                <a
                  href="tel:+14379882856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tel"
                >
                  <Icon icon="carbon:phone" />
                  <span className="satoshi">
                    &nbsp;&nbsp;&nbsp;+1 (437) 988 2856
                  </span>
                </a>

                <a
                  href="mailto:jenishpatel4323@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mailto"
                >
                  <Icon icon="charm:mail" />
                  <span className="satoshi">
                    &nbsp;&nbsp;&nbsp;jenishpatel4323@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="contact_form">
              <form
                action="https://formsubmit.co/2f0890ba2851984b723da6ef0ec71619"
                method="POST"
                className="email_form"
              >
                <input
                  className="input satoshi"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  className="input satoshi"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  required
                />
                <textarea
                  className="input satoshi"
                  name="message"
                  id="message"
                  rows="11"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
                <input
                  className="satoshi"
                  type="hidden"
                  name="_autoresponse"
                  value="Your inquiry was successfully received. Thank you!"
                />
                <input
                  className="satoshi"
                  type="hidden"
                  name="_subject"
                  value="New Inquiry"
                />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_next" value="" />

                <div className="form_buttons">
                  <button type="reset" className="f_button satoshi">
                    CLEAR
                    <span></span>
                  </button>
                  <button type="submit" className="f_button satoshi">
                    SEND
                    <span></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="blur s-blur9" style={{ background: "#ABF1FF94" }}></div>
        <div
          className="blur s-blur10"
          style={{ background: "var(--purple)" }}
        ></div>
      </section>
    </>
  );
}

export default Contact;
