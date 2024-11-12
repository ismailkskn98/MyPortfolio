import ModuleTitle from "../moduleTitle";

const Contact = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="iletisim" className="fluid container-fluid bg-BG2">
      <main className="flex flex-col items-center gap-12 py-8">
        <ModuleTitle isHome={true} title="İletişim" description="Şu anda freelance çalışmaya uygunum" />
        <div className="w-full flex flex-col items-center gap-16">{children}</div>
      </main>
    </section>
  );
};

export default Contact;
