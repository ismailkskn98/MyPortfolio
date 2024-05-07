import React from "react";

const AboutText = () => {
  return (
    <div id="aboutText" className="flex flex-col gap-4 px-6 sm:px-10 py-6 bg-BG1 rounded-[40px]">
      <p className="code-m text-Brand2">{"<p>"}</p>
      <p className="block logo-m text-Brand1">Selam!</p>
      <p className="text-White para-m">
        Ben İsmail. Web geliştirme konusunda uzmanım ve
        <span className="text-Brand1"> HTML, CSS, JS</span> ve
        <span className="text-Brand1"> REACT</span> gibi teknolojilerle çalışıyorum.
      </p>
      <p className="text-White para-m">
        Kodları<span className="text-Brand1"> net</span> ve
        <span className="text-Brand1"> temiz</span> olacak şekilde yazmaya özen gösteren biriyim.
      </p>
      <p className="text-White para-m">
        Yaptığım işe büyük bir motivasyonla yaklaşırım ve pozitif düşünen biriyim. Her zaman
        öğrenmeye ve kendimi geliştirmeye açığım.
      </p>
      <p className="text-White para-m">
        Kod yazmadığım zamanlar
        <span className="text-Brand1"> blog yazıyorum</span>,
        <span className="text-Brand1"> blog okuyorum</span> ya da oyun oynuyorum. Bakış açımı
        sorgulamaktan hoşlanırım; bu sayede dünyayı farklı bir şekilde görebilirim.
      </p>
      <p className="code-m text-Brand2">{"</p>"}</p>
    </div>
  );
};

export default AboutText;
