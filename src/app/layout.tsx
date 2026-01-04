import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ARUMA Multi-Speciality Pet Hospital | 24×7 Veterinary Care in Kozhikode",
  description:
    "ARUMA Multi-Speciality Pet Hospital - Kerala's trusted women-owned 24×7 veterinary hospital in Kozhikode. Emergency care, grooming, surgery, and comprehensive pet healthcare services.",
  keywords:
    "pet hospital Kozhikode, veterinary hospital Kerala, 24×7 emergency pet care, pet grooming Kozhikode, animal hospital Calicut, veterinary clinic Kerala, pet surgery, pet healthcare",
  openGraph: {
    title: "ARUMA Multi-Speciality Pet Hospital - 24×7 Veterinary Care",
    description:
      "Compassionate veterinary care for your beloved pets. Open 24 hours with experienced doctors and modern facilities.",
    type: "website",
    locale: "en_IN",
    siteName: "ARUMA Pet Hospital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
