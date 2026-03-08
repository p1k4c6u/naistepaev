import './globals.css';

export const metadata = {
  title: "Happy Women's Day 🌸",
  description: "An interactive virtual flower bouquet for Women's Day — March 8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
