import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little List — A little focus, a lot of possibility",
  description: "A calm space for your everyday tasks. Plan, organize, and celebrate the little things with Little List.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[#eaf0eb] font-[Arial,Helvetica,sans-serif] text-[#213d35] flex justify-center min-h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
 
