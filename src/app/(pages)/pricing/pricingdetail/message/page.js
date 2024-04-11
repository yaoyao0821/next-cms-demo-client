
export default function Message() {
    return (
        <>
        <main>
            <div className="flex flex-col
             items-center justify-center w-screen
              relative h-screen bg-white">
                    <div className="m-[60px] text-center">
                        <h1 className="text-6xl font-black">Message Pricing</h1>
                        <div className="">
                            <p className="text-2xl m-[30px]">Messaging Service software pricing details.</p>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-normal text-white font-black uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Phone number type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        SMS<br/> 
                                        Outbound*
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        SMS<br/> 
                                        Inbound*
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        MMS<br/> 
                                        Outbound*
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        MMS<br/> 
                                        Inbound*
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Long codes</b>
                                    </th>
                                    <td className="px-6 py-4">
                                        $0.0079
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0079
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0200
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0100
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Toll-free</b>
                                    </th>
                                    <td className="px-6 py-4">
                                        $0.0079
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0079
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0200
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0100
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Short codes</b>
                                    </th>
                                    <td className="px-6 py-4">
                                        $0.0079
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0079
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0200
                                    </td>
                                    <td className="px-6 py-4">
                                        $0.0100
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


            </div>

           </main>
        </>
    );
  }
  