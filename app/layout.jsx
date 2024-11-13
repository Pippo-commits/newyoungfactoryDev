import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://use.typekit.net/bjk3fhc.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
