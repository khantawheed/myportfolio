import Image from 'next/image';
import Link from 'next/link';
import { GrCode } from "react-icons/gr";
import { RiLiveLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import PropTypes from 'prop-types';
const ProjectCard = (props) => {
  return (
    <div className='w-full lg:w-1/3 md:w-1/3 p-3 relative'>
      <div className='border-2 p-3 group'>
        <div className='relative'>
          <Image className="w-full h-36" src={props.img} height={650} width={750} alt="img" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link href={`${props.code}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"><GrCode /></button>
          </Link>
          <Link href={`${props.live}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"><RiLiveLine/></button>
          </Link>
        </div>
        </div>
        <div className='p-2 mt-3'>
          <div className='flex flex-col justify-between'>
            <h3 className='font-semibold text-xl text-white'>{props.title}</h3>
            {/* <p className='text-sm mt-1 text-sky-950 line-clamp-3'>{props.value}</p> */}
            <Link href={`${props.detail}`} className="text-sky-500 flex py-2 gap-1 font-medium">
                More Info <IoMdInformationCircleOutline className='text-sky-500' size={20}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
