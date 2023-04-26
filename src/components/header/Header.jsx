import logo from '../../assets/logo/Logo.png';
import head from '../../assets/header/head.jpg'
import './header.css'
function Header() {
    return (
        <div className='header min-h-screen pt-5'>
            <nav className="bg-white p-5 w-[87%] m-auto rounded-[20px]">
                <div className="mx-auto px-4">
                    <div className="flex justify-between">

                        <div className="flex items-center">
                            <img className="h-8 mr-4" src={logo} alt="Logo" />
                        </div>
                        <div className="flex items-center">
                            <a href="#" className='flex items'>
                                <span className='menu main_color font-bold text-[20px] mr-2'>
                                    Menu
                                </span>
                                <span className='svg_icon'>
                                    <svg width="30" height="30" viewBox="0 0 24 24">
                                        <path fill="#f5a34c" d="M2 6h20v2H2V6zm0 7h20v2H2v-2zm0 7h20v2H2v-2z" />
                                    </svg>
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </nav>
            <div className='vedio_show flex relative w-[100%] justify-center'>
                <div className='img_show relative w-[55%]'>
                    <img src={head} alt="vedio" className='object-center object-cover absolute top-[-72px]' />
                </div>
                <div className='vedio relative'>
                    <button className="play-button w-[60px] h-[60px] rounded-[50%] flex justify-center items-center absolute top-[11vh] right-[25vw]">
                        <svg width="36" height="36" viewBox="0 0 24 24">
                            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="orange" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='header_text flex justify-center w-[100%] mt-4 '>

                <div className='text_inside text-center'>
                    <h2 className='text-[42px] text-center text-black leading-[3.6rem] font-bold'>
                        <span className='after relative mr-2'> Boost</span>
                        Your Business With Our Tailored <br />

                        Community Growth Strategies.
                    </h2>
                    <div className="flex w-[100%] justify-center">
                        <button className='btn main_background p-2 rounded-[16px] w-[200px] mt-5 text-white font-bold sub_font text-[20px] flex justify-evenly'>
                            Get started
                            <span>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title />
                                    <g id="Complete">

                                        <g id="arrow-up-right">
                                            <g>
                                                <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                                                <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 sm:h-[13vh] md:h-[20vh] lg:h-[13vh] xl:h-[30vh] mt-[120px] gray_div relative gap-2'>
                <div className='black_box relative w-full'>
                    <div className='div_cols relative flex justify-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-full sm:w-[75%] md:w-[50%] absolute top-[-12vh] back_black">
                            <div className="p-6 rounded-lg">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sub_font">+$10M</h2>
                                <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Amount Raised</p>
                            </div>
                            <div className="p-6 rounded-lg card relative">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sub_font">+2M</h2>
                                <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Members Of Community </p>
                            </div>
                            <div className=" p-6 rounded-lg card relative">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sub_font">50</h2>
                                <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Funnels Built</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;