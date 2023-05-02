import { useState } from "react"
import './filter.css'
import { Link } from 'react-router-dom'
const Filter = () => {
    const [rangeValue, setRangeValue] = useState(100000);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    }

    return (
        <div className="filter mt-[70px]">
            <div className="container w-full sm:w-[85%]">
                <div className="inside_filter bg-[#000000] min-h-[60vh] p-[50px] rounded-[50px]">
                    <div className="text-inside">
                        <h4 className="font-bold main_color sub_font">
                            Our Bread And Butter
                        </h4>
                        <h2 className="text-white text-[40px] font-bold sub_font pt-6">
                            Unleash The Power Of Community: <br />
                            Watch Your Brand Soar With Advocates
                        </h2>
                        <p className="text-[#fff] opacity-80 sub_font text-[13px] pt-5 pr-[60px]">
                            Our Product Is Designed For Growing Startups, Established Companies, And Influencers Seeking New Growth Opportunities And Increased Revenue, By Helping Them Increase Acquisition, Distribute Content, And Grow Revenue Efficiently.
                        </p>
                        <div className="inside_range w-full flex pt-4 justify-start flex-wrap justify-center">

                            <div className="input_style mt-[60px]">
                                <div className="text_head text-center">
                                    <h3 className="text-white font-bold sub_font text-[30px]">
                                        My Goal For Next Qoarter is
                                    </h3>
                                </div>
                                <div className="text-center">
                                    <h4 className="main_color text-[40px] sub_font pt-5">
                                        ${rangeValue}
                                    </h4>
                                </div>
                                <span className="min_numper text-[20px] p-2 text-[#fff]  opacity-75">$100,000</span>
                                <input className="w-[300px] pl-3 pr-3"
                                    type="range"
                                    min="10000"
                                    max="1000000"
                                    value={rangeValue}
                                    onChange={handleRangeChange}
                                />
                                <span className="max_numper  text-[20px]  text-[#fff]  opacity-75 p-2">$100,00,00</span>
                            </div>
                            <span className="p-2 flex items-end pl-7">
                                <a href="#">
                                    <Link to='/MultiStepForm'>
                                        <button className="main_background p-2 rounded-[16px]  w-[200px] text-white font-bold sub_font text-[20px] flex justify-evenly">Make It Happen<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                                    </Link>
                                </a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
