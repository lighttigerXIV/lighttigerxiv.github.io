import './App.css';
import { useState } from 'react';

//Pages
import HomePage from './pages/Home/Home';
import ContactsPage from './pages/Contacts/Contacts';
import ProjectsPage from './pages/Projects/Projects';
import ToolsPage from "./pages/Tools/Tools";

//Images
import { ReactComponent as PalleteIcon } from "./images/pallete.svg"
import { ReactComponent as CloseIcon } from "./images/close.svg"
import { ReactComponent as Logo } from "./images/logo-triangle.svg"
import { ReactComponent as PersonIcon } from "./images/person.svg"
import { ReactComponent as BriefcaseIcon } from "./images/briefcase.svg"
import { ReactComponent as ToolIcon } from "./images/tool.svg"
import { ReactComponent as MessageIcon } from "./images/message.svg"
import { ReactComponent as MenuIcon } from "./images/menu.svg"

function App() {


  const fillTabIconClasses = "h-5 w-5 fill-skin-text";
  const fillSmallTabIconClasses = "h-7 w-7 fill-skin-text";
  const strokeTabIconClasses = "h-5 w-5 stroke-2 stroke-skin-text fill-transparent";
  const strokeSmallTabIconClasses = "h-7 w-7 stroke-2 stroke-skin-text fill-transparent";
  const [selectedPage, setSelectedPage] = useState("about");
  const [showSmallNavbar, setShowSmallNavbar] = useState(false);
  const [colorScheme, setColorScheme] = useState(localStorage.getItem("colorScheme"));


  function switchColorScheme() {

    const scheme = localStorage.getItem("colorScheme");
    var newColorScheme = ""

    if (scheme === null || scheme === "theme-mocha") {
      newColorScheme = "theme-latte"
    }
    if (scheme === "theme-latte") {
      newColorScheme = "theme-frappe"
    }

    if (scheme === "theme-frappe") {
      newColorScheme = "theme-macchiato"
    }

    if (scheme === "theme-macchiato") {
      newColorScheme = "theme-mocha"
    }

    localStorage.setItem("colorScheme", newColorScheme);
    setColorScheme(newColorScheme);
  }



  function NavBarTab(props) {

    const isPageSelected = selectedPage === props.tabID
    const [isHovered, setIsHovered] = useState(false)

    let iconSelectedClasses = ""
    let nameSelectedClasses = ""

    if (isPageSelected || isHovered) {
      iconSelectedClasses = "bg-skin-surface0"
      nameSelectedClasses = "font-bold"
    } else {
      iconSelectedClasses = ""
      nameSelectedClasses = ""
    }

    return (
      <div className="mt-4" onMouseOver={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
        <div
          className={"text-sm cursor-pointer rounded-md flex flex-col items-center "}
          onClick={() => {
            setSelectedPage(props.tabID);
            setShowSmallNavbar(false);
          }}
        >
          <div className={"flex justify-center items-center w-20 h-9 rounded-full " + iconSelectedClasses}>
            {props.icon}
          </div>

          <div className={"" + nameSelectedClasses}>
            {props.displayName}
          </div>
        </div>
      </div>
    )
  }

  function SmallNavBarTab(props) {

    const isPageSelected = selectedPage === props.tabID
    const [isHovered, setIsHovered] = useState(false)

    let divSelectedClasses = ""
    let nameSelectedClasses = ""

    if (isPageSelected || isHovered) {
      divSelectedClasses = "bg-skin-surface0 rounded-full"
      nameSelectedClasses = "font-bold"
    } else {
      divSelectedClasses = ""
      nameSelectedClasses = ""
    }

    return (

      <div className={' p-1 mt-1 ' + divSelectedClasses} onMouseOver={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
        <div
          className={"text-sm cursor-pointer rounded-full flex items-center mr-2 ml-2 "}
          onClick={() => {
            setSelectedPage(props.tabID);
            setShowSmallNavbar(false);
          }}
        >
          <div>
            {props.icon}
          </div>

          <div className={"" + nameSelectedClasses}>
            {props.displayName}
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className={"bg-skin-base h-screen text-skin-text " + colorScheme}>
      <div className='h-screen max-h-screen flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col bg-skin-base'>

        {/* Header Bar */}
        <div className='2xl:hidden pl-5 pr-5 pt-2 pb-2 xl:hidden lg:hidden md:hidden flex bg-skin-crust items-center'>
          <MenuIcon
            className="h-6 w-6 fill-skin-text"
            onClick={() => { setShowSmallNavbar(!showSmallNavbar); }}
          />

          <div className='flex-grow'></div>

          <div className='flex items-center'>
            <Logo className="h-8 w-8 stroke-skin-blue fill-transparent" />

            <div className='ml-1'>
              lighttigerXIV
            </div>
          </div>
        </div>

        {/*Navbar*/}
        <div className='bg-skin-crust p-2 2xl:flex xl:flex lg:flex md:flex hidden flex-col'>
          <NavBarTab
            tabID="about"
            icon={<PersonIcon className={fillTabIconClasses} />}
            displayName="About Me"
          />
          <NavBarTab
            tabID="projects"
            icon={<BriefcaseIcon className={fillTabIconClasses} />}
            displayName="Projects"
          />
          <NavBarTab
            tabID="tools"
            icon={<ToolIcon className={strokeTabIconClasses} />}
            displayName="Tools"
          />
          <NavBarTab
            tabID="contacts"
            icon={<MessageIcon className={fillTabIconClasses} />}
            displayName="Contacts"
          />

          <div className='flex-grow'></div>

          <div className='flex justify-center items-center'>
            <div
              className='border-2 border-skin-text flex items-center p-2 rounded-full hover:bg-skin-surface0 cursor-pointer'
              onClick={() => { switchColorScheme(); }}
            >
              <PalleteIcon className=" rounded-full p-1 h-7 w-7 fill-skin-text" />
            </div>
          </div>
        </div>

        {/*Small Navbar*/}
        {
          showSmallNavbar ?
            <div className='flex h-screen w-screen absolute' onClick={() => { }} >
              <div className=' flex-col p-2 flex w-72 overflow-hidden border-r-2 border-t-2 border-b-2 border-skin-surface0 child1 bg-skin-crust rounded-r-2xl '>
                <div className='flex  justify-end items-center'>
                  <CloseIcon
                    className="h-6 w-6 stroke-skin-text"
                    onClick={() => { setShowSmallNavbar(false); }}
                  />
                </div>

                <div>
                  <SmallNavBarTab
                    tabID="about"
                    icon={<PersonIcon className={fillSmallTabIconClasses} />}
                    displayName="About Me"
                  />
                  <SmallNavBarTab
                    tabID="projects"
                    icon={<BriefcaseIcon className={fillSmallTabIconClasses} />}
                    displayName="Projects"
                  />
                  <SmallNavBarTab
                    tabID="tools"
                    icon={<ToolIcon className={strokeSmallTabIconClasses} />}
                    displayName="Tools"
                  />
                  <SmallNavBarTab
                    tabID="contacts"
                    icon={<MessageIcon className={fillSmallTabIconClasses} />}
                    displayName="Contacts"
                  />
                </div>

                <div className='flex-grow'></div>

                <div className='flex justify-center items-center'>
                  <div
                    className='border-2 border-skin-text flex items-center p-2 rounded-full hover:bg-skin-surface0 cursor-pointer'
                    onClick={() => { switchColorScheme(); }}
                  >
                    <PalleteIcon className=" rounded-full p-1 h-7 w-7 fill-skin-text" />
                    <div>Switch Color Scheme</div>
                  </div>
                </div>
              </div>
            </div>
            :
            null
        }


        {/* Content */}
        <div className='flex-grow flex flex-col overflow-auto'>
          {
            selectedPage === "about" ? <HomePage /> : null
          }
          {
            selectedPage === "projects" ? <ProjectsPage /> : null
          }
          {
            selectedPage === "tools" ? <ToolsPage /> : null
          }
          {
            selectedPage === "contacts" ? <ContactsPage /> : null
          }
        </div>

        {
          /*
          
            <div className={"items-center " + sideBarClasses}>
          {
            showSmallNavbar ?
              <div className='flex h-screen w-screen absolute' onClick={() => { }} >
                <div className=' flex-col p-2 flex w-72 overflow-hidden border-r-2 border-t-2 border-b-2 border-skin-surface0 child1 bg-skin-crust rounded-r-2xl '>
                  <div className='flex  justify-end items-center'>
                    <CloseIcon
                      className="h-6 w-6 stroke-skin-text"
                      onClick={() => { setShowSmallNavbar(false); }}
                    />
                  </div>

                  <div>
                    <SmallNavBarTab
                      tabID="about"
                      icon={<PersonIcon className={fillSmallTabIconClasses} />}
                      displayName="About Me"
                    />
                    <SmallNavBarTab
                      tabID="projects"
                      icon={<BriefcaseIcon className={fillSmallTabIconClasses} />}
                      displayName="Projects"
                    />
                    <SmallNavBarTab
                      tabID="tools"
                      icon={<ToolIcon className={strokeSmallTabIconClasses} />}
                      displayName="Tools"
                    />
                    <SmallNavBarTab
                      tabID="contacts"
                      icon={<MessageIcon className={fillSmallTabIconClasses} />}
                      displayName="Contacts"
                    />
                  </div>

                  <div className='flex-grow'></div>

                  <div className='flex justify-center items-center'>
                    <div
                      className='border-2 border-skin-text flex items-center p-2 rounded-full hover:bg-skin-surface0 cursor-pointer'
                      onClick={() => { switchColorScheme(); }}
                    >
                      <PalleteIcon className=" rounded-full p-1 h-7 w-7 fill-skin-text" />
                      <div>Switch Color Scheme</div>
                    </div>
                  </div>
                </div>
              </div>
              :
              null
          }
        </div>

        <div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex items-center h-14 bg-skin-crust p-5'>
          <MenuIcon
            className="h-6 w-6 fill-skin-text"
            onClick={() => { setShowSmallNavbar(!showSmallNavbar); }}
          />

          <div className='flex-grow'></div>

          <div className='flex items-center'>
            <Logo className="h-8 w-8 stroke-skin-blue fill-transparent" />

            <div className='ml-1'>
              lighttigerXIV
            </div>
          </div>

        </div>


        <div className="">
          <div className="2xl:block xl:block lg:block md:block sm:block hidden  h-screen">
            <div className='p-2 flex flex-col h-screen'>
              <NavBarTab
                tabID="about"
                icon={<PersonIcon className={fillTabIconClasses} />}
                displayName="About Me"
              />
              <NavBarTab
                tabID="projects"
                icon={<BriefcaseIcon className={fillTabIconClasses} />}
                displayName="Projects"
              />
              <NavBarTab
                tabID="tools"
                icon={<ToolIcon className={strokeTabIconClasses} />}
                displayName="Tools"
              />
              <NavBarTab
                tabID="contacts"
                icon={<MessageIcon className={fillTabIconClasses} />}
                displayName="Contacts"
              />

              <div className='flex-grow'></div>

              <div className='flex justify-center items-center'>
                <div
                  className='border-2 border-skin-text flex items-center p-2 rounded-full hover:bg-skin-surface0 cursor-pointer'
                  onClick={() => { switchColorScheme(); }}
                >
                  <PalleteIcon className=" rounded-full p-1 h-7 w-7 fill-skin-text" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full max-h-full">

            {
              selectedPage === "about" ? <HomePage /> : null
            }
            {
              selectedPage === "projects" ? <ProjectsPage /> : null
            }
            {
              selectedPage === "tools" ? <ToolsPage /> : null
            }
            {
              selectedPage === "contacts" ? <ContactsPage /> : null
            }
          </div>
        </div>
           */
        }


      </div>


    </div>
  );
}

export default App;
