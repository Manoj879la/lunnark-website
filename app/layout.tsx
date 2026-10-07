import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:"LunnArk — Leading LED Manufacturer in Bangalore",
  description:"LunnArk offers cutting-edge integrated LED lighting solutions distinguished by exceptional design and benchmark luminaire standards."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}