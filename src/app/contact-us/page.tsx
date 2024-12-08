import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroTitle from "@/components/hero-title";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar/navbar";
import SimpleCtaItems from "@/components/simple-cta-items";
import React from "react";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <Navbar />
      <HeroTitle subTitle="somethjing" title="Contact Us" />

      <Intro
        desc="For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!"
        title="Get In Touch With Us"
      />
      <ContactForm />
      <SimpleCtaItems
        Items={[
          {
            title: "Free Delivery",
            desc: "For all oders over $50, consectetur adipim scing elit.",
          },
          {
            title: "90 Days Return",
            desc: "If goods have problems, consectetur adipim scing elit.",
          },
          {
            title: "Secure Payment",
            desc: "If goods have problems, consectetur adipim scing elit.",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default ContactUs;
