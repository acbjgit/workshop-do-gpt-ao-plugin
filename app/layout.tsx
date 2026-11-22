import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Do GPT ao Plugin | Bessa Web Design', description: 'Workshop ao vivo para aprender a criar um plugin com funcionalidades semelhantes às de um GPT personalizado.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
