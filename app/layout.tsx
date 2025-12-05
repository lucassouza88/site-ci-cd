import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu Site CI/CD",
  description: "Projeto para demonstrar pipeline com GitHub Actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
