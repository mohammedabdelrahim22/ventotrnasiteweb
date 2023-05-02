import { useState } from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import logo from '../../assets/logo/Logo.png';
import head from '../../assets/header/head.jpg'
import { Link } from 'react-router-dom'
import './header.css'

Modal.setAppElement('#root');
function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <div className='header min-h-[83vh] pt-5 container'>
                <div>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', maxWidth: '90%', maxHeight: '90vh' } }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" playing={true} />
                    </Modal>
                </div>
                <nav className="bg-white p-5 rounded-[20px]">
                    <div className="mx-auto px-4">
                        <div className="flex justify-between">

                            <div className="flex items-center">
                                <img className="h-8 mr-4" src={logo} alt="Logo" />
                            </div>
                            <div className="flex items-center">
                                <Link to="/MultiStepForm" className='flex items'>
                                    <span className='menu main_color font-bold text-[20px] mr-2'>
                                        Menu
                                    </span>
                                    <span className='svg_icon'>
                                        <svg width="30" height="30" viewBox="0 0 24 24">
                                            <path fill="#f5a34c" d="M2 6h20v2H2V6zm0 7h20v2H2v-2zm0 7h20v2H2v-2z" />
                                        </svg>
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </nav>
                <div className='vedio_show flex relative w-[100%] justify-center'>
                    <div className='img_show  w-[100%]  sm:w-[55%]  mt-[50px] sm:mt-[-6%]'>
                        <img src={head} alt="vedio" className='object-center object-cover' />
                    </div>
                    <div className='vedio relative'>

                        <button className="play-button w-[60px] h-[60px] rounded-[50%] flex justify-center items-center absolute top-[15vh] right-[35vw] sm:top-[2vh] sm:right-[16vh]   md:top-[6vh] md:right-[18vw]  lg:top-[11vh] lg:right-[23vw]" onClick={() => setModalIsOpen(true)}>
                            <svg width="36" height="36" viewBox="0 0 24 24">
                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="orange" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='header_text w-[100%] mt-4'>
                    <div className='text_inside text-center'>
                        <h2 className='text-[42px] text-center text-black leading-[3.6rem] font-bold'>
                            <span className='after relative mr-2'> Boost</span>
                            Your Business With Our Tailored <br />

                            Community Growth Strategies.
                        </h2>
                        <div className="flex w-[100%] justify-center">
                            <Link to='/MultiStepForm'>
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
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full p-4 h-[40vh] sm:h-[12vh] md:h-[20vh] gray_div relative gap-2'>
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