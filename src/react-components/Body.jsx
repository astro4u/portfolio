import { AboutMe } from "./body-components/AboutMe.jsx";
import { Interests } from "./body-components/Interests.jsx";
import { Projects } from "./body-components/Projects.jsx";
import { Skills } from "./body-components/Skills.jsx"

export function Body() {
    return (
        <div>
            <AboutMe />
            <Skills />
            <Interests />
            <Projects />
        </div>
    )
}