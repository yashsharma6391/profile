import React from 'react'
import { FaInstagram,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    // smooth scroll function
    const handleScroll =(sectionId)=>{
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    };
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
        <div className="container mx-auto text-center">
            <h2 className='text-xl font-semibold text-purple-500'>
                Yash Sharma
            </h2>
            {/* ----navigation links----- */}
            <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4' >
                {[
                    {name:"About", id:"about"},                    
                    {name:"Skills", id:"skills"},
                    {name:"Experience", id:"experience"},
                    {name:"Projects", id:"projects"},
                    {name:"Education", id:"education"},
                    // {name:"Contact", id:"contact"}
                    
                ].map((item, index)=>(
                   <button 
                     key={index}
                     onClick={()=>handleScroll(item.id)}
                     className='hover:text-purple-500 text-sm sm:text-base my-1'
                   >
                     {item.name}
                   </button>
                ))}
                

                

            </nav>
            {/* --social media icons-- */}
                <div className='flex flex-wrap justify-center space-x-4 mt-6'>
                    {[
                        {icon: <FaInstagram/>, link: "https://www.instagram.com/yash_sharma6391/profilecard/?igsh=ZXFvMmZmN3N4dWI3"},
                        {icon:<FaLinkedin/>, link: "https://www.linkedin.com/in/yash-sharma-69486b307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}

                    ].map((item,index)=>(
                        <a 
                        href={item.link}
                        key={index}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                {/* ----copyright text---- */}
                <p className='text-sm text-gray-400 mt-6'>
                    &#169; 2025 Yash Sharma. All rights reserved
                </p>

        </div>

    </footer>
  )
}

export default Footer