

export default function Contact() {
    return (
      <div id="body">
        <h2 className="common-heading">Feel Free to Contact us</h2>
  
        <div className="container">
          <div className="contact-wrapper">
            {/* Left side (iframe) */}
            <div className="left-side">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248834.36833490693!2d74.7812844020318!3d12.969483916589422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3557f8322286d%3A0x258a2e8d6d4b45b0!2sMangalore%20Institute%20of%20Technology%20and%20Engineering%2C%20MITE!5e0!3m2!1sen!2sin!4v1704865713929!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
  
            {/* Right side (form) */}
            <div className="right-side">
              <div className="contact-form">
                <form
                  action="https://formspree.io/f/mleqdege"
                  method="POST"
                  className="contact-inputs"
                >
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    required
                  />
  <br/>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                  <br/>
                  <input
                    type="tel"
                    name="phone_No"
                    placeholder="Phone No"
                    autoComplete="off"
                    required
                  />
  <br/>
                  <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Description"
                    autoComplete="off"
                    required
                  ></textarea>
  <br/>
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
  