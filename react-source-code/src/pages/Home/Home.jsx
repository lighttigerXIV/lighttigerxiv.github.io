
//Images
import ProfilePicture from "../../images/profile-picture.jpeg"

export default function HomePage() {

    return (
        <div className="m-5 ">
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="col-span-1">
                    <div className="text-xl">About Me</div>
                    <div className=" flex flex-col justify-center md p-2 bg-skin-mantle rounded-2xl border-2 border-skin-surface0 ">

                        <div className="rounded-lg aspect-auto bg-skin-base justify-center items-center flex p-1">
                            <img alt="profile" className="object-contain  h-44 col-span-12 rounded-lg" src={ProfilePicture}></img>
                        </div>

                        <div className="mt-2">
                            My name is <b>Afonso Fonseca</b> also known as <b>lighttigerXIV</b>.<br></br>
                            I am 22 years old from Portugal and i consider myself a fullstack developer. I can do any kind of work like small scripts in linux, Android apps, IOS apps, APIs and Web Development.
                            I always try to deliver my programs the most stable and pretty experience as possible.
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="text-xl">Likes</div>
                    <div className="bg-skin-mantle p-2 rounded-2xl border-2 border-skin-surface0 aspect-auto flex flex-col ">
                        <ul className="ml-5 list-disc">
                            <li>I love Catppuccin</li>
                            <li>I love programming</li>
                            <li>I love listening to music</li>
                            <li>I love watching Anime</li>
                            <li>I use Arch Linux btw</li>
                            <li>My overall favourite programming language is Rust</li>
                            <li>I like pushing myself to be better</li>
                            <li>My favourite dish is bitoque</li>
                            <li>My favourite cookie is OREO</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="text-xl mt-5">Studies</div>
            <div className="col-span-1 bg-skin-mantle p-2 rounded-2xl border-2 border-skin-surface0">
                <ul className="ml-5 list-disc">
                    <li><b>TPSI</b> at Agrupamento de Escolas de Oliveira do Hospital</li>
                    <li><b>CTESP</b> at Escola Superior de Tecnologia e Gestão de Oliveira do Hospital </li>
                    <li><b>LEI</b> at Escola Superior de Tecnologia e Gestão de Oliveira do Hospital (currently studying)</li>
                </ul>
            </div>
        </div>
    )
}