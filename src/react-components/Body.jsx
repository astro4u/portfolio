import { Transition } from "@headlessui/react";
import { AboutMe } from "./body-components/AboutMe.jsx";
import { Interests } from "./body-components/Interests.jsx";
import { Projects } from "./body-components/Projects.jsx";
import { Skills } from "./body-components/Skills.jsx"
import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"



export function Body() {



    return (
        <div>
            <div id="about-me" className="grid grid-cols-3 grid-rows-1 h-[100vh]">
                
                <div className="sticky col-start-1 row-start-1 justify-self-center self-center text-white font-bold text-7xl rotate-315">About Me</div>
                <div className="col-start-2 row-start-1 w-[50rem] justify-self-center self-center"><AboutMe /></div>              
            </div>
            <div id="skills" className="grid grid-cols-3 grid-rows-1 h-[100vh]">
                <div className="sticky col-start-1 row-start-1 justify-self-center self-center text-white font-bold text-7xl rotate-315">Skills</div>
                <div className="col-start-2 row-start-1 w-[60rem] justify-self-center self-center"><Skills /></div>
            </div>
            <div id="interests" className="grid grid-cols-3 grid-rows-1 h-[100vh]">
                <div className="sticky col-start-1 row-start-1 justify-self-center self-center text-white font-bold text-7xl rotate-315">Interests</div>
                <div className="col-start-2 row-start-1 w-[60rem] justify-self-center self-center"><Interests /></div>
            </div>
            <div id="projects" className="grid grid-cols-3 grid-rows-1 h-[100vh]">
                <div className="sticky col-start-1 row-start-1 justify-self-center self-center text-white font-bold text-7xl rotate-315">Projects</div>
                <div className="col-start-2 row-start-1 w-[60rem] justify-self-center self-center"><Projects /></div>
            </div>
        </div>
    )
}