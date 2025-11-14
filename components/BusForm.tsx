'use client'
import { Input } from 'antd';
import Image from 'next/image';
const BusForm = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className="w-full p-4 gap-4 flex">
            <div className="flex flex-3 gap-2">
                <div className="flex flex-col gap-2 h-[75px]">
                    <h3 className='text-[#65686F] text-h3'>FROM</h3>
                    <Input prefix={<Image src="/bus2.svg" alt="Bus From" width={20} height={20} />} placeholder="Enter city, terminal,..." className="h-full border! border-[#CCCFD5]! rounded-lg! custom-input"/>
                </div>
                <div className='self-end rounded-full p-3 w-12 h-12 shadow-[0px_2px_4px_0px_rgba(32,80,118,0.12)]'>
                    <Image src="/arrows.svg" alt="Arrow" width={48} height={48}/>
                </div>
                <div className="flex flex-col rounded-lg gap-2 h-[75px]">
                    <h3 className='text-[#65686F] text-h3'>TO</h3>
                    <Input prefix={<Image src="/bus2.svg" alt="Bus From" width={20} height={20} />} placeholder="Enter city, terminal,..." className="h-full border! border-[#CCCFD5]! rounded-lg! custom-input"/>
                </div>
            </div>
            {/* TODO: Fix */}
            <div className='flex flex-3 gap-2'>
                <div className="flex flex-1 flex-col rounded-lg gap-2 h-[75px]">
                    <h3 className='text-[#65686F] text-h3'>DEPARTURE DATE</h3>
                    <Input type="date" prefix={<Image src="/calendar.svg" alt="Bus From" width={20} height={20} />} placeholder="DD  /  MM  / YYYY" className="h-full border! border-[#CCCFD5]! rounded-lg! custom-input"/>
                </div>
                <div className="flex flex-1 flex-col rounded-lg gap-2 h-[75px]">
                    <div className='text-[#65686F] text-h3 flex gap-2 items-center'>
                        <input
                            type="checkbox"
                            className='accent-[#19C0FF]'
                        />
                        <p>ROUNDED TRIP?</p>
                    </div>
                    <Input type="date" prefix={<Image src="/calendar.svg" alt="Bus From" width={20} height={20} />} placeholder="DD  /  MM  / YYYY" className="h-full border! border-[#CCCFD5]! rounded-lg! custom-input"/>
                </div>
            </div>
            <div className='flex flex-1 flex-col rounded-lg gap-2 h-[75px]'>
                <div className="flex flex-col rounded-lg gap-2 h-[75px]">
                    <h3 className='text-[#65686F] text-h3'>NO. OF PASSENGER</h3>
                    <Input type='number' prefix={<Image src="/passenger.svg" alt="Bus From" width={20} height={20} />} defaultValue={1} className="h-full border! border-[#CCCFD5]! rounded-lg! custom-input"/>
                </div>
            </div>
        </div>
        <button className='w-[266px] mx-auto bg-[#19C0FF] px-5 py-4 rounded-full gap-2 text-white flex justify-center'>
            <Image src="/search.svg" alt="Search" width={24} height={24}/>
            <span className=''>SEARCH</span>
        </button>
    </div>
  )
}

export default BusForm