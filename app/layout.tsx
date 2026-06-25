import type { Metadata } from "next";
import "./globals.css";
import { DEFAULT_THEME } from "../lp-system/config/preferences";

// Using system font stack for maximum build stability and performance
const fontStack = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'";

export const metadata: Metadata = {
  title: "Fahrly",
  description: "Dispatch Software for Amazon DSPs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For static export, use default theme (theme switching handled client-side)
  const theme = DEFAULT_THEME;

  // Tailwind uses "dark" class on <html> for dark mode
  // Light mode = no class (empty string)
  const htmlClassName = theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={htmlClassName} data-theme={theme} style={{ scrollBehavior: 'smooth', fontFamily: fontStack }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Fahrly",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "50.00",
                "priceCurrency": "EUR"
              }
            })
          }}
        />
      </head>
      <body className="bg-bg-default text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
