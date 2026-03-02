import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/components/QueryProvider";


export const metadata: Metadata = {
  title: {
    default: "JAM Foundation",
    template: "%s · JAM Foundation",
  },
  description: "Restoring dignity and hope to vulnerable communities across Africa through education, nutrition, and economic empowerment.",
  openGraph: {
    siteName: "JAM Foundation",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}