import LenisProvider from "./components/LenisProvider";
import "./globals.css";

export const metadata = {
  title: "Triospire | Designing and Building Digital Products",
  description: "Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products designed with clarity, built for performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LenisProvider>
        <body>{children}</body>
      </LenisProvider>
    </html>
  );
}