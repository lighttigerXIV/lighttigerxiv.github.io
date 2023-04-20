import ProfilePicture from "../../images/profile-picture.jpeg"
import GitHubLogo from "../../images/github.svg"
import InstagramLogo from "../../images/instagram.svg"
import TwitterLogo from "../../images/twitter.svg"
import AndroidStudioLogo from "../../images/android-studio.svg"
import JetbrainsIdeaLogo from "../../images/idea.svg"
import StudioCodeLogo from "../../images/code.svg"
import MicroLogo from "../../images/micro.svg"
import KotlinLogo from "../../images/kotlin.svg"
import JavaLogo from "../../images/java.svg"
import SwiftLogo from "../../images/swift.svg"
import JavascriptLogo from "../../images/javascipt.svg"
import RustLogo from "../../images/rust.svg"
import PythonLogo from "../../images/python.svg"
import BashLogo from "../../images/bash.svg"
import AndroidLogo from "../../images/android.svg"
import LinuxLogo from "../../images/tux.svg"



import { SmallVerticalSpacer, XSmallHorizontalSpacer, MediumVerticalSpacer } from "../../components/Spacers"
import { useNavigate } from "react-router"
import { openInNewWindow } from "./HomeVM"

export default function HomePage() {

    const navigate = useNavigate();

    const SocialCard = (props) => {

        return (
            <div
                className="row no-spacing social-card justify-content-center"
                onClick={() => openInNewWindow(props.url)}
            >
                <img className="flexy" src={props.image} height={40}></img>

                <SmallVerticalSpacer />

                <div className="d-flex justify-content-center">{props.name}</div>
            </div>
        )
    }

    const ItemCard = (props) => {

        return (
            <div
                onClick={() => props.onClick()}
                className="no-spacing d-flex col-6 item-card justify-content-center"
            >
                <div className="row no-spacing ">
                    <img className="col-12" src={props.image} height={100}></img>

                    <SmallVerticalSpacer />

                    <p className="no-spacing d-flex justify-content-center">{props.name}</p>
                </div>
            </div>
        )
    }

    const LanguageCard = (props) => {

        return (
            <div
                className="no-spacing d-flex col-lg-3 col-md-4 col-6 language-card"
            >
                <div className="row no-spacing">
                    <img className="col-12" src={props.image} height={100}></img>

                    <SmallVerticalSpacer />

                    <p className={"no-spacing d-flex justify-content-center " + props.experience}>{props.name}</p>
                </div>
            </div>
        )
    }


    return (
        <div className="container-fluid">
            <div className="row no-spacing">
                <div className="col"></div>
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">

                    <MediumVerticalSpacer />

                    <h3>About Me</h3>

                    <div className="card">
                        <div className="row no-spacing">
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                    className="medium-round"
                                    src={ProfilePicture}
                                    height={200}>
                                </img>
                            </div>
                            <div className="row no-spacing col-lg-8">
                                <div className="d-flex justify-content-center align-items-center">
                                    <h4>@lighttigerXIV</h4>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">

                                    <SocialCard
                                        name="GitHub"
                                        url="https://github.com/lighttigerXIV"
                                        image={GitHubLogo}
                                    />

                                    <SocialCard
                                        name="Instagram"
                                        url="https://www.instagram.com/lighttigerxiv/"
                                        image={InstagramLogo}
                                    />

                                    <SocialCard
                                        name="Twitter"
                                        url="https://twitter.com/lighttigerxiv"
                                        image={TwitterLogo}
                                    />

                                </div>
                            </div>
                        </div>

                        <MediumVerticalSpacer />

                        <div className="row no-spacing">
                            <p>Hi, my name lighttigerXIV or my real name "Afonso Fonseca".</p>
                            <p>
                                I am a portuguese programmer, 22 years in my shoulders, been programming for 6 years and i consider myself a fullstack developer. I love every bit of programming
                                wich is either by making small scripts in linux, developing APIS or doing some frontend to the applications i make.
                            </p>
                            <p>
                                I am always trying to learn new technologies as time goes by.
                            </p>
                            <p>
                                My favourite development environment is Android.
                            </p>
                        </div>
                    </div>

                    <MediumVerticalSpacer />

                    <h3>Technologies I Use</h3>

                    <div className="card">

                        <MediumVerticalSpacer />

                        <h5>IDE'S / Text Editors</h5>
                        <div className="row">

                            <ItemCard
                                name="Android Studio"
                                image={AndroidStudioLogo}
                                onClick={()=>{openInNewWindow("https://developer.android.com/studio");}}
                            />

                            <ItemCard
                                name="Intellij Idea"
                                image={JetbrainsIdeaLogo}
                                onClick={()=>{openInNewWindow("https://www.jetbrains.com/idea/");}}
                            />

                            <ItemCard
                                name="Visual Studio Code"
                                image={StudioCodeLogo}
                                onClick={()=>{openInNewWindow("https://code.visualstudio.com/");}}
                            />

                            <ItemCard
                                name="Micro"
                                image={MicroLogo}
                                onClick={()=>{openInNewWindow("https://github.com/micro/micro");}}
                            />
                        </div>

                        <SmallVerticalSpacer />

                        <h5>Programming Languages</h5>
                        <div className="row no-spacing">

                            <LanguageCard
                                experience="experienced"
                                name="Kotlin"
                                image={KotlinLogo}
                            />

                            <LanguageCard
                                experience="experienced"
                                name="Java"
                                image={JavaLogo}
                            />

                            <LanguageCard
                                experience="experienced"
                                name="Python"
                                image={PythonLogo}
                            />

                            <LanguageCard
                                experience="experienced"
                                name="Javascript"
                                image={JavascriptLogo}
                            />
                            <LanguageCard
                                experience="not-so-experienced"
                                name="Swift"
                                image={SwiftLogo}
                            />

                            <LanguageCard
                                experience="not-so-experienced"
                                name="Rust"
                                image={RustLogo}
                            />

                            

                            <LanguageCard
                                experience="not-so-experienced"
                                name="Bash"
                                image={BashLogo}
                            />
                        </div>

                        <MediumVerticalSpacer />

                        <div className="row no-spacing d-flex">
                            <div className="d-flex flexy justify-content-end">
                                <div className="experienced-dot"></div>
                                <XSmallHorizontalSpacer />
                                Experienced
                            </div>
                            <div className="d-flex flexy justify-content-start">
                                <div className="not-so-experienced-dot"></div>
                                <XSmallHorizontalSpacer />
                                Not So Experienced
                            </div>
                        </div>
                    </div>

                    <MediumVerticalSpacer />

                    <h3>My Open Source Projects</h3>

                    <div className="card">
                        <div className="row no-spacing">
                            <ItemCard
                                name="Android"
                                image={AndroidLogo}
                                onClick={() => { navigate("android-projects"); }}
                            />

                            <ItemCard
                                name="Linux"
                                image={LinuxLogo}
                                onClick={() => { navigate("linux-projects"); }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

            <MediumVerticalSpacer />

        </div>
    )
}