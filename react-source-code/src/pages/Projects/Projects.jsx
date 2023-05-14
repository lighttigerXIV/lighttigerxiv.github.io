import { useEffect, useState } from "react"
import { filterProjects, getStars as getProjectStars } from "./ProjectsVM";
import SimpleMPImage from "../../images/simple-mp.png"
import CatppuccinifierImage from "../../images/catppuccinifier.png"
import TerminalRunnerImage from "../../images/terminal-runner.png"
import SessionManagerImage from "../../images/session-manager.png"
import CatppuccinUlauncherImage from "../../images/catppuccin-ulauncher.webp"

import { ReactComponent as Star } from "../../images/star.svg"

export default function ProjectsPage() {

    const [selectedFilter, setSelectedFilter] = useState("all");

    const [projects, setProjects] = useState([
        {
            repo: "lighttigerxiv/simplemp-compose",
            name: "SimpleMP",
            platforms: ["android"],
            about: "Simple MP is a music player built with kotlin and jetpack compose. It's very easy to use and can be customized with material you colors",
            stars: null,
            image: SimpleMPImage
        },
        {
            repo: "lighttigerXIV/catppuccinifier",
            name: "Catppuccinifier",
            platforms: ["linux", "windows"],
            about: "Catppuccinifier is a tool to apply a color filter of the catppuccin flavors to images. It's built with tauri and rust",
            stars: null,
            image: CatppuccinifierImage
        },
        {
            repo: "lighttigerXIV/ulauncher-terminal-runner-extension",
            name: "Ulauncher Terminal Runner",
            platforms: ["linux"],
            about: "Terminal Runner is a ulauncher extension to run commands without the need to open the terminal",
            stars: null,
            image: TerminalRunnerImage
        },
        {
            repo: "lighttigerXIV/ulauncher-session-manager",
            name: "Ulauncher Session Manager",
            platforms: ["linux"],
            about: "Session Manager is a ulauncher extension to run session commands like Shutdown, Reboot, Suspend, Hibernate and Logout",
            stars: null,
            image: SessionManagerImage
        },
        {
            repo: "catppuccin/ulauncher",
            name: "Catppuccin Ulauncher",
            platforms: ["linux"],
            about: "Catppuccin Ulauncher is a theme made for ulauncher using the catppuccin color scheme",
            stars: null,
            image: CatppuccinUlauncherImage
        }
    ]);

    const [currentProjects, setCurrentProjects] = useState(projects);


    useEffect(() => {

        projects.forEach((project, index) => {

            getProjectStars(
                project,
                (updatedProject) => {

                    let newProjects = projects;
                    newProjects[index] = updatedProject;

                    setProjects([...newProjects]);
                    setCurrentProjects(filterProjects(newProjects, selectedFilter));
                }
            )
        })

    }, [])


    function FilterItem(props) {

        function isActive() {
            if (props.id === selectedFilter) {
                return "border-skin-surface0 bg-skin-surface0"
            } else {
                return "border-skin-surface0 bg-skin-mantle"
            }
        }

        return (
            <div
                className={"p-2 hover:bg-skin-surface0 cursor-pointer border overflow-ellipsis w-20 rounded-xl flex justify-center items-center mr-2 " + isActive()}
                onClick={() => {
                    setSelectedFilter(props.id);
                    setCurrentProjects(filterProjects(projects, props.id))
                }}
            >
                {props.name}
            </div>
        )
    }

    return (
        <div className="p-5">
            <div className="text-xl">Projects</div>
            <div className="flex mt-2 overflow-x-scroll scrollbar-hide">
                <FilterItem id="all" name="All" />
                <FilterItem id="android" name="Android" />
                <FilterItem id="linux" name="Linux" />
                <FilterItem id="windows" name="Windows" />
            </div>
            <div className="mt-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2">
                {
                    currentProjects.map(project => {

                        return (
                            <div key={project.repo}
                                className="p-2 cursor-pointer bg-skin-mantle col-span-1 rounded-2xl hover:bg-skin-surface0 border-2 border-skin-surface0"
                                onClick={() => { window.open("https://github.com/" + project.repo, "_blank"); }}
                            >
                                <div className=" col-span-4 flex justify-center bg-skin-base p-1 rounded-md ">
                                    <img alt={project.name} src={project.image} className="object-contain h-32"></img>
                                </div>


                                <div className="flex mt-2">

                                    <div className="text-lg font-bold">{project.name}</div>

                                    {
                                        project.stars !== null ?
                                            <div className="flex items-center">
                                                <div className="ml-1 mr-1"> -</div>
                                                <div>
                                                    {project.stars}
                                                </div>
                                                <div>
                                                    <Star className="h-4 w-4 stroke-skin-text fill-transparent" />
                                                </div>
                                            </div>
                                            :
                                            null
                                    }

                                </div>

                                <div className="text-sm">{project.about}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}