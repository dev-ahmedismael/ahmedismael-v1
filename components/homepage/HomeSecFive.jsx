"use client";
import ContactForm from "@/Templates/ContactForm";
import Section from "@/Templates/Section";
import SectionTitle from "@/Templates/SectionTitle";
import React from "react";

const HomeSecFive = () => {
  return (
    <Section isLightBg={true}>
      <SectionTitle text1={"Contact"} text2={"Me"} />
      <ContactForm />
    </Section>
  );
};

export default HomeSecFive;
