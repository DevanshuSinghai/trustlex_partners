// src/pages/Contact.jsx


const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Get in Touch
        </h1>
        
        <div className="text-lg text-gray-700 space-y-6">
          <p>
            We're here to help you navigate your legal challenges with clarity and confidence. Whether you have a question, a business concern, or a personal matter, our team is ready to listen.
          </p>
          <p>
            Reach out to us anytime at:
          </p>
          <a
            href="mailto:advtejasvigoel@gmail.com"
            className="text-2xl font-semibold text-black hover:text-gray-700 transition-colors"
          >
            advtejasvigoel@gmail.com
          </a>
          
          {/* Placeholder for a future contact form */}
          {/* <form className="mt-12 text-left">
            // Form fields would go here
          </form> 
          */}
        </div>
      </div>
    </div>
  );
};

export default Contact;