import { openInNewWindow } from "../pages/Home/HomeVM";
import StarCount from "./StarCount";

export function ProjectCard(props) {

    return (
        <div
            onClick={() => { openInNewWindow(props.repo); }}
            className="card project-card"
        >

            <div className="d-flex">
                <h4 className="flexy" >{props.title}</h4>

                <StarCount
                    stars={props.stars}
                    project={props.project}
                />
            </div>

            <p>{props.about}</p>

            <div className="row no-spacing d-flex justify-content-center">
                <img className="fit" src={props.image} height={400}></img>
            </div>

        </div>
    )
}