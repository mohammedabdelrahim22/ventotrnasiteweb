
import React, { useState } from 'react';
import slide1 from '../../assets/multi/slide1.png'
import slide2 from '../../assets/multi/slide2.png'
import slide3 from '../../assets/multi/slide3.png'
import './multi.css'
const MultiStepForm = () => {
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
    return (
        <div className="p-6">
            <div className="container ">
                <div className="flex flex-col md:flex-row p-5">
                    <div className="md:w-1/2 md:pr-4">
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${percentComplete}%` }}></div>
                        </div>
                        <div className='head_text'>
                            <h3 className='text-[30px] text-black sub_font pt-7 font-bold'>
                                Tell Us About Your Selfe
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit} className='mt-[60px]'>
                            {currentStep === 1 && (
                                <div className=''>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="John Doe" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="johndoe@example.com" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="********" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="(123) 456-7890" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div>
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pm-4">
                                        <div>
                                            <label className="block font-bold mb-2">Select an option:</label>
                                            <select
                                                className="w-full border rounded py-2 px-3 mb-4"
                                                value={selectedOption}
                                                onChange={handleSelectChange}
                                            >
                                                <option value="">Select an option</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                                <option value="option4">Option 4</option>
                                            </select>
                                        </div>
                                        <div>

                                            <label className="block font-bold mb-2">Choose options:</label>
                                            <div className="flex flex-row">
                                                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pm-4">

                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-gray-600"
                                                            name="option1"
                                                            checked={checkboxes.option1}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span className="ml-2">Option 1</span>
                                                    </label>
                                                    <label className="inline-flex  items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-gray-600"
                                                            name="option2"
                                                            checked={checkboxes.option2}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span className="ml-2">Option 2</span>
                                                    </label>


                                                    <label className="inline-flex  items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-gray-600"
                                                            name="option3"
                                                            checked={checkboxes.option3}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span className="ml-2">Option 3</span>
                                                    </label>
                                                    <label className="inline-flex  items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-gray-600"
                                                            name="option4"
                                                            checked={checkboxes.option4}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span className="ml-2">Option 4</span>
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div>
                                    <label for="message" className="block mb-2 font-bold">Message:</label>
                                    <textarea id="message" className="w-full py-2 px-4 mb-8 rounded-lg border-gray-400 border-2"></textarea>
                                </div>
                            )}
                            {currentStep === 4 && (
                                <div>
                                    <label for="message" className="block mb-2 font-bold">Message:</label>
                                    <textarea id="message" className="w-full py-2 px-4 mb-8 rounded-lg border-gray-400 border-2"></textarea>
                                </div>
                            )}
                            <div className="flex justify-between">
                                {currentStep > 1 && (
                                    <button onClick={handlePrev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Previous</button>
                                )}
                                {currentStep < 4 ? (
                                    <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Next</button>
                                ) : (
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Done</button>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/2">
                        <img src={images[currentStep - 1]} alt={`Step ${currentStep}`} className="w-full rounded-[20px]" />
                    </div>
                </div>
            </div>
        </div>

    );
};
export default MultiStepForm;