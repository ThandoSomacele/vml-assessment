import React from 'react';
import Image from 'next/image';

function ClientLogos() {
  const clientLogos = [
    { name: 'databiz', img: 'client-databiz.svg', width: '114', height: '20' },
    { name: 'audiophile', img: 'client-audiophile.svg', width: '73', height: '36' },
    { name: 'meet', img: 'client-meet.svg', width: '90', height: '20' },
    { name: 'maker', img: 'client-maker.svg', width: '83', height: '24' },
  ];

  return (
    <div className='client-logos flex gap-5 lg:mt-7 md:mt-4'>
      {clientLogos.map((client, i) => (
        <Image
          key={i}
          id={`${client.name}-logo`}
          className='client-logo w-[70px] md:w-[95px] h-[25px] md:h-[35px] object-contain'
          src={`/client-logos/${client.img}`}
          width={client.width}
          height={client.height}
          alt={`${client.name} client logo`}
        />
      ))}
    </div>
  );
}

export default ClientLogos;
