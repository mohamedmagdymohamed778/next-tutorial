import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/component/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="container">
        <Header />
      
        {children}
        <footer className="bg-light text-center p-3 mt-3">
          <p>In the name of Allah, the Most Gracious, the Most Merciful</p>
        </footer>
      
    </div>
      </body>
    </html>

    
  );
}
