import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'vCard - Furkan Berkay Çakmak',
  description: 'Personal vCard with contact information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // ☝️ This script prevent the FART effect.
                if (localStorage.getItem("theme") === null) {
                  document.documentElement.setAttribute("data-theme", "light");
                } else {
                  document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
