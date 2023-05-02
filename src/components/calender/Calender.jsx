import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calnder.css';

const CalendarTime = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    // تاريخ اليوم
    const today = new Date();

    // تاريخ المستقبل
    const futureDate = new Date();
    futureDate.setFullYear(today.getFullYear() + 3);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-5 w-[100%]'>
            <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={today}
                maxDate={futureDate}
            />
            <div className='date_buttons  pl-[90px]'>
                <div className='date_count w-[100%] h-[100%] mt-[30px]'>
                    <button className='sub_font bg-[#F2F2F2] p-4  rounded-[20px] text-black mt-[10px]'>
                        7:00 AM - 7:30 AM
                    </button>
                    <button className='sub_font time_active p-4 rounded-[20px] text-black mt-[10px]'>
                        7:00 AM - 7:30 AM
                    </button>
                    <button className='sub_font  bg-[#F2F2F2]  text-black p-4 rounded-[20px] text-black mt-[10px]'>
                        7:00 AM - 7:30 AM
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalendarTime;