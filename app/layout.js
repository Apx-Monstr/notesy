import { Poppins } from "next/font/google";
import "./globals.css";

const pop = Poppins({ subsets: ["latin"], weight : '400' });

export const metadata = {
  title: "Notesy",
  description: "Take Your Notes Easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  );
}
