import { useState } from 'react';
import type { FormEvent } from 'react';

import './Contact.css';

function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });

    if (response.ok) {
      form.reset();
      setSent(true);
    }
  }

  return (
    <section className="contact">
      <p className="contact__eyebrow">Contact</p>
      <h1 className="contact__title">Get in Touch</h1>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />

        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
        />

        <button type="submit">Send Message</button>

        {sent && <p className="contact__sent">Message sent!</p>}
      </form>
    </section>
  );
}

export default Contact;