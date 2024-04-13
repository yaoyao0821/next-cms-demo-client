import Image from "next/image";
import "../../../styles/about.css";
import client from '../../../_api/sanity';
// import Link from "next/link";
import { redirect } from 'next/navigation';
import LangComp from '../../../_components/Lang';
// export async function generateStaticParams() {
//     const aboutInfo = (await client.fetch(aboutQuery))[0];
   
//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
// }

export default async function About({params}) {
    const {lang} = params;
    const aboutQuery = `*[_type == "about" && language == '${lang}' ] {
        title,
        content
    }`;
    const aboutInfo = (await client.fetch(aboutQuery))[0];
    // console.log(lang, aboutQuery, aboutInfo)

    return (<>

        <main className="flex flex-col items-center justify-between">
            <div className="w-screen relative h-screen bg-blue-900">
                <div className="bg-cover bg-center w-screen h-screen bg-no-repeat" 
                style={{backgroundImage: `url('/about.jpg'`}}>
                    <LangComp language={lang}/>
                    {/* <div className="max-w-sm mx-auto">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a language</label>
                        <select onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="en" selected>English</option>
                            <option value="cn">
                                Chinese
                            </option>
                        </select>
                        
                    </div> */}
                    <div className="z-10 rounded-lg bg-no-repeat
                    border-white border bg-white-transparent-r
                    m-10 p-10 absolute lg:w-[43%] bottom-12 sm:bottom-16 md:bottom-12 
                    sm:top-16 md:top-12 top-8 w-[60%] sm:w-[65%] md:w-[40%]" >
                        <div className="p-6 sm:p-8">
                            <h6 className="h6 text-white font-medium mb-4 sm:mb-6 scroll-mt-20">
                                
                            </h6>
                            <h1 className="h1 text-white font-light lg:text-4xl text-3xl scroll-mt-20">
                                {aboutInfo?.title}
                            </h1>
                            <p className="p text-white text-base lg:text-lg mt-4 sm:mt-6 md:mt-8 font-light">
                                {aboutInfo?.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
  }
  