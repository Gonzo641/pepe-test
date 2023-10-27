"use client";

import Slider from "react-slick";
import Image from "next/image";
import pizza from "@/images/pizza.jpg";
import burger from "@/images/burger.jpg";
import amuse from "@/images/amuseb.jpg";
import dessert from "@/images/dessert.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import BannerText from "./BannerText";
import { useSectionInView } from "../../lib/hooks";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from "@/context/active-section-context";

const Banner = () => {

    const { ref } = useSectionInView('Home', 0);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const NextArrow = (props: any) => {
        const {onClick} = props;
        return (
            <div className="p-3 bg-slate-100 hover:text-red-600
                            hover:bg-white cursor-pointer duration-200
                            rounded-full text-2xl flex items-center justify-center
                            z-20 absolute left-2 top-1/2"
                 onClick={onClick}>
                <PiCaretLeftLight />
            </div>
        )
    };
    
    const PrevArrow = (props: any) => {
        const {onClick} = props;
        return (
            <div className="p-3 bg-slate-100 hover:text-red-600
                          hover:bg-white cursor-pointer duration-200
                            rounded-full text-2xl flex items-center justify-center
                            z-20 absolute right-2 top-1/2"
            onClick={onClick}>
                <PiCaretRightLight />
            </div>
        )
    }; 

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <PrevArrow />,
        prevArrow: <NextArrow />,
      };
  return (
    <div className="relative scroll-mt-28"
         ref={ref}
         id="home">
        <Slider {...settings}>
            <div className=" w-full h-full relative">
                <Image 
                    src={pizza} 
                    alt="practice1" 
                    className="w-full h-[900px] relative object-cover"
                    priority
                />
                <BannerText title="Pizza mama" description="Notre nouveau produit à durée limitée"/>
            </div>
            <div className=" w-full h-full relative">
                <Image 
                    src={burger} 
                    alt="practice2" 
                    className="w-full h-[900px] relative object-cover"
                />
                <BannerText title="Papy Burger"description="Notre nouveau produit à durée limitée"/>
            </div>
            <div className=" w-full h-full relative">
                <Image 
                    src={amuse} 
                    alt="practice3" 
                    className="w-full h-[900px] relative object-cover"
                />
                <BannerText title="Croquettes chèvre"description="Notre nouveau produit à durée limitée"/>
            </div>
            <div className=" w-full h-full relative">
                <Image 
                    src={dessert} 
                    alt="practice3" 
                    className="w-full h-[900px] relative object-cover"
                />
                <BannerText title="Tiramisu Fraise"description="Notre nouveau produit à durée limitée"/>
            </div>
        </Slider>
        {/* <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" /> */}
    </div>
  )
}
export default Banner;