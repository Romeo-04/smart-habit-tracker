import "./globals.css";
import type { Metadata } from "next";
import Container from "./_components/Container";

export const metadata: Metadata = {
  title: "Smart Habit Tracker",
  description: "Next 16 : React 19 : Tailwind v4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
