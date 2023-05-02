import './scale.css'
import logo from '../../assets/logo/logo.png'
import { scale_div, scale_div_two } from '../../constans/constans'
import card from '../../assets/scale/card.png'
import card2 from '../../assets/scale/card2.png'
import card3 from '../../assets/scale/card3.png'
import card4 from '../../assets/scale/card4.png'
import cardtop from '../../assets/scale/cardtop.png'
import cardtop1 from '../../assets/scale/cardtop1.png'
function Scale() {
    return (
        <div className="scale mt-[60px]">
            <div className='container'>
                <div className="head_text">
                    <h4 className="font-bold main_color sub_font">
                        Case Studies
                    </h4>
                    <h2 className="font-bold text-black  sub_font text-[50px] pt-5">
                        How We Scale It.
                    </h2>
                </div>
                <div className='grid grid-col-2 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 relative gap-9 mt-5'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 after_style relative">
                        <div className="col-span-1  z-10">
                            <div className="grid grid-rows-1 gap-4 z-10">
                                {scale_div_two.map((sa) => {
                                    return (
                                        <div className="row-span-1 bg-[#000000] p-6 z-10 rounded-[20px]" key={sa.id}>
                                            <h2 className='main_color text-[15px] sm:text-[30px] font-bold sub_font'>
                                                {sa.title}
                                            </h2>
                                            <h4 className='text-white  opacity-75 text-[12px] sm:text-[17px] pt-[10px] sub_font'>
                                                {sa.desc}
                                            </h4>
                                        </div>)
                                })}
                            </div>
                        </div>
                        <div className="col-span-1 p-[20px] sm:p-[40px] bg-[#000000] z-10 rounded-[20px] ">
                            <div className='image_div'>
                                <img src={cardtop} className='' />
                            </div>
                            <div className='text_div mt-[40px]'>
                                <h4 className='opacity-75 text-[15px] sm:text-[20px]  text-white sub_font mt-[20px]'>
                                    A Case Study
                                </h4>
                                <h2 className='font-bold text-[15px] sm:text-[30px] sub_font mt-[10px]'>
                                    Crowdfunding Campaign
                                </h2>
                                <button className="main_color rounded-[16px] w-[200px] mt-[6vh] sm:mt-[5vh]  text-white font-bold sub_font text-[20px] flex justify-start">Learn More<span><svg width="25px" height="25px" viewBox="0 0 24 24" className="ml-2" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#f5a34c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#f5a34c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4  after_style relative">
                        <div className="col-span-1  z-10">
                            <div className="grid grid-rows-2 gap-4 " >
                                {scale_div.map((sca) => {
                                    return (
                                        <div className="row-span-1 bg-[#000000] p-6  rounded-[20px]" key={sca.id}>
                                            <h2 className='main_color text-[15px] sm:text-[30px] font-bold sub_font'>
                                                {sca.title}
                                            </h2>
                                            <h4 className='text-white  opacity-75 text-[13px] sm:text-[17px] pt-[10px] sub_font'>
                                                {sca.desc}
                                            </h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-span-1 p-[20px] sm:p-[40px]  bg-[#000000] z-10 rounded-[20px] ">
                            <div className='image_div'>
                                <img src={cardtop1} className='' />
                            </div>
                            <div className='text_div mt-[30px]'>
                                <h4 className='opacity-75  text-[15px] sm:text-[20px]  text-white sub_font mt-[20px]'>
                                    A Case Study
                                </h4>
                                <h2 className='font-bold  text-[15px] sm:text-[30px] sub_font mt-[10px]'>
                                    Crowdfunding Campaign
                                </h2>
                                <button className="main_color rounded-[16px] w-[200px] mt-[8vh] sm:mt-[5vh]  text-white font-bold sub_font text-[20px] flex justify-start">Learn More<span><svg width="25px" height="25px" viewBox="0 0 24 24" className="ml-2" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#f5a34c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#f5a34c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                            </div>
                        </div>

                    </div>

                    <div className='after_style relative'>
                        <div className="col-span-1 p-[40px] bg-[#77adcb]  relative  z-20 rounded-[20px] ">
                            <div className='image_div grid grid-cols-1 sm:grid-cols-2 z-10 gap-4'>
                                <div className='text_div '>
                                    <div className='top_section'>
                                        <h2 className='sub_font text-[40px]'>
                                            E-Book
                                        </h2>
                                        <p className='sub_font opacity-75 text-white pt-3'>
                                            Design, Implementation, Marketing
                                        </p>
                                    </div>
                                    <div className='top_section mt-[20px]'>
                                        <h2 className='sub_font text-[30px]'>
                                            Business
                                            Profile
                                        </h2>
                                        <p className='sub_font opacity-75 text-white pt-3'>
                                            Design, Implementation, Marketing
                                        </p>
                                    </div>
                                </div>
                                <div className='image_section'>
                                    <img src={card2} className='object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='after_style relative'>
                        <div className="col-span-1 p-[40px] h-[100%] bg-[#f5a34c] z-10 rounded-[20px] ">
                            <div className='image_div grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='text_div pt-[30%]'>
                                    <h2 className='font-bold text-[30px] sub_font'>
                                        Tailor-Fit offer <br />
                                        For Your Auinnce
                                    </h2>
                                </div>
                                <div className='image_section'>
                                    <img src={card4} className='object-cover h-[215px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='after_style relative'>
                        <div className="col-span-1 p-[40px] bg-[#fea605] h-[100%] relative  rounded-[20px] ">
                            <div className='image_div grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='text_div'>
                                    <div className='top_section'>
                                        <h2 className='sub_font text-[40px]'>
                                            Merch
                                        </h2>
                                        <p className='sub_font opacity-75 text-white pt-3'>
                                            Design, Implementation
                                        </p>
                                    </div>
                                    <div className='top_section mt-[20px]'>
                                        <h2 className='sub_font text-[30px]'>
                                            $20,000
                                        </h2>
                                        <p className='sub_font opacity-75 text-white pt-3'>
                                            Design, Marketing
                                        </p>
                                    </div>
                                </div>
                                <div className='image_section relative'>
                                    <img src={card} className='object-cover h-[200px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='after_style relative'>
                        <div className="col-span-1 p-[40px] bg-[#486d9a] z-10 rounded-[20px]  relative">
                            <div className='image_div grid grid-cols-1 sm:grid-cols-2 gap-4 z-10'>
                                <div className='text_div z-10'>
                                    <h2 className='font-bold text-[30px] sub_font z-10'>
                                        Business <br />
                                        Profile
                                    </h2>
                                </div>
                                <div className='image_section relative'>
                                    <img src={card3} className='object-cover h-[216px] ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Scale
