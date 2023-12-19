import Image from "next/image"
import htmllogo from "../image/html.jpg"
import csslogo from "../image/css.jpg"
import nextlogo from "../image/next.jpg"
import reactlogo from "../image/cover.jpg"
import vuelogo from "../image/vue.jpg"
import tailwindlogo from "../image/tailwind.jpg"
import javascriptlogo from "../image/javascript-logo.webp"
const HomeComponent = () => {
  return (
    <div>
        
            <section id="home" className="h-fit flex bg-stone-200">
                <div className="container mx-32 my-20">
                    <h1 className="text-lg font-bold mb-2 text-sky-500">Hello There, I'm</h1>
                    <h1 className="text-4xl font-bold mb-4 text-sky-950"><span className='border-b-4 border-sky-500 inline-block'>Tawheed </span> Khan </h1>
                    <p className="text-lg mb-2 font-semibold text-sky-950"> <span className='word-printing'>Frontend Developer</span></p>
                    <p className="text-sm mb-8 w-6/12 text-sky-950">Dedicated frontend developer with a passion for building intuitive and visually appealing user interfaces. Proficient in modern web technologies, I bring creativity and attention to detail to every project.</p>
                    <div className="mb-20">
                        <a
                            href="#portfolio"
                            className="bg-sky-500 text-white py-2 px-4 rounded-full font-semibold text-lg transition duration-300 hover:bg-white hover:text-sky-500"
                        >
                            Download CV 
                        </a>
                        <a
                            href="#portfolio"
                            className="bg-stone-200 text-sky-950 mx-5 py-2 px-4 rounded-full font-semibold text-lg border-2 border-sky-500 transition duration-300 hover:bg-sky-500 hover:text-sky-950"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-row items-center justify-center p-4 border-2 border-sky-500  rounded-xl shadow-md bg-white">
                            <h4 className='text-sky-950 font-bold'>Tech<span className='border-r-2 border-sky-500 inline-block p-2'>Stack</span></h4>
                            <Image src={htmllogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={csslogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={javascriptlogo}
                            height= {40}
                            width={35}
                            className="mx-4 my-4"
                            />
                            <Image src={nextlogo}
                            height= {50}
                            width={40}
                            className="mx-4 my-4"
                            />
                            <Image src={reactlogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={vuelogo}
                            height= {30}
                            width={30}
                            className="mx-4 my-4"
                            />
                            <Image src={tailwindlogo}
                            height= {35}
                            width={30}
                            className="mx-4 my-4"
                            />
                        </div>
                    </div>  
                </div>
            </section>  
       </div>
  )
}

export default HomeComponent
