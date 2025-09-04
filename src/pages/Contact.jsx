import React from 'react';
import '../assets/css/Contact.css';

export default function Contact() {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="bi bi-house"></i> Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Category</a>
              </li>
              <li className="breadcrumb-item active current">Contact</li>
            </ol>
          </nav>
        </div>

        <div className="title-wrapper">
          <h1>Contact</h1>
          <p>
            Have questions, project ideas, or just want to connect? We’d love to
            hear from you. Reach out through the form below or use our contact
            details to get in touch with our team directly. We’re here to help
            you with consulting, development, marketing, and support services.
          </p>
        </div>
      </div>
      {/* End Page Title */}

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="form-wrapper"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your name*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email address*"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-phone"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone number*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-list"></i>
                        </span>
                        <select
                          name="subject"
                          className="form-control"
                          required
                        >
                          <option value="">Select service*</option>
                          <option value="Service 1">Consulting</option>
                          <option value="Service 2">Development</option>
                          <option value="Service 3">Marketing</option>
                          <option value="Service 4">Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group mt-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-chat-dots"></i>
                        </span>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="Write a message*"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit">Submit Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </main>
  );
}
