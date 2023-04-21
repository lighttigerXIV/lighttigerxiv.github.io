import { useEffect } from "react";
import Star from "../images/star.svg"
import { XSmallHorizontalSpacer } from "./Spacers";

export default function StarCount(props) {

    const stars = props.stars;

    return (
        <div>
            {
                stars[props.project] !== undefined ?

                    <div>
                        <XSmallHorizontalSpacer />

                        <div className="d-flex">

                            <XSmallHorizontalSpacer />

                            <h4>{stars[props.project]}</h4>

                            <div className="d-flex align-items-top">
                                <img className="fit" src={Star} height="28"></img>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )

    
}