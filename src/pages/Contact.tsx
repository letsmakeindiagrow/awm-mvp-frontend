import { useEffect } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          {/* Page header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-brand-light text-brand-primary mb-4 animate-fade-in">
              Contact Us
            </span>
            <h1
              className="text-4xl md:text-5xl font-medium text-brand-dark mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              We're Here to Help
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Reach out to us for personalized wealth management solutions
              tailored to your financial goals.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="w-full">
              <ContactInfo />
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map section */}
        <div
          className="mt-24 rounded-2xl overflow-hidden shadow-lg animate-fade-in h-[400px] md:h-[500px]"
          style={{ animationDelay: "0.6s" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57895.078641217405!2d81.7881538!3d25.4484257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad777d!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1654000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aadyanvi Wealth Management Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
