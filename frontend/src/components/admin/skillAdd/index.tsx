"use client";
import React from "react";

const SkillAdd = () => {
  return (
    <>
      <main className="w-full px-6 flex flex-col gap-5 shadow-md py-8">
        <h1 className="w-full flex items-center justify-center text-4xl">Yetenek Ekle</h1>
        <form method="POST" encType="multipart/form-data" className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="font-semibold">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 border-gray-400 focus:outline-gray-500"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="image" className="font-semibold">
              Resim Yükle
            </label>
            <input type="file" name="image" id="image" />
          </div>
        </form>
      </main>
    </>
  );
};

export default SkillAdd;
