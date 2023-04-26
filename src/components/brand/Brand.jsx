import './brand.css'
import { Cards } from "../../constans/constans"
function Brand() {
    return (
        <div className='brand mt-[80px]'>
            <div className="flex w-[100%] justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 w-[70%]">
                    <div className="p-4 w-[40%] relative">
                        <h3 className="after_card main_color text-[40px] sub_font relative">
                            Tailored
                            <br />
                            Tactics
                        </h3>
                    </div>
                    <div className="p-4">
                        <h3 className="text-black text-[30px] sub_font">
                            Customized Marketing And Strategic <span className="main_color">
                                Management
                            </span>
                            <br />
                            Start
                            <span>
                                <svg width="50px" height="50px" className='d-inline' viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.43200000000000005"></g><g id="SVGRepo_iconCarrier">
                                    <title>
                                    </title> <g id="Complete"> <g id="arrow-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.504"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.504" x1="2.5" x2="19.2" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
                            </span>
                            Finish.

                        </h3>

                    </div>
                </div>
            </div>
            <div className='cards mt-[30px]'>
                <div className=" p-5 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
                        <div className="w-full sm:basis-1/2 p-4">
                            <p className='text-[20px] main_color sub_font'>Our Bread And Butter</p>
                            <h3 className='text-[40px] text-black sub_font'>We Build A Brand That Resonates With Your Niche</h3>
                            <p className='text-[20px] main_color font-bold sub_font'>Roadmap</p>
                            <button class="main_background p-2 rounded-[16px] w-[200px] mt-5 text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                        </div>
                        <div className="w-full sm:basis-1/2">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full">
                                {Cards.map((card) => {
                                    return (
                                        <div className="bg-gray-300 rounded-[10px] " key={card.id}>
                                            <div className='flex items-center justify-between w-full flex-wrap'>
                                                <div className='first_div  p-2'>
                                                    <span className='bg-black w-[50px] h-[50px] rounded-[50%] flex justify-center items-center text-white'>
                                                        <h5 className='sub_font'>
                                                            {card.number}
                                                        </h5>
                                                    </span>
                                                </div>
                                                <div className='second_div text-center pr-[5px]'>
                                                    <span className='main_background w-[50px] h-[50px] rounded-[50%] flex justify-center items-center text-white '>
                                                        <h5 className='sub_font'>
                                                            {card.number}
                                                        </h5>
                                                    </span>
                                                </div>

                                            </div>
                                            <h3 className='text-[25px] sub_font p-2 text-black'>
                                                {card.title}
                                            </h3>
                                            <p className='text-[15px] p-2 text-[##000000]'>
                                                {card.desc}
                                            </p>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
