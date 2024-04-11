import Image from "next/image";
import TabsComponent from '@/app/_components/TabsComponent';
const items = [
    {
      title: 'Tab 1',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 1</h1>
            <ul role="list">
              <li>
                <div>
                  <h5 className='text-l'>
                    <svg className="inline-block w-8 h-8 mt-2 mb-2 mr-2"  viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 3.93333L2.73504 5.88889L7.44445 1" stroke="#121C2D" strokeWidth="1.11111" strokeLinecap="round"></path>
                    </svg>
                    Pricing for SMS and MMS
                  </h5>
                  <p>Pay per phone number, per message segment sent and received, and passthrough carrier fees</p>
                </div>
              </li>
              <li>
                <div className="mt-2 mb-2">
                  
                </div>
                <div>
                  <h5 className='text-l'>
                    <svg className="inline-block w-8 h-8 mt-2 mb-2 mr-2"  viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 3.93333L2.73504 5.88889L7.44445 1" stroke="#121C2D" strokeWidth="1.11111" strokeLinecap="round"></path>
                    </svg>
                    Pricing for WhatsApp
                  </h5>
                  <p>Pay per phone number, per message sent and received, and a WhatsApp fee per 24-hour conversation</p>
                </div>
              </li>
            </ul>
        </div>
      ),
    },
    {
      title: 'Tab 2',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Conversational commerce</h1>
          <p className="mt-5">
          Power cross-channel, multiparty messaging with the Conversations API. This API supports channels that require either a phone number or a user identity. You’ll provision a phone number as needed, then pay as you go for channel-specific fees and monthly active users (MAU).
          </p>
        </div>
      ),
    },
    {
      title: 'Tab 3',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Conversational support</h1>
          <p className="mt-5">
          Enable cross-channel, multiparty customer care with the Conversations API. This API supports channels that require either a phone number or a user identity. You’ll provision a phone number as needed, then pay as you go for channel-specific fees and monthly active users (MAU).
          </p>
        </div>
      ),
    },
    {
      title: 'Tab 4',
      content: (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
          <h1 className='text-3xl text-blue-600'>Title Test 4</h1>
          <p className="mt-5">
          Reach every customer at scale with the Programmable Messaging API. This API supports channels with a phone number, so you’ll first provision a number and then pay as you go for channel-specific fees.
          </p>
        </div>
      ),
    },
  ];

export default function Overview() {
    return (
        <>
            <main className="flex flex-col items-center justify-between">
            <div className="w-screen relative h-screen bg-blue-900">
                <div className="flex justify-center bg-cover bg-center w-screen h-screen bg-no-repeat" 
                style={{backgroundImage: `url('/about.jpg'`}}>
                    <TabsComponent
                    items={items} />
                </div>
            </div>

     
        </main>
           
        </>
    );
  }
  