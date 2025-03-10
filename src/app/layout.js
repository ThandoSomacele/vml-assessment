import { Epilogue } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import SideBarNav from './components/SideBarNav';

const epilogue = Epilogue({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'span psuedo',
  description: "span to earn more...",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={epilogue.className}>
        <SideBarNav />
        <Header />
        {children}
      </body>
    </html>
  );
}
