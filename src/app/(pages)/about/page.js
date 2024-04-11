import Image from "next/image";
import "../../styles/about.css";
export default function About() { 
    // style={{background-position:0 0, 0 100%;background-size:100% 2px}}>
    return (
        <>

        <main className="flex flex-col items-center justify-between">
            <div className="w-screen relative h-screen bg-blue-900">
                <div className="bg-cover bg-center w-screen h-screen bg-no-repeat" 
                style={{backgroundImage: `url('/about.jpg'`}}>
                
                {/* <div className="absolute h-full w-full z-0">
                    <Image src="/about.jpg" alt="Apryse about page"
                        className="w-full" objectFit="contain"
                        fill={false} sizes="100vw"
                        width={0} height={0}
                        style={{height: 'auto'}}
                        priority />
                </div> */}

                <div className="z-10 rounded-lg bg-no-repeat
                 border-white border bg-white-transparent-r
                m-10 p-10 absolute lg:w-[43%] bottom-12 sm:bottom-16 md:bottom-12 
                sm:top-16 md:top-12 top-8 w-[60%] sm:w-[65%] md:w-[40%]" >
                    <div className="p-6 sm:p-8">
                        <h6 className="h6 text-white font-medium mb-4 sm:mb-6 scroll-mt-20">About</h6>
                        <h1 className="h1 text-white font-light lg:text-4xl text-3xl scroll-mt-20">
                            We are Apryse
                        </h1>
                    <p className="p text-white text-base lg:text-lg mt-4 sm:mt-6 md:mt-8 font-light">
                        We focus on delivering better products;  leveraging new ideas and new thinking that gives our clients an edge, keeping them a step ahead. Smarter, easier, faster. Made better. That is Apryse.</p>
                    </div>
                </div>
</div>
            </div>
        </main>
        </>
    );
  }
  