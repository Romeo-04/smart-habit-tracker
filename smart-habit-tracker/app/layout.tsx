import "./globals.css";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Container from "./_components/Container";
import LightRays from "@/components/LightRays";
import Particles from "@/components/Particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});

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
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <body className={`min-h-full`}>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-left"
            raysColor="#ffffff"
            raysSpeed={1.0}
            lightSpread={1.0}
            rayLength={1.7}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
