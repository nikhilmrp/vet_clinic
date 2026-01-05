import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "CL-name Multi-Speciality Pet Hospital | 24×7 Veterinary Care in dt-name",
  description:
    "CL-name Multi-Speciality Pet Hospital - Kerala's trusted  24×7 veterinary hospital in dt-name. Emergency care, grooming, surgery, and comprehensive pet healthcare services.",
  keywords:
    "pet hospital dt-name, veterinary hospital Kerala, 24×7 emergency pet care, pet grooming dt-name, animal hospital Calicut, veterinary clinic Kerala, pet surgery, pet healthcare",
  openGraph: {
    title: "CL-name Multi-Speciality Pet Hospital - 24×7 Veterinary Care",
    description:
      "Compassionate veterinary care for your beloved pets. Open 24 hours with experienced doctors and modern facilities.",
    type: "website",
    locale: "en_IN",
    siteName: "CL-name Pet Hospital",
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
