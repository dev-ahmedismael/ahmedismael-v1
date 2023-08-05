import { Inter } from "next/font/google";
import "@/Styles/main.css";
import Navbar from "@/components/navbar/Navbar";
import Theme from "@/Templates/Theme";
import Footer from "@/components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "@/store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Ismael | Web Developer",
  description: "Ahmed Ismael Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Theme>
            <Navbar />
            {children}
            <Footer />
          </Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
