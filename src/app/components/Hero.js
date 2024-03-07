import Image from 'next/image';
import Link from 'next/link';
import ClientLogos from './ClientLogos';

function Hero() {
  return (
    <>      
    {/* For the VML team - The "Image" component is the same as "img" tag but is better because it optimises images on deployement */}
      <Image
        className='hero-image lg:hidden mx-auto md:mt-10'
        src='/home-images/image-hero-mobile.png'
        alt='Mobile hero image'
        height='750'
        width='564'
      />
    <div className='container lg:py-10 mt-10 lg:mt-0 text-almost_black flex flex-col items-center gap-10 lg:flex-row lg:items-end'>
      <div className='hero-copy flex flex-col items-center text-center lg:text-left lg:items-start gap-6 lg:gap-14 md:gap-10 md:text-lg'>
        <h1 className='text-3xl lg:text-7xl md:text-5xl font-[700] -mb-3'>Make remote&nbsp;work</h1>
        <p className='font-[500] text-medium_gray md:w-4/5'>
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
      <Image
        className='hero-image hidden lg:block'
        src='/home-images/image-hero-desktop.png'
        alt='Mobile hero image'
        height={1280 / 2}
        width={960 / 2}
      />
    </div>
    </>

  );
}
export default Hero;
