import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from 'react-i18next';
import { ContactProps, ContactFormState } from '../types';

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const { t } = useTranslation();
  const [{ name, email, message }, setState] = useState<ContactFormState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = (): void => setState({ ...initialState });
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(name, email, message);
    
    // replace below with your own Service ID, Template ID and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target as HTMLFormElement, "YOUR_PUBLIC_KEY")
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
              <div className="mb-16 text-left">
                <h2>{t('contact.title')}</h2>
                <p>{t('contact.subtitle')}</p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    rows={6}
                    placeholder={t('contact.messagePlaceholder')}
                    required
                    onChange={handleChange}
                    value={message}
                  />
                </div>
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {t('contact.sendMessage')}
                </button>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.contactInfo')}</h3>
                
                <div className="flex items-center mb-4 text-gray-700">
                  <i className="fa fa-map-marker text-primary mr-3" />
                  <div>
                    <strong>{t('contact.addressLabel')}:</strong><br />
                    {t('contact.address')}
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700">
                  <i className="fa fa-phone text-primary mr-3" />
                  <div>
                    <strong>{t('contact.phoneLabel')}:</strong><br />
                    {t('contact.phone')}
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700">
                  <i className="fa fa-envelope-o text-primary mr-3" />
                  <div>
                    <strong>{t('contact.emailLabel')}:</strong><br />
                    {t('contact.email')}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href={data?.facebook || "/"} className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href={data?.twitter || "/"} className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href={data?.youtube || "/"} className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fa fa-youtube" />
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