import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChattakhupK NextJS",
  description: "NextJS Basic Tutorial",
  keywords: "ChattakhupK, Vat, Thailand, Nextjs",
};

const layout = ({ children }: { chlidren: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default layout;
