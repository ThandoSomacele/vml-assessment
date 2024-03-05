import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  const clientLogos = [
    { name: 'databiz', img: 'client-databiz.svg', width: '114', height: '20' },
    { name: 'audiophile', img: 'client-audiophile.svg', width: '73', height: '36' },
    { name: 'meet', img: 'client-meet.svg', width: '90', height: '20' },
    { name: 'maker', img: 'client-maker.svg', width: '83', height: '24' },
  ];

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
      <div className='container hero-copy flex flex-col items-center text-center gap-6'>
        <h1 className='text-3xl font-[700] -mb-3'>Make remote work</h1>
        <p className='font-[500]'>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
          productivity soar.
        </p>
        {/* For the VML team - The "Link" component is the same as "a" tag but is better because it optimises links to be prepard on the server instead on fecthing on client side for perfomance reasons as the the quesions asked in the interview :) */}
        <Link
          className='btn bg-almost_black text-almost_white px-5 py-3 w-max rounded-2xl lg:hover:bg-medium_gray transition-colors duration-300 mb-5'
          href='https://github.com/ThandoSomacele/vml-assessment'>
          Learn more
        </Link>
        <div className='client-logos flex gap-5'>
          {clientLogos.map((client, i) => (
            <Image
              key={i}
              id={`${client.name}-logo`}
              className='client-logo w-[80px] h-[28px] object-contain'
              src={`/client-logos/${client.img}`}
              width={client.width}
              height={client.height}
              alt={`${client.name} client logo`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Hero;
