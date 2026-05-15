import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSense – Track Team Mood from Daily Standups",
  description:
    "Analyze Slack standup messages for sentiment patterns, burnout signals, and team morale trends. Built for engineering managers and team leads."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="7669176f-293c-462c-be4c-93eedda0338c"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
