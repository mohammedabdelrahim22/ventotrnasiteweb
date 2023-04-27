import './community.css'
import { images_cards, learn_image } from '../../constans/constans'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
function Community() {
    return (
        <div className='Community p-5 mt-[40px] bg-[#F8F8F8] "min-h-[80vh]'>

            <div className='header_text pt-5'>
                <p className='font-bold main_color sub_font text-[20px]'>
                    What Makes Us Different
                </p>
                <div className='flex justify-between flex-wrap w-full overflow-hidden'>
                    <h3 className='text-[60px] text-black sub_font font-bold pr-5 mt-5'>
                        We Build Communities  <br />
                        That Supercharge Businesses
                    </h3>
                    <div className='right_side'>
                        <Link to='/MultiStepForm'>
                            <button className="main_background p-2 rounded-[16px] w-[200px] mt-[3vh] sm:mt-[11vh] md:mt-[3vh] lg:mt-[10vh] text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title></title>
                                    <g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    </polyline>
                                        <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9">
                                        </line>
                                    </g>
                                    </g>
                                    </g>
                                </svg>
                            </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <p className='sub_font text-[16px] mt-4 opacity-80'>
                    Leveraging Over A Decade Of Expertise In Marketing, Branding, And Personal Branding, Along With Our Vast Network Of Prominent Social Media Influencers, We Provide Customised Growth Strategies To Help You Achieve Your Business Goals Within Just Three Months.
                </p>
            </div>
            <div className='images_div mt-5'>
                <div className='grid grid-cols-1 sm:grid-cols-3 grid-row-2 gap-1 overflow-hidden'>
                    {images_cards.map((im) => {
                        return (
                            <div className='image_1 overflow-hidden max-h-[391px]' key={im.id}>
                                <div className='image_inside'>
                                    <img src={im.image} className='object-cover h-[100%] md:w-full' />
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 mt-3 w-full relative items-baseline'>
                    <div className='position_class p-5 bg-[#ddd] rounded-[20px]  w-[400px] h-[80px] absolute items-center flex justify-center  justify-around left-[7%] sm:left-[34%] top-[-8%] items-baseline'>
                        <img src={logo} className='object-cover w-[150px]' />
                        <h3 className='text-[30px] text-black sub_font'>
                            Community
                        </h3>
                    </div>
                    {learn_image.map((i) => {
                        return (
                            <div className='image_1 overflow-hidden max-h-[391px]' key={i.id}>
                                <div className='image_inside'>
                                    <img src={i.image} className='object-cover h-[100%] w-[100%]' />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Community
