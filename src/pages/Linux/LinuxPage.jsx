import { MediumVerticalSpacer } from "../../components/Spacers";
import Catppuccinifier from "../../images/catppuccinifier.png"
import { openInNewWindow } from "../Home/HomeVM";

export default function LinuxPage() {

    return (
        <div className="container-fluid">
            <div className="row no-spacing">
                <div className="col"></div>
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">

                    <MediumVerticalSpacer />

                    <h2>Linux Projects</h2>

                    <div
                        onClick={() => { openInNewWindow("https://github.com/lighttigerXIV/catppuccinifier"); }}
                        className="card project-card"
                    >
                        <h4>Catppuccinifier</h4>
                        <p>
                            Catppuccinifier is a tool to apply a color filter of the catppuccin flavors
                            to images. It's built with gtk4 and rust and it's available for linux and windows (only cli version).
                        </p>

                        <div className="row no-spacing d-flex justify-content-center">
                            <img className="fit" src={Catppuccinifier} height={400}></img>
                        </div>

                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}