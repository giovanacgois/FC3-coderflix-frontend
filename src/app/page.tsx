import Image from 'next/image';
import Header from './components/header';

export default function Home() {
  return (
    <div className='relative h-screen lg:h-[140vh] overflow-hidden bg-gradient-to-b from-transparent to-black'>
      <Header/>
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen bg-black'>
            <Image
              src='/images/witcher.jpg'
              alt='The Witcher'
              fill={true}
              className='h-[65vh] object-cover object-top brightness-50 lg:h-[95vh]'
            />
          </div>

          <h1 className='text-2xl font-bold text-white md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>

          <p className='md-text-lg max-w-xs text-xs text-shadow-md md:max-w-lg lg:max-w-2xl'>
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>

        <div className='flex space-x-3'>
          <button className='px-g flex cursor-pointer items-center gap-x-2 rounded bg-white py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            Play
          </button>
          <button className='px-g flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            More info
          </button>
        </div>
      </main>
    </div>
  );
}
