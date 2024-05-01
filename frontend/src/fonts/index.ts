import { Ubuntu, IBM_Plex_Mono} from "next/font/google";

export const ubuntuLight = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu-light',
  display: 'swap',
  weight: "300"
})
export const ubuntuReguler = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu-reguler',
  display: 'swap',
  weight: "400"
})
export const ubuntuMedium = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu-medium',
  display: 'swap',
  weight: "500"
})

export const plexMonoMedium = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plexMono-medium',
  display: 'swap',
  weight: "500"
})
export const plexMonoReguler = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plexMono-reguler',
  display: 'swap',
  weight: "400"
})