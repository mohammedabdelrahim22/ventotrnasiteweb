
import Slider from "react-slick"
import { slider_iamges } from '../../constans/constans'
import './spot.css'
const Spot = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                },
            },
        ],
    };
    return (
        <div className="spot mt-[50px]">

            <div className="head_text w-full">
                <div className="text_inside w-full text-center">
                    <h4 className="main_color sub_font font-bold">
                        Built For Your Niche
                    </h4>
                    <h2 className="sub_font font-bold text-[50px] text-black">
                        Spot-On Branding:
                        <br />
                        Aligning Your Audience And Their Values
                    </h2>
                </div>
            </div>
            <div className="bottom_side p-5 mt-[40px]  pt-[50px] bg-[#F8F8F8]">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="right_side pt-[30px]">
                            <h3 className="text-black sub_font text-[50px] pr-[20px] font-bold">
                                We Believe That Your Name Should Be A Brand
                            </h3>
                            <p className="text-[16px] text-[##000000] opacity-75 pt-4">
                                Creating A Personal Brand Can Be A Powerful Tool For Connecting With Your Audience. By Using Your Name As Your Brand, You Can Create A Sense Of Authenticity And Personality That Resonates With People.
                            </p>
                            <button className="main_color rounded-[16px] w-[200px] mt-[3vh] sm:mt-[2vh] md:mt-[3vh]  font-bold sub_font text-[20px] flex justify-start">Learn More<span>
                                <svg width="25px" height="25px" viewBox="0 0 24 24" className="ml-2" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#f5a34c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#f5a34c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                        </div>
                        <div className="left_side">
                            <div>
                                <Slider {...settings} className="p-5">
                                    {slider_iamges.map((slid) => {
                                        return (
                                            <div className="slider_card bg-[#fff] p-5 rounded-[10px]" key={slid.id}>
                                                <div className="image_container w-[70px] h-[70px] overflow-hidden rounded-[50%]">
                                                    <img src={slid.photo} />
                                                </div>
                                                <div className="text_container pt-4">
                                                    <h2 className="sub_font text-black font-bold text-[30px]">
                                                        {slid.title}
                                                    </h2>
                                                    <p className="sub_font text-[17px] text-[#ddd] pt-2">
                                                        {slid.desc1}
                                                    </p>
                                                    <h3 className="text-[20px] font-bold main_color sub_font pt-2">
                                                        {slid.desc2}
                                                    </h3>
                                                    <h3 className="text-[20px] font-bold text-black sub_font pt-2">
                                                        {slid.desc3}
                                                    </h3>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spot
