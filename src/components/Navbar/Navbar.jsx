import  { useEffect, useState } from "react";
import {FiMenu, FiX} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';



const Navbar = () => {
    const[isOpen,setIsOpen] = useState();
    const [activeSection, setActiveSection]= useState(" ");
    const [isScrolled , setIsScrolled] = useState(false);
    // Check scroll and change navbar background
    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll)
    },[]);
//    Smooth scroll functionc
    const handleMenuItemClick = (sectionId)=>{
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({behavior:"smooth"})
        }
    }
    const menuItems = [
        {id:"about",label:"About"},
        {id:"skills",label:"Skills"},
        {id:"experiene",label:"Experience"},
        {id:"projects",label:"Projects"},
        {id:"education",label:"Education"},
        {id:"contact",label:"Contact"}
       
        
    ]
  return (
    
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414]/40 bg-opacity-50 backdrop-blur-md shadow-md": "bg-transparent"
    }`}>
        <div className='text-white py-5 flex justify-between items-center'>
            {/* Logo */}
            <div className='text-lg font-semibold cursor-pointer'>
                 <span className='text-[#8245ec]'>&lt;</span>
            <span className='text-white'>Yash</span>
            <span className='text-[#8245ec]'>/</span>
            <span className='text-white'>Sharma</span>
            <span className='text-[#8245ec]'>&gt;</span>
            </div>
            {/* Desktop menu */}
            <ul className='hidden md:flex space-x-8 text-gray-300'>
                {menuItems.map((item)=>(
                    <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
                        activeSection === item.id?"text-[#8245ec]" : ""
                    }`}>
                        <button onClick={()=>handleMenuItemClick(item.id)}>
                            {item.label}
                        </button>
                    </li>

                ))}
            </ul>
            {/* social media icons */}
            <div className="hidden md:flex space-x-4">
                <a href="https://github.com/" target="_blank"
                rel="noopener noreferrer"
                className="text-grey-300 hover:text-[#8245ec]"
                >
                  <FaGithub size={24}/>  

                </a>
                 <a href="https://www.linkedin.com/in/yash-sharma-69486b307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
                rel="noopener noreferrer"
                className="text-grey-300 hover:text-[#8245ec]"
                >
                  <FaLinkedin size={24}/>  

                </a>

            </div>
            {/* mobile menu icons */}
            <div className="md:hidden">
                {
                    isOpen ? (
                    <FiX className="text-3xl text-[#8245ec]" onClick={()=>setIsOpen(false)}/>
                    ) : (
                        <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={()=>setIsOpen(true)}/>
                    )
                        
                    
                }

            </div>
            {/* mobile menu items */}
            {isOpen &&(
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/40 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 shadow-lg rounded-2xl  md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item)=>(
                            <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]":""

                            }`}>
                                <button onClick={()=> handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                             <a href="https://github.com/" target="_blank"
                                rel="noopener noreferrer"
                               className="text-grey-300 hover:text-[#8245ec]"
                               >
                              <FaGithub size={24}/>  

                             </a>
                               <a href="https://www.linkedin.com/in/yash-sharma-69486b307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-grey-300 hover:text-[#8245ec]"
                                 >
                              <FaLinkedin size={24}/>  

                             </a>
                        </div>
                    </ul>
                </div>
            )}

           
            
        </div>
    </nav>
  )
}

export default Navbar