import Image from 'next/image';
import Link from 'next/link';
import ClientLogos from './ClientLogos';

function Hero() {
  return (
    <div className='text-almost_black flex flex-col gap-10'>
      {/* For the VML team - The "Image" component is the same as "img" tag but is better because it optimises images on deployement */}
      <Image
        className='hero-image'
        src='/home-images/image-hero-mobile.png'
        alt='Mobile hero image'
        height='750'
        width='564'
      />
      <div className='container mx-auto hero-copy flex flex-col items-center text-center gap-6'>
        <h1 className='text-3xl font-[700] -mb-3'>Make remote work</h1>
        <p className='font-[500] text-medium_gray'>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
          productivity soar.
        </p>
        {/* For the VML team - The "Link" component is the same as "a" tag but is better because it optimises links to be prepard on the server instead on fecthing on client side for perfomance reasons as the the quesions asked in the interview :) */}
        <Link
          className='btn bg-almost_black text-almost_white px-5 py-3 w-max rounded-2xl lg:hover:bg-medium_gray transition-colors duration-300 mb-5'
          href='https://github.com/ThandoSomacele/vml-assessment'>
          Learn more
        </Link>
        <ClientLogos />
      </div>
    </div>
  );
}
export default Hero;
