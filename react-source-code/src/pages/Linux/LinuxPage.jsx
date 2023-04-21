import { useEffect, useState } from "react";
import { SmallVerticalSpacer } from "../../components/Spacers";
import Catppuccinifier from "../../images/catppuccinifier.png"
import CatppuccinUlauncher from "../../images/catppuccin-ulauncher.webp"
import TerminalRunner from "../../images/terminal-runner.png"
import SessionManager from "../../images/session-manager.png"
import { getProjectsStars } from "../../Functions";
import { ProjectCard } from "../../components/ProjectCard";

export default function LinuxPage() {

    const [projectsStars, setProjectsStars] = useState({})

    useEffect(() => {

        window.scrollTo(0, 0);

        if (Object.keys(projectsStars).length === 0) {

            getProjectsStars(
                [
                    "lighttigerxiv/catppuccinifier",
                    "catppuccin/ulauncher",
                    "lighttigerxiv/ulauncher-terminal-runner-extension",
                    "lighttigerxiv/ulauncher-session-manager"
                ],
                (stars) => {

                    setProjectsStars(stars);
                }
            )
        }

    }, []);

    return (
        <div className="container-fluid medium-padding">
            <div className="row no-spacing">
                <div className="col"></div>
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">

                    <h2>Linux Projects</h2>

                    <ProjectCard
                        stars={projectsStars}
                        repo="https://github.com/lighttigerXIV/catppuccinifier"
                        title="Catppuccinifier"
                        project="lighttigerxiv/catppuccinifier"
                        about="Catppuccinifier is a tool to apply a color filter of the catppuccin flavors
                            to images. It's built with gtk4 and rust and it's available for linux and windows (only cli version)."
                        image={Catppuccinifier}
                    />

                    <SmallVerticalSpacer />

                    <ProjectCard
                        stars={projectsStars}
                        repo="https://github.com/catppuccin/ulauncher"
                        title="Catppuccin Ulauncher"
                        project="catppuccin/ulauncher"
                        about="Catppuccinifier Ulauncher is a theme made for ulauncher with catppuccinn flavors."
                        image={CatppuccinUlauncher}
                    />

                    <SmallVerticalSpacer />

                    <ProjectCard
                        stars={projectsStars}
                        repo="https://github.com/lighttigerXIV/ulauncher-terminal-runner-extension"
                        title="Ulauncher Terminal Runner"
                        project="lighttigerxiv/ulauncher-terminal-runner-extension"
                        about="Terminal Runner is a ulauncher extension to run commands without the need to open the terminal."
                        image={TerminalRunner}
                    />

                    <SmallVerticalSpacer />

                    <ProjectCard
                        stars={projectsStars}
                        repo="https://github.com/lighttigerXIV/ulauncher-session-manager"
                        title="Ulauncher Session Manager"
                        project="lighttigerxiv/ulauncher-session-manager"
                        about="Session Manager is a ulauncher extension to run session commands like Shutdown, Reboot, Suspend, Hibernate and Logout"
                        image={SessionManager}
                    />
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}