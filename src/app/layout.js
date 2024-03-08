import { Epilogue } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import SideBarNav from './components/SideBarNav';

const epilogue = Epilogue({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'VML Assessment',
  description: "Depending on this assessment, it's a Yeyi :) or Neyi :(",
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
