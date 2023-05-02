
import { useState } from 'react';
import slide1 from '../../assets/multi/slide1.png'
import slide2 from '../../assets/multi/slide2.png'
import slide3 from '../../assets/multi/slide3.png'
import logo from '../../assets/logo/logo.png'
import CalendarTime from '../calender/Calender'
// import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'
import './multi.css'
const MultiStepForm = () => {
    const stepsTitles = ['Tell Us About Your Selfe', 'Tell Us About Your Selfe', 'Please describe challenge that your require our assistance with . ', 'Tell Us about your schedule'];
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const totalSteps = 4;
    const percentComplete = Math.round((currentStep / totalSteps) * 100);
    const images = [
        slide1,
        slide3,
        slide2,
        slide3,

    ];
    const [selectedOption, setSelectedOption] = useState("");
    const [checkboxes, setCheckboxes] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
    });

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    };
    // start range 2

    const [rangeValue2, setRangeValue2] = useState(100000);

    const handleRangeChange2 = (event) => {
        setRangeValue2(event.target.value);
    }
    const [rangeValue3, setRangeValue3] = useState(3500);

    const handleRangeChange3 = (event) => {
        setRangeValue3(event.target.value);
    }
    const [rangeValue4, setRangeValue4] = useState(3);

    const handleRangeChange4 = (event) => {
        setRangeValue4(event.target.value);
    }
    const [rangeValue5, setRangeValue5] = useState(5000);

    const handleRangeChange5 = (event) => {
        setRangeValue5(event.target.value);
    }
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (event) => {
        // تحديث حالة التعبئة عند تغيير أي من حقول الإدخال
        const { name, value } = event.target;
        setIsFormValid((prevValues) => ({
            ...prevValues,
            [name]: value.length > 0
        }));
    };
    return (
        <div className="container flex justify-center items-center  min-h-[100vh]">
            <div className="min-h-[89vh]">
                <div className="flex flex-col md:flex-row  min-h-[90vh] shadow-lg shadow-cyan-500/50 bg-white">
                    <div className="md:w-1/2 md:pr-4 p-6">
                        <div className='image_logo pt-[20px]'>
                            <Link to="/">
                                <img src={logo} className='object-cover w-[200px]' />
                            </Link>
                        </div>
                        <div className="progress-bar mt-[70px]">
                            <div className="progress" style={{ width: `${percentComplete}%` }}></div>
                        </div>
                        <form onSubmit={handleSubmit} className='mt-[60px]'>
                            {currentStep === 1 && (
                                <div className=''>
                                    <h2 className='text-[30px] text-black sub_font font-bold'>{stepsTitles[currentStep - 1]}</h2>
                                    <div className="flex flex-wrap -mx-3 mb-6 pt-[40px]">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <input className="appearance-none block w-full rounded mb-3 bord" name='name' id="name" type="text" placeholder="First Name " required onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <input className="appearance-none block w-full   rounded bord" id="text" type="text" name='name' placeholder="Last Name" required onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <input className="appearance-none block w-full  text-gray-700 rounded  mb-3 bord" name='email' id="email" type="Email" placeholder="Email" onChange={handleInputChange} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <input className="appearance-none block w-full  rounded bord" id="password" type="password" placeholder="*********" required onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div className='step_2_form w-50'>
                                    <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 w- lg:grid-cols-1 md-grid-cols-1 gap-4 pm-4 pt-[30px]">
                                        <div className=''>
                                            <select
                                                className="w-full mp-4"
                                                value={selectedOption}
                                                onChange={handleSelectChange}
                                            >
                                                <option value="">industry</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                                <option value="option4">Option 4</option>
                                            </select>
                                        </div>
                                        <div>

                                            <div className="sheckboxes mb-[30px]">
                                                <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                    Traget Auinnce (Mrket):
                                                </h3>
                                                <div className='flex justify-between mt-2'>
                                                    <label className="">
                                                        <input required
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5"
                                                            name="option1"
                                                            checked={checkboxes.option1}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span className="ml-2">Technology</span>
                                                    </label>
                                                    <label className="">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5"
                                                            name="option4"
                                                            checked={checkboxes.option4}
                                                            onChange={handleCheckboxChange}
                                                            required
                                                        />
                                                        <span className="ml-2">Content / influencing</span>
                                                    </label>
                                                </div>
                                                <div className='flex  justify-between'>
                                                    <label className="">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5"
                                                            name="option3"
                                                            checked={checkboxes.option3}
                                                            onChange={handleCheckboxChange}
                                                            required
                                                        />
                                                        <span className="ml-2">Education /E-Learning </span>
                                                    </label>

                                                    <label className="mr-[98px] flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5"
                                                            name="option2"
                                                            checked={checkboxes.option2}
                                                            onChange={handleCheckboxChange}
                                                            required
                                                        />
                                                        <span className="ml-3">Others</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='filters_section pt-[50px]'>
                                        <div className='Head_section'>
                                            <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                Quaretrly Recurring Revenue(QRR):(Scale)
                                            </h3>
                                            <div className='range_slider'>
                                                <div className="input_style mt-[5px]">
                                                    <div className="flex flex-wrap items-baseline">
                                                        <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$5000</span>
                                                        <input className="w-[200px] pl-3 pr-3"
                                                            type="range"
                                                            min="5000"
                                                            max="400000"
                                                            value={rangeValue5}
                                                            onChange={handleRangeChange5}

                                                        />
                                                        <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2">$400,000</span>
                                                        <h4 className="main_color text-[20px] sub_font pt-5">
                                                            ${rangeValue5}
                                                        </h4>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='filters_section pt-[50px]'>
                                        <div className='Head_section'>
                                            <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                Quaretrly  Recurring Revenue(QRR):(Scale)
                                            </h3>
                                            <div className='range_slider'>
                                                <div className="input_style mt-[5px]">
                                                    <div className="flex flex-wrap items-baseline">
                                                        <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$5000</span>
                                                        <input className="w-[200px] pl-3 pr-3"
                                                            type="range"
                                                            min="5000"
                                                            max="400000"
                                                            value={rangeValue2}
                                                            onChange={handleRangeChange2}
                                                        />
                                                        <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2">$400,000</span>
                                                        <h4 className="main_color text-[20px] sub_font pt-5 w-[100px]">
                                                            ${rangeValue2}

                                                        </h4>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div className='main_div'>
                                    <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                    <div className='filters_section mt-[50px]'>
                                        <div className='Head_section'>
                                            <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                                Quaretrly  Recurring Revenue(QRR):(Scale)
                                            </h3>
                                            <div className='range_slider'>
                                                <div className="input_style mt-[5px]">
                                                    <div className="flex flex-wrap items-baseline">
                                                        <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">$3,500</span>
                                                        <input className="w-[200px] pl-3 pr-3"
                                                            type="range"
                                                            min="3500"
                                                            max="50000"
                                                            value={rangeValue3}
                                                            onChange={handleRangeChange3}
                                                            required
                                                        />
                                                        <span className="max_numper  text-[16px]  text-[#000000] opacity-75 p-2 w-[100px]">$50,000</span>
                                                        <h4 className="main_color text-[20px] sub_font pt-5">
                                                            ${rangeValue3}
                                                        </h4>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Head_section'>
                                        <h3 className='sub_font text-[15px] opacity-75 text-[#000000] font-medium'>
                                            Quaretrly  Recurring Revenue(QRR):(Scale)
                                        </h3>
                                        <div className='range_slider'>
                                            <div className="input_style mt-[5px]">
                                                <div className="flex  flex-wrap items-baseline">
                                                    <span className="min_numper text-[16px] p-2 text-[#000000]  opacity-75">3Month</span>
                                                    <input className="w-[200px] pl-3 pr-3"
                                                        type="range"
                                                        min="3"
                                                        max="12"
                                                        value={rangeValue4}
                                                        onChange={handleRangeChange4}
                                                        required
                                                    />
                                                    <span className="max_numper text-[16px]  text-[#000000] opacity-75 p-2">12Month</span>
                                                    <h4 className="main_color text-[20px] sub_font pt-5">
                                                        {rangeValue4}Month
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )}
                            {currentStep === 4 && (
                                <div>
                                    <h2 className='text-[30px] text-black sub_font font-bold '>{stepsTitles[currentStep - 1]}</h2>
                                    <CalendarTime required />
                                </div>
                            )}
                            <div className="flex justify-between mt-[50px] items-end">
                                {currentStep > 1 && (
                                    <button onClick={handlePrev} className="text-gray-800 font-bold py-2 px-4 rounded-lg text-[#8b7676]">Previous</button>
                                )}
                                {currentStep < 4 ? (
                                    <button onClick={handleNext} disabled={!isFormValid} className="text-black font-bold py-2 px-4 rounded-lg">
                                        Next
                                    </button>
                                ) : (
                                    <Link to="/" >
                                        <button type="submit" className="font-bold py-2 px-4 rounded-lg text-[#000]">Done</button>
                                    </Link>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/2 p-4 flex justify-center items-center bg-[#000000]">
                        <div className='border_div w-[90%] h-[90%] flex justify-center items-center'>
                            <img src={images[currentStep - 1]} alt={`Step ${currentStep}`} className="object-cover w-[80%] h-[50%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MultiStepForm;