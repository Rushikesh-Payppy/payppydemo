import { Inter } from "next/font/google";
import "./globals.css";  
import CookieConsentComponent from "./cookieConsentComponent/CookieConsent";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Payppy.co",
  description: "Payppy.co",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="https://payppy.in/wp-content/uploads/2023/05/fav-icon-app1-150x150.png" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <body className={inter.className}>
      {/* <h1>Root Layout</h1> */}
        {children}
        
          <CookieConsentComponent/>
          {/* <LenisScroll/> */}
        </body>
    </html>
  );
}
