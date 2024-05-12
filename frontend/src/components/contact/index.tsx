import ModuleTitle from "../moduleTitle";

const Contact = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="iletisim" className="w-full h-min bg-BG2">
      <main className="flex flex-col items-center gap-16 lg:gap-[102px] px-6 py-16 md:py-8 xl:py-16">
        <ModuleTitle
          isHome={true}
          title="İletişim"
          description="Şu anda freelance çalışmaya uygunum"
        />
        <div className="w-full flex flex-col items-center gap-16">{children}</div>
      </main>
    </section>
  );
};

export default Contact;
