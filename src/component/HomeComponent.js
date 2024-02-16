import Image from 'next/image';
import Link from 'next/link';
const HomeComponent = () => {
  const downloadFileName = 'tawheednewCV.pdf';
  return (
    <div className='bg-[#081b29] flex flex-col items-center justify-center gap-8 w-full'>
      <div className='flex flex-col justify-center lg:flex-row lg:justify-center items-center lg:px-32 px-5 gap-5 mt-20 lg:mt-20'>
        <div className='w-full lg:w-2/4 space-y-4'>
          <h1 className="text-lg font-bold mb-2 text-[#ededed]">Hello There, I'm</h1>
          <h1 className="text-4xl font-bold mb-4 text-[#00abf0]">
            Tawheed Khan
          </h1>
          <p className="text-lg mb-2 font-semibold text-[#ededed]">
            Frontend Developer
          </p>
          <p className="text-sm text-[#ededed]">
            Dedicated frontend developer with a passion for building intuitive and visually appealing user interfaces.
            Proficient in modern web technologies, I bring creativity and attention to detail to every project.
          </p>
          <div className="flex flex-col lg:flex-row gap-2">
            <Link
              href={'/tawheednewCV.pdf'}
              download={downloadFileName}
              className="bg-sky-500 text-white py-2 px-4 rounded-full text-center font-semibold text-lg transition duration-300 hover:bg-[#081b29] hover:text-[#00abf0]"
            >
              Download CV
            </Link>
            <Link href="/#contact" className="bg-[#081b29] text-[#ededed]  text-center mt-2 lg:mt-0 py-2 px-4 rounded-full font-semibold text-lg border-2 border-sky-500 transition duration-300 hover:bg-white hover:text-[#081b29]">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative mt-5 lg:mt-0">
          <Image src='/image/heroimage.png' height={350} width={300} className='my-photo-animation' alt='my photo'/>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 border-2 border-sky-500 rounded-xl shadow-md bg-white w-full mt-5 md:w-3/4 lg:w-2/3 xl:w-1/2 lg:mx-auto lg:mb-10 mx-5">
        <h4 className='text-sky-950 font-bold mr-2'>Tech <span className='border-r-2 border-white md:border-sky-500 inline-block pr-2 '>Stack</span></h4>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Image src='/image/html.jpg' height={30} width={30} className="mx-2 my-2" alt="logo"/>
          <Image src='/image/css.jpg' height={30} width={30} className="mx-2 my-2"alt="logo" />
          <Image src='/image/javascript-logo.webp' height={40} width={35} className="mx-2 my-2"alt="logo" />
          <Image src='/image/cover.jpg' height={30} width={30} className="mx-2 my-2" />
          <Image src='/image/next.jpg' height={50} width={40} className="mx-2 my-2" alt="logo"/>
          <Image src='/image/vue.jpg' height={30} width={30} className="mx-2 my-2" alt="logo"/>
          <Image src='/image/tailwind.jpg' height={35} width={30} className="mx-2 my-2" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

