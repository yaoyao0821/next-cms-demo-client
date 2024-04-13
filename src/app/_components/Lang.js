'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'


export default function LangComponent ({language}) {
    // const [selectedValue, setSelectedValue] = useState(language);
    // const [hide, setHide] = useState(true);
    const router = useRouter();

    const changeLang = (e) => {
        // setSelectedValue(e.target.value);

        router.push(`/${e.target.value}/about`);
    }
    // useEffect(() => {
    //     setSelectedValue(language);
    //   }, [language]);

    return (<>
       <div className="max-w-sm mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a language</label>
            <select onChange={changeLang} value={language}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="en">
                    English
                </option>
                <option value="cn">
                    Chinese
                </option>
            </select>
        </div>
    </>)
 
}
