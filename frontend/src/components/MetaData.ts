import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İsmail Keskin",
  description:
    "Merhaba! Ben İsmail Keskin. Bu sitede kişisel projelerim, profesyonel portföyüm ve yazılım dünyasındaki tecrübelerimle ilgili blog yazılarımı bulabilirsiniz. Web geliştirme, yeni teknolojiler ve yazılım çözümleri üzerine içeriklerimi keşfedin.",
  keywords: ["ismail keskin", "hismailkeskin", "portföy", "blog", "web geliştirme", "yazılım projeleri", "frontend", "backend"],
  authors: [{ name: "İsmail Keskin", url: "https://hismailkeskin.net" }],
  robots: "index, follow",
  openGraph: {
    title: "İsmail Keskin - Portföy ve Blog",
    description: "İsmail Keskin'in web geliştirme ve yazılım projelerini keşfedin. Blog yazılarıyla yazılım dünyasına dair tecrübelerini öğrenin.",
    url: "https://hismailkeskin.net",
  },
  icons: {
    icon: [{ rel: "icon", url: "/favicon.ico", sizes: "128x128" }],
  },
};
