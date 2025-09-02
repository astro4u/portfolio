import projects from './projects.json'

export function Projects() {
    return (
        <div className="w-full flex flex-col justify-center mt-80">
            <div className="grid sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 lg:h-[40rem] sm:h-[100rem] w-[80%] self-center gap-2">
                {projects.map((project) => (
                    <a
                        key={project.key}
                        target="_blank"
                    >
                        <img className="rounded-full h-[15rem] w-[15rem] justify-self-center border-accent border-2 hover:drop-shadow-accent hover:drop-shadow-lg"
                            src={project.imageSrc}
                            alt={project.title}
                            onClick={() => window.open(project.link)}
                        />
                        <div className="p-2">
                            <h3 className="text-lg text-white font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-300">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}