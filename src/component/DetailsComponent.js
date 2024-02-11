import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

const DetailsComponent = (props) => {
  return (
    <div className='py-20 px-5 min-h-screen'>
      {/* Back to home link */}
      <Link href='/' className='flex flex-row mb-5 font-medium text-sky-500 mx-auto'>
        <IoIosArrowBack size={20} className='pt-1'/> Back to home
      </Link>

      <div className='flex flex-col items-center justify-center'>
        {/* Left side with image */}
        <div className='mb-6'>
          <Image
            src={props.imgsrc}
            alt='image'
            width={800}
            height={600}
            className='object-cover rounded-lg'
          />
        </div>

        {/* Right side with content */}
        <div className='flex flex-col md:w-[800px] w-full'>
          <h2 className='text-3xl font-bold mb-4'>{props.title}</h2>
          <p className='text-gray-600 mb-4'>{props.description}</p>

          {/* Link buttons */}
          <div className='flex flex-row lg:gap-4 gap-1'>
            <Link href={`${props.code}`} className=''>
            <button className='bg-sky-500 rounded-lg text-black py-2 px-4 font-semibold'>Code</button>
            </Link>
            <Link href={`${props.live}`} >
            <button className='bg-sky-500 rounded-lg text-black py-2 px-4 font-semibold'>Live</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
