import React from "react";
import Container from "../../Components/Container/Container";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const ContactSec = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-gray-100 py-10 md:py-30 z-10 min-h-auto relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-15 items-start">
          {/* LEFT - FORM */}
          <div>
            {/* TITLE */}
            <PriTitle prititle="Contact Us" />

            <SubTitle
              subtitle={
                isMobile
                  ? [
                      <>
                        Contact our team for{" "}
                        <span className="text-green-500">solar solutions</span>
                      </>,
                    ]
                  : [
                      <>Contact our team</>,
                      <>
                        for{" "}
                        <span className="text-green-500">solar solutions</span>
                      </>,
                    ]
              }
            />

            {/* FORM */}
            <form className="space-y-6 max-w-2xl mt-5 md:mt-10">
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="James Kian"
                    className="w-full bg-gray-200 rounded-lg px-4 py-3 outline-none placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-gray-200 rounded-lg px-4 py-3 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Type a message...."
                  className="w-full bg-gray-200 rounded-lg px-4 py-4 outline-none placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <SecondaryButton content="Submit" className="bg-gray-300" />
              </div>
            </form>
          </div>

          {/* RIGHT - MAP */}
          <div className="rounded-lg overflow-hidden h-full">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Framer%20B.V.&z=15&output=embed"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSec;
