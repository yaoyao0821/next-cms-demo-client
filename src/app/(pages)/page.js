import client from '../_api/sanity';
const homepageQuery = `*[_type == "homepage"] {
    title,
    content
}`;

export default async function Home() {
    const homepageInfo = (await client.fetch(homepageQuery))[0];
    console.log('homepageInfo[0]', homepageInfo)

    return (
        <>
            {/* <main className="flex flex-col items-center justify-between p-24"> */}
            <main className="flex flex-col items-center justify-between">
                <div className="w-screen relative min-h-[100%] bg-blue-900">

                    <div className="bg-cover bg-center w-full h-screen bg-no-repeat" 
                        style={{backgroundImage: `url('/home_bg.jpg'`}}>
                        <div className="w-full max-w-screen flex justify-center bg-transparent">
                            <div className="w-full mx-4 max-w-[1140px] h-full flex 
                            justify-center py-[40px] sm:py-[120px] px-3 sm:px-6  z-10">
                                <div className="w-screen mx-6 sm:mx-0 flex flex-col">
                                    <div className="flex flex-wrap sm:max-w-[452px] max-w-[391px] self-end ">
                                        <h1 className="h1 font-bold text-white text-[40px] md:leading-[45px] leading-[35px] mb-[14px] scroll-mt-20">
                                            {homepageInfo.title}
                                        </h1>
                                        <p className="p text-white md:max-w-[452px] max-w-[350px] font-normal text-[18px] leading-[28px] mb-[14px]">
                                            {homepageInfo.content}
                                        </p>
                                        {/* <div className="flex gap-3 flex-wrap"><a target="_blank" className="" href="https://showcase.apryse.com/">
                                            <button className="btn btn-md btn-primary ">See It in Action</button></a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                        {/* <Image src="/home_bg.jpg" alt="Apryse home page"
                            className="w-full" objectFit="contain"
                            fill={false} sizes="100vw"
                            width={0} height={0}
                            style={{height: 'auto'}}
                            priority /> */}

                </div>
            </main>
        </>
    );
}
