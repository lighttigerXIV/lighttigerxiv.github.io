import { MediumVerticalSpacer } from "../../components/Spacers";
import SimpleMP from "../../images/simple-mp.png"
import { openInNewWindow } from "../Home/HomeVM";

export default function AndroidPage() {

    return (
        <div className="container-fluid">
            <div className="row no-spacing">
                <div className="col"></div>
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">

                    <MediumVerticalSpacer />

                    <h2>Android Projects</h2>

                    <div
                        onClick={() => { openInNewWindow("https://github.com/lighttigerXIV/SimpleMP-Compose"); }}
                        className="card project-card"
                    >
                        <h4>Simple MP</h4>
                        <p>
                            Simple MP is a music player buit in kotlin and jetpack compose.
                            It's very easy to use and can be customized with material you colors
                        </p>

                        <div className="row no-spacing d-flex justify-content-center">
                            <img className="fit" src={SimpleMP} height={400}></img>
                        </div>

                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}