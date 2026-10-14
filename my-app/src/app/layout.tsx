import type { Metadata } from "next";
export const metadata: Metadata = { title: "Island Snow", description: "Island Snow home page recreated with React Bootstrap" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
