import { Poppins, Montserrat } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat", // Define the CSS variable
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] // Include all weights you need
});
