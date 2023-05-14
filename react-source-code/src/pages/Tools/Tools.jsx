import { ReactComponent as ArchLinuxIcon } from "../../images/arch.svg"
import { ReactComponent as WindowsIcon } from "../../images/windows.svg"
import { ReactComponent as VSCodeIcon } from "../../images/code.svg"
import { ReactComponent as AndroidStudioIcon } from "../../images/android-studio.svg"
import { ReactComponent as RustIcon } from "../../images/rust.svg"
import { ReactComponent as KotlinIcon } from "../../images/kotlin.svg"
import { ReactComponent as PythonIcon } from "../../images/python.svg"
import { ReactComponent as SwiftIcon } from "../../images/swift.svg"
import { ReactComponent as JavascriptIcon } from "../../images/javascript.svg"
import { ReactComponent as JavaIcon } from "../../images/java.svg"
import { ReactComponent as CSharpIcon } from "../../images/c-sharp.svg"


export default function ToolsPage() {

    const iconClasses = "h-16 w-16 fill-skin-text"
    const iconStrokeClasses = "h-16 w-16 stroke-skin-text fill-transparent"

    function ToolCard(props) {

        return (
            <div className="p-2 bg-skin-mantle aspect-square col-span-1 rounded-2xl border-2 border-skin-surface0 flex justify-center flex-col">
                <div className="flex justify-center">
                    {props.icon}
                </div>
                <div className="flex justify-center">
                    <div className="mt-3 text-ellipsis truncate">{props.name}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-5">
            <div className="text-xl">Tools I Used</div>
            <div className="text-lg mt-5">OS's</div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                
                <ToolCard
                    name="Arch Linux"
                    icon = {<ArchLinuxIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Windows"
                    icon = {<WindowsIcon className={iconClasses}/>}
                />
            </div>

            <div className="text-lg mt-5">IDE's</div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                
                <ToolCard
                    name="Visual Studio Code"
                    icon = {<VSCodeIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Android Studio"
                    icon = {<AndroidStudioIcon className={iconClasses}/>}
                />
            </div>

            <div className="text-lg mt-5">Languages</div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
                
                <ToolCard
                    name="Rust"
                    icon = {<RustIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Kotlin"
                    icon = {<KotlinIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Python"
                    icon = {<PythonIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Javascript"
                    icon = {<JavascriptIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Swift"
                    icon = {<SwiftIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="Java"
                    icon = {<JavaIcon className={iconClasses}/>}
                />

                <ToolCard
                    name="C#"
                    icon = {<CSharpIcon className={iconStrokeClasses}/>}
                />
            </div>
        </div>
    )
}