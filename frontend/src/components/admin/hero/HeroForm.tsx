"use client";
import React, { useEffect, useState } from "react";
import type { Hero as HeroType } from "@/app/(admin)/admin/hero/page";

// http://localhost:7930/api
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type ResponseData = {
  message: string;
  success: boolean;
  error: boolean;
};

const HeroForm = ({ data }: { data: HeroType }) => {
  const [id, setId] = useState<number>(data.id);
  const [name, setName] = useState<string>(data.name);
  const [job, setJob] = useState<string>(data.job);
  const [email, setEmail] = useState<string>(data.email);
  const [freelancer, setFreelancer] = useState<string>(data.freelancer);
  const [website, setWebsite] = useState<string>(data.website);
  const [location, setLocation] = useState<string>(data.location);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/admin/hero/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          job,
          email,
          freelancer,
          website,
          location,
        }),
      });
      const data: ResponseData = await response.json();
      if (data.error) {
        return setErrorMessage(data.message);
      }
      return setSuccessMessage(data.message);
    } catch (error) {
      if (error instanceof Error) {
        return setErrorMessage(error.message);
      } else {
        return setErrorMessage("Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  return (
    <form onSubmit={handleSubmit} className="basis-1/4 flex flex-col items-start mx-auto gap-5">
      <input type="hidden" value={id} />
      {errorMessage.length > 0 && (
        <p className="w-full px-4 py-4 bg-red-500 text-red-900 rounded flex items-center justify-center">
          {errorMessage}
        </p>
      )}
      {successMessage.length > 0 && (
        <p className="w-full px-4 py-4 bg-green-500 text-green-900 rounded flex items-center justify-center">
          {successMessage}
        </p>
      )}
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="name">İsim</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-solid border-gray-400 rounded-sm px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="job">İş Tanımı</label>
        <input
          type="text"
          name="job"
          id="job"
          className="border border-solid border-gray-400 rounded-sm px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-500"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-solid border-gray-400 rounded-sm px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="freelancer">Çalışma Tipi / Zamanı</label>
        <input
          type="text"
          name="freelancer"
          id="freelancer"
          className="border border-solid border-gray-400 rounded-sm px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-500"
          value={freelancer}
          onChange={(e) => setFreelancer(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          id="website"
          className="border border-solid border-gray-400 rounded-sm px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-500"
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="city">Şehir</label>
        <select
          name="city"
          id="city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-solid border-gray-400 rounded-sm px-1 py-3 focus:outline focus:outline-1 focus:outline-gray-500"
        >
          <option value="İstanbul">İstanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="İzmir">İzmir</option>
          <option value="Adana">Adana</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Afyonkarahisar">Afyonkarahisar</option>
          <option value="Ağrı">Ağrı</option>
          <option value="Aksaray">Aksaray</option>
          <option value="Amasya">Amasya</option>
          <option value="Antalya">Antalya</option>
          <option value="Ardahan">Ardahan</option>
          <option value="Artvin">Artvin</option>
          <option value="Aydın">Aydın</option>
          <option value="Balıkesir">Balıkesir</option>
          <option value="Bartın">Bartın</option>
          <option value="Batman">Batman</option>
          <option value="Bayburt">Bayburt</option>
          <option value="Bilecik">Bilecik</option>
          <option value="Bingöl">Bingöl</option>
          <option value="Bitlis">Bitlis</option>
          <option value="Bolu">Bolu</option>
          <option value="Burdur">Burdur</option>
          <option value="Bursa">Bursa</option>
          <option value="Çanakkale">Çanakkale</option>
          <option value="Çankırı">Çankırı</option>
          <option value="Çorum">Çorum</option>
          <option value="Denizli">Denizli</option>
          <option value="Diyarbakır">Diyarbakır</option>
          <option value="Düzce">Düzce</option>
          <option value="Edirne">Edirne</option>
          <option value="Elazığ">Elazığ</option>
          <option value="Erzincan">Erzincan</option>
          <option value="Erzurum">Erzurum</option>
          <option value="Eskişehir">Eskişehir</option>
          <option value="Gaziantep">Gaziantep</option>
          <option value="Giresun">Giresun</option>
          <option value="Gümüşhane">Gümüşhane</option>
          <option value="Hakkâri">Hakkâri</option>
          <option value="Hatay">Hatay</option>
          <option value="Iğdır">Iğdır</option>
          <option value="Isparta">Isparta</option>
          <option value="Kahramanmaraş">Kahramanmaraş</option>
          <option value="Karabük">Karabük</option>
          <option value="Karaman">Karaman</option>
          <option value="Kars">Kars</option>
          <option value="Kastamonu">Kastamonu</option>
          <option value="Kayseri">Kayseri</option>
          <option value="Kırıkkale">Kırıkkale</option>
          <option value="Kırklareli">Kırklareli</option>
          <option value="Kırşehir">Kırşehir</option>
          <option value="Kilis">Kilis</option>
          <option value="Kocaeli">Kocaeli</option>
          <option value="Konya">Konya</option>
          <option value="Kütahya">Kütahya</option>
          <option value="Malatya">Malatya</option>
          <option value="Manisa">Manisa</option>
          <option value="Mardin">Mardin</option>
          <option value="Mersin">Mersin</option>
          <option value="Muğla">Muğla</option>
          <option value="Muş">Muş</option>
          <option value="Nevşehir">Nevşehir</option>
          <option value="Niğde">Niğde</option>
          <option value="Ordu">Ordu</option>
          <option value="Osmaniye">Osmaniye</option>
          <option value="Rize">Rize</option>
          <option value="Sakarya">Sakarya</option>
          <option value="Samsun">Samsun</option>
          <option value="Siirt">Siirt</option>
          <option value="Sinop">Sinop</option>
          <option value="Sivas">Sivas</option>
          <option value="Şırnak">Şırnak</option>
          <option value="Tekirdağ">Tekirdağ</option>
          <option value="Tokat">Tokat</option>
          <option value="Trabzon">Trabzon</option>
          <option value="Tunceli">Tunceli</option>
          <option value="Şanlıurfa">Şanlıurfa</option>
          <option value="Uşak">Uşak</option>
          <option value="Van">Van</option>
          <option value="Yalova">Yalova</option>
          <option value="Yozgat">Yozgat</option>
          <option value="Zonguldak">Zonguldak</option>
        </select>
      </div>
      <button className="px-4 py-2 rounded border-none outline-none bg-BG2 text-white self-end font-semibold hover:bg-BG1 cursor-pointer transition-all">
        Güncelle
      </button>
    </form>
  );
};

export default HeroForm;
