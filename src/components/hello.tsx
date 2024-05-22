import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function Hello () {
    return (
    <section className="relative item-center flex flex-col items-center justify-between py-4 lg:py-12 pl-10">
      <div className="grid grid-cols-1 items-start lg:grid-cols-1 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I'm {' '}
            <span className=" text-[#DAAFAC]">Daniel Espinoza,</span> <br />
            {` a Professional `}
            <span className=" text-[#A4B3B9]">Software Engineer</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href='https://github.com/danielDEBIAN'
              target='_blank'
              className="transition-all text-[#DAAFAC] hover:scale-125 duration-300"
            >
              <BsGithub size={40} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/daniel-espinoza-bautista-4939bb218/'
              target='_blank'
              className="transition-all text-[#DAAFAC] hover:scale-125 duration-300"
            >
              <BsLinkedin size={40} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-[#A43931] from-[#1D4350] p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#1D4350] to-[#A43931] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href= 'https://drive.google.com/file/d/1WgYXXZHkY-SCwNHYlZZ7wuvBM6keJSWd/view?usp=sharing'
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
          </div>
        </div>
    </section>
    )
}