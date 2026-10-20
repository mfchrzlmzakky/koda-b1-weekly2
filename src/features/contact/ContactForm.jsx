import { useState } from "react";
import Button from "../../components/Button";
import FormField from "./FormField";
import { contactMethods, countries, technologies } from "../../utils/contact";

const inputClass = "w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-base leading-6 text-[#101828] placeholder:text-[#99A1AF] focus:border-[#111111] focus:outline-none";

const legendClass = "font-medium text-sm leading-5 text-[#364153]";

const STORAGE_KEY = "contactMessages";

function saveMessage(data) {
  try {
    const old = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const entry = {
      id: Date.now(),
      sentAt: new Date().toISOString(),
      ...data,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...old, entry]));
  } catch (error) {
    console.error("Gagal menyimpan pesan:", error);
  }
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      ...Object.fromEntries(formData),
      technologies: formData.getAll("technologies"),
    };
    saveMessage(data);

    setSent(true);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} onChange={() => sent && setSent(false)} className="grid gap-6">
      <h2 className="font-bold text-2xl leading-8 text-[#101828]">Send a Message</h2>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" required>
          <input id="name" name="name" type="text" required placeholder="Jordan Smith" className={inputClass} />
        </FormField>
        <FormField label="Email Address" htmlFor="email" required>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </FormField>
        <FormField label="Phone Number" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+1 (415) 555-0100" className={inputClass} />
        </FormField>
        <FormField label="Subject" htmlFor="subject" required>
          <input id="subject" name="subject" type="text" required placeholder="Project inquiry" className={inputClass} />
        </FormField>
      </div>
      <FormField label="Country" htmlFor="country">
        <select id="country" name="country" defaultValue="" className={inputClass}>
          <option value="">Select country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Message" htmlFor="message" required>
        <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project or what you need help with..." className={`${inputClass} resize-y`} />
      </FormField>
      <fieldset>
        <legend className={legendClass}>Preferred Contact Method</legend>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
          {contactMethods.map((method) => (
            <label key={method} className="flex cursor-pointer items-center gap-2 text-base leading-6 text-[#4A5565]">
              <input type="radio" name="contactMethod" value={method} defaultChecked={method === "Email"} className="size-5 accent-[#FF5F22]" />
              {method}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className={legendClass}>Technologies Interested In</legend>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
          {technologies.map((tech) => (
            <label key={tech} className="flex cursor-pointer items-center gap-2 text-base leading-6 text-[#4A5565]">
              <input type="checkbox" name="technologies" value={tech} className="size-5 accent-[#FF5F22]" />
              {tech}
            </label>
          ))}
        </div>
      </fieldset>
      {sent && (
        <p role="status" className="rounded-lg border border-[#B9F8CF] bg-[#F0FDF4] px-4 py-3 text-sm leading-5 text-[#016630]">
          Thanks! Your message has been received. I'll get back to you within 24 hours.
        </p>
      )}
      <div className="flex flex-col items-start gap-4 md:flex-row">
        <Button type="submit">Send Message</Button>
        <button type="reset" className="inline-block rounded-lg border border-[#E5E7EB] bg-white py-3.5 px-7 font-semibold text-base leading-6 text-[#364153] transition-colors hover:bg-[#F9FAFB]">
          Reset Form
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
