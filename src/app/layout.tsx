import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Bienvenido a mi portafolio",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const themeCookie = await cookies();
  const theme = themeCookie.get("theme")?.value || "light"; // Leer tema desde cookies
  return (
    <html lang="es" className={theme === "dark" ? "dark" : ""}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
