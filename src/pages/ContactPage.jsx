import React from "react";

const ContactPage = () => {
  return (
    <div className="">
      <div className=" container flex flex-col mx-auto py-8 max-w-xl">
        <div>
          <h2
            className="text-h2 font-bold text-center mb-6"
            id="feature-section"
          >
            Get answers to all your questions.
          </h2>
          <p className="text-h4 text-center text-second-text-color">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
        </div>
        <div className="flex justify-center my-8">
          <button className="btn-blue w-[272px] h-[52px] text-paragraph font-semibold">
            CONTACT OUR COMPANY
          </button>
        </div>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitterlogo.svg" className=" mx-5" />
          </a>
          <a
            href="https://www.facebook.com/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/facebooklogo.svg"
              
              className=" mx-5"
            />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagramlogo.svg"
              
              className=" mx-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedinlogo.svg"  className="mx-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;