import aboutIcon from '../img/about_img.jpg';
import Image from 'next/image';

export default function About() {
    return (
    <div id="about" className="my-12 lg:my-16 relative isolate overflow-hidden px-6 sm:py-22 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 lg:order-1">
                <p className="font-semibold mb-5 text-white text-xl text-bold">
                    About me...
                </p>
                <p className="text-gray text-justify text-sm lg:text-base">
                    Student at ESCOM (Instituto Politécnico Nacional), now Software Engineer at Ellucian, 
                    with knowledge in Java, Python, JavaScript and frameworks such as React.js, Cloud Computing and cloud services 
                    such as Azure, GCP (Google Cloud Platform) and AWS, and also a Linux lover. Passionate in the web development, 
                    front and back end, from HTML to databases. A person who likes to work in teams and always be learning.
                </p>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
                <Image
                    src={aboutIcon}
                    width={240}
                    height={240}
                    alt="Daniel Espinoza"
                    className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 cursor-pointer"
                />
            </div>
        </div>
    </div>
    )
  }