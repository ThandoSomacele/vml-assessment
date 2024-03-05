import Image from 'next/image';
import Link from 'next/link';

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
      <div className='container hero-copy flex flex-col text-center gap-5'>
        <h1 className='text-3xl font-[700]'>Make remote work</h1>
        <p className='font-[500]'>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
          productivity soar.
        </p>
        {/* For the VML team - The "Link" component is the same as "a" tag but is better because it optimises links to be prepard on the server instead on fecthing on client side for perfomance reasons as the the quesions asked in the interview :) */}
        <Link className='' href=''>
          Learn More
        </Link>
      </div>
    </div>
  );
}
export default Hero;
