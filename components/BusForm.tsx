'use client'
import { Input, DatePicker } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import dayjs from 'dayjs';
import LocationSelect from './LocationSelect';

const BusForm = () => {
    const [from, setFrom] = useState<string | undefined>(undefined);
    const [to, setTo] = useState<string | undefined>(undefined);
    const [departureDate, setDepartureDate] = useState<string | null>(null);
    const [returnDate, setReturnDate] = useState<string | null>(null);
    const [isRoundedTrip, setIsRoundedTrip] = useState(false);
    const [passengerCount, setPassengerCount] = useState(1);

    const handleSearch = () => {
        console.log(
            from,
            to,
            departureDate,
            returnDate,
            isRoundedTrip,
            passengerCount
        )
    }
  return (
    <div className='flex flex-col gap-6'>
        <div className="w-full p-4 gap-4 flex">
            <div className="flex flex-3 gap-2">
                <div className="flex flex-1 flex-col gap-2 h-[75px]">
                    <h3 className='text-[#65686F] text-h3'>FROM</h3>
                    <LocationSelect value={from} onChange={setFrom} />
                </div>
                <div className='self-end rounded-full p-3 w-12 h-12 shadow-[0px_2px_4px_0px_rgba(32,80,118,0.12)]'>
                    <Image src="/arrows.svg" alt="Arrow" width={48} height={48}/>
                </div>
                <div className="flex flex-1 flex-col rounded-lg gap-2 h-[75px]">
                    <h3 className='text-[#65686F] text-h3'>TO</h3>
                    <LocationSelect value={to} onChange={setTo} />
                </div>
            </div>
            <div className='flex flex-3 gap-2'>
                <div className="flex flex-1 flex-col rounded-lg gap-2 h-[75px]">
                    <label className='text-[#65686F] text-h3'>DEPARTURE DATE</label>
                    <DatePicker value={departureDate ? dayjs(departureDate) : null} onChange={(date) => setDepartureDate(date ? date.format('YYYY-MM-DD') : null)} format="DD-MM-YYYY" prefix={<Image src="/calendar.svg" alt="Calendar" width={20} height={20} />} suffixIcon={null} placeholder='DD / MM / YYYY 00:00' className="w-full h-full border! border-[#CCCFD5]! rounded-lg! custom-input" />
                </div>
                <div className="flex flex-1 flex-col rounded-lg gap-2 h-[75px]">
                    <div className='text-[#65686F] text-h3 flex gap-2 items-center'>
                        <input
                            type="checkbox"
                            className='accent-[#19C0FF]'
                            checked={isRoundedTrip}
                            onChange={() => setIsRoundedTrip(!isRoundedTrip)}
                        />
                        <label>ROUNDED TRIP?</label>
                    </div>
                    <DatePicker value={returnDate ? dayjs(returnDate) : null} onChange={(date) => setReturnDate(date ? date.format('YYYY-MM-DD') : null)} format="DD-MM-YYYY" prefix={<Image src="/calendar.svg" alt="Calendar" width={20} height={20} />} suffixIcon={null} placeholder='DD / MM / YYYY 00:00' className="w-full h-full border! border-[#CCCFD5]! rounded-lg! custom-input" disabled={!isRoundedTrip} />
                </div>
            </div>
            <div className='flex flex-1 flex-col rounded-lg gap-2 h-[75px]'>
                <div className="flex flex-col rounded-lg gap-2 h-[75px]">
                    <label className='text-[#65686F] text-h3'>NO. OF PASSENGER</label>
                    <Input type='number' prefix={<Image src="/passenger.svg" alt="Bus From" width={20} height={20} />} value={passengerCount} onChange={(e) => setPassengerCount(Math.max(1, parseInt(e.target.value) || 1))} min={1} className="h-full border! border-[#CCCFD5]! rounded-lg! custom-input"/>
                </div>
            </div>
        </div>
        <button className='w-[266px] mx-auto bg-[#19C0FF] px-5 py-4 rounded-full gap-2 text-white flex justify-center' onClick={handleSearch}>
            <Image src="/search.svg" alt="Search" width={24} height={24}/>
            <span className=''>SEARCH</span>
        </button>
    </div>
  )
}

export default BusForm