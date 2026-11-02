import localFont from "next/font/local";

export const monumentGrotesk = localFont({
  src: "./public/sites/klimtwine/fonts/ABCMonumentGrotesk-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-body",
  display: "swap",
  fallback: ["Arial", "ui-sans-serif", "system-ui", "sans-serif"],
});

export const canela = localFont({
  src: "./public/sites/klimtwine/fonts/Canela-Thin.woff2",
  weight: "100",
  style: "normal",
  variable: "--font-heading",
  display: "swap",
  fallback: ["Times New Roman", "ui-serif", "Georgia", "serif"],
});
