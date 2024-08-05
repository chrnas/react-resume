import React, {useState} from "react";
import "./ContactForm.css";
import data from "../../data/contactInfo.json";

const ContactForm: React.FC = () =>{
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = `${formData.message}\n\n Kind regards,\n${formData.name}`;
        window.location.href = `mailto:${data.contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="list-text-bold" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="list-text-bold" htmlFor="subject">Subject</label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="list-text-bold" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-button" type="submit">Mail</button>
        </form>
    );
};

export default ContactForm;