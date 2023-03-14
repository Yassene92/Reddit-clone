import '../styles/global.css';
import localFont from '@next/font/local';
import clsx from 'clsx';
import Navbar from '@/components/Navbar/Navbar';
import RecoilProvider from '../util/providers';

const openSans = localFont({
  src: '../public/fonts/OpenSans-Regular.ttf',
  variable: '--font-Open',
  display: 'swap',
});

export const metadata = {
  title: 'Reddit Clone',
  description: 'clone of Reddit by Next js and tailwind',
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(`font-OpenSans bg-gray-200  `, openSans.variable)}
    >
      <body>
        <RecoilProvider>
          <Navbar />
          {children}
        </RecoilProvider>
      </body>
    </html>
  );
}
