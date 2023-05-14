import { ReactComponent as CopyIcon } from "../../images/copy.svg"
import { ReactComponent as GitHubIcon } from "../../images/github.svg"
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg"
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg"
import { ReactComponent as DiscordIcon } from "../../images/discord.svg"
import { copy } from "./ContactsVM"


export default function ContactsPage() {


    function SocialCard(props) {

        return (
            <div
                className="p-2 bg-skin-mantle hover:bg-skin-surface0 flex flex-col rounded-xl border-2 border-skin-surface0 aspect-square justify-center items-center cursor-pointer col-span-1"
                onClick={() => {

                    if (props.copy) {
                        copy(props.link);
                    } else {
                        window.open(props.link, "_blank");
                    }

                }}
            >
                {props.icon}
                <div className="mt-3">
                    {props.name}
                </div>
            </div>
        )
    }


    return (
        <div className="p-5">
            <div className="text-xl">Contacts</div>

            <div className="text-lg mt-5">Emails</div>

            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
                <div
                    className="col-span-1 hover:bg-skin-surface0 cursor-pointer bg-skin-mantle rounded-xl p-2 border-2 border-skin-surface0"
                    onClick={() => { copy("afonsofonseca14401@gmail.com"); }}
                >
                    <div className="flex items-center ">
                        <div className="truncate">afonsofonseca14401@gmail.com</div>
                        <div className="flex-1"></div>
                        <CopyIcon className="ml-1 h-5 w-5 stroke-skin-text fill-transparent" />
                    </div>
                </div>
                <div
                    className="col-span-1 hover:bg-skin-surface0 cursor-pointer bg-skin-mantle rounded-xl p-2 border-2 border-skin-surface0"
                    onClick={() => { copy("lighttigerxiv@gmail.com"); }}
                >
                    <div className="flex items-center ">
                        <div className="truncate">lighttigerxiv@gmail.com</div>
                        <div className=" flex-1"></div>
                        <CopyIcon className="ml-1 h-5 w-5 stroke-skin-text fill-transparent" />
                    </div>
                </div>
            </div>

            <div className="text-lg mt-5">Socials</div>

            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                <SocialCard
                    name="GitHub"
                    icon={<GitHubIcon className="fill-skin-text object-contain h-16 w-16" />}
                    link="https://github.com/lighttigerXIV"
                />

                <SocialCard
                    name="Twitter"
                    icon={<TwitterIcon className="fill-skin-text object-contain h-16 w-16" />}
                    link="https://twitter.com/lighttigerxiv"
                />

                <SocialCard
                    name="Instagram"
                    icon={<InstagramIcon className="fill-skin-text object-contain h-16 w-16" />}
                    link="https://www.instagram.com/lighttigerxiv/"
                />

                <SocialCard
                    name="Discord"
                    icon={<DiscordIcon className="fill-skin-text object-contain h-16 w-16" />}
                    link="lighttigerXIV#6268"
                    copy={true}
                />
            </div>
        </div>
    )
}