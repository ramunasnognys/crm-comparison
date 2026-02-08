import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffshoreMate vs Salesforce, HubSpot & Zoho CRM | CRM Comparison",
  description: "Compare OffshoreMate with Salesforce, HubSpot, and Zoho CRM. See why growing teams choose OffshoreMate for simplicity, value, and offshore team management.",
  keywords: "CRM comparison, OffshoreMate, Salesforce alternative, HubSpot alternative, Zoho CRM alternative, offshore team management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
