"use client";
import React from "react";
import SolidButton from "../buttons/SolidButton";

type FormItem = {
  id: string;
  name: string;
  type: string;
  text: string;
  placeholder: string;
};

const ContactForm = () => {
  const formItems: FormItem[] = [
    { id: "name", name: "name", type: "text", text: "Adınız *", placeholder: "Adınızı Giriniz" },
    {
      id: "email",
      name: "email",
      type: "email",
      text: "Email Adresiniz *",
      placeholder: "Email Adresinizi Giriniz",
    },
    {
      id: "message",
      name: "message",
      type: "text",
      text: "Mesajınız *",
      placeholder: "Mesajınızı Giriniz",
    },
  ];

  const sendMessage = () => {
    console.log("send message");
  };
  return (
    <form className="w-full flex flex-col items-center px-6 md:px-16 xl:px-[400px] gap-16">
      <div className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-16 lx:gap-x-32 lg:gap-y-16">
        {formItems.map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            <label htmlFor={item.id} className="text-Brand1 para-u">
              {item.text}
            </label>
            <input
              {...item}
              className="border-t-0 border-l-0 border-r-0 border-b border-solid border-Brand2 outline-none py-2 bg-[#ffffff00] text-White para-u placeholder-White"
            />
          </div>
        ))}
      </div>
      <SolidButton
        bgColor="bg-Brand1"
        border={false}
        textColor="text-BG1"
        buttonText="Mesaj Gönder"
        buttonFc={sendMessage}
      />
    </form>
  );
};

export default ContactForm;
