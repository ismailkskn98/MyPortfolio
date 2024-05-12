"use client";
import React from "react";
import ModuleTitle from "../moduleTitle";
import SolidButton from "../buttons/SolidButton";

const Contact = () => {
  const sendMessage = () => {
    console.log("send message");
  };

  return (
    <section id="iletisim" className="w-full h-min bg-BG2">
      <main className="flex flex-col items-center gap-16 lg:gap-[102px] px-6 py-16 md:py-8 xl:py-16">
        <ModuleTitle
          isHome={true}
          title="İletişim"
          description="Şu anda freelance çalışmaya uygunum"
        />
        <div className="w-full flex flex-col items-center gap-16">
          <div
            id="formTitle"
            className="border-4 border-solid border-Brand1 rounded-tl-[40px] rounded-br-[40px] px-10 py-4 text-Brand1 w-min h-min"
          >
            <h2 className="menu-m lg:logo-m whitespace-nowrap">Bana Mesaj Gönder</h2>
          </div>
          <form className="w-full flex flex-col items-center px-6 md:px-16 xl:px-[400px] gap-16">
            <div className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-16 lx:gap-x-32 lg:gap-y-16">
              <div className="flex flex-col gap-6">
                <label htmlFor="name" className="text-Brand1 para-u">
                  Adınız *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-t-0 border-l-0 border-r-0 border-b border-solid border-Brand2 outline-none py-2 bg-[#ffffff00] text-White para-u placeholder-White"
                  placeholder="Adınızı Giriniz"
                />
              </div>
              <div className="flex flex-col gap-6">
                <label htmlFor="email" className="text-Brand1 para-u">
                  Email Adresiniz *
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border-t-0 border-l-0 border-r-0 border-b border-solid border-Brand2 outline-none py-2 bg-[#ffffff00] text-Whit para-u placeholder-White"
                  placeholder="Email Adresinizi Giriniz"
                />
              </div>
              <div className="flex flex-col gap-6">
                <label htmlFor="message" className="text-Brand1 para-u">
                  Mesajınız *
                </label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  className="border-t-0 border-l-0 border-r-0 border-b border-solid border-Brand2 outline-none py-2 bg-[#ffffff00] text-White para-u placeholder-White"
                  placeholder="Mesajınızı Giriniz"
                />
              </div>
            </div>
            <SolidButton
              bgColor="bg-Brand1"
              border={false}
              textColor="text-BG1"
              buttonText="Mesaj Gönder"
              buttonFc={sendMessage}
            />
          </form>
        </div>
      </main>
    </section>
  );
};

export default Contact;
