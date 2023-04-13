import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai"

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 1500,
            delay: 200,
            smooth: true
        });
    };

    return (
        <button onClick={handleScrollToTop} className=" rounded-full border-black shadow-sm sticky">

            <div className=" rounded-full border border-black shadow-sm p-2 float-right">
                <AiOutlineArrowUp className=" w-6 h-6" />
            </div >

        </button>
    );
};

export default ScrollToTopButton;
