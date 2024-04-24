import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_KEY_URL || "http://localhost:3000"
  ),
  title: "Home - Bir",
  description: "Aplikasin Untuk Belajar Next.js",
  authors: [{ name: "Zubir", url: "http://localhost:3000" }],
  icons: {
    icon: "/icon.png",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Zubir
    </main>
  );
}
