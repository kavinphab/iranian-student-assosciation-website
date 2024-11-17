import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ISA@UCR",
  description: "",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} flex min-h-screen flex-col`}
        style={{ backgroundColor: "#FFEFD7" }}
      >
        <Navigation />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
