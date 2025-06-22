import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { useTranslation } from 'react-i18next';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const { t } = useTranslation();
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    // replace below with your own Service ID, Template ID and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section id="contact" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-title text-left">
                <h2>{t('contact.title')}</h2>
                <p>{t('contact.subtitle')}</p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit} className="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder={t('contact.namePlaceholder')}
                      required
                      onChange={handleChange}
                      value={name}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder={t('contact.emailPlaceholder')}
                      required
                      onChange={handleChange}
                      value={email}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    id="message"
                    className="form-textarea"
                    rows="6"
                    placeholder={t('contact.messagePlaceholder')}
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  {t('contact.sendMessage')}
                </button>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.contactInfo')}</h3>
                
                <div className="contact-info-item">
                  <i className="fa fa-map-marker text-primary mr-3"></i>
                  <div>
                    <strong>{t('contact.addressLabel')}:</strong><br />
                    {t('contact.address')}
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className="fa fa-phone text-primary mr-3"></i>
                  <div>
                    <strong>{t('contact.phoneLabel')}:</strong><br />
                    {t('contact.phone')}
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className="fa fa-envelope-o text-primary mr-3"></i>
                  <div>
                    <strong>{t('contact.emailLabel')}:</strong><br />
                    {t('contact.email')}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href={props.data ? props.data.facebook : "/"} className="social-icon">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href={props.data ? props.data.twitter : "/"} className="social-icon">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href={props.data ? props.data.youtube : "/"} className="social-icon">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; 2024 Solutions N+1. Built with best practices and passion for excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};
