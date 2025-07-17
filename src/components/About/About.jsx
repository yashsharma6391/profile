import  React from 'react'

  import {Typewriter} from 'react-simple-typewriter'
import ProfilePhoto from '../../assets/profile.jpg';
import Tilt from 'react-parallax-tilt'






const About = () => {
  
  return (
    <section id='about' 
    className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 '>
      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>

        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        {/* Greeting */}
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
          Hi,I am
        </h1>
        {/* Name */}
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
          Yash Sharma
        </h2>
        {/* Skills heading with typing effect */}
        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
           <span className='text-white'>
            I am a
           </span>
         
            <Typewriter
              words={[
                ' Web Developer',
              // ' Fullstack Developer',
              ' App Developer',
              ' UI/UX designer',
              ' Coder',
             ]}
             loop={true}
             cursor
             cursorStyle=" "
             typeSpeed={50}
             deleteSpeed={50}
             delaySpeed={1000}
             cursorRender={(cursor)=>(
              <span className='text-[#8245ec]'>{cursor}</span>
             )}
             /> 
         </h3>
         <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
           I am a full-stack developer in building scalable  web applications.  Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solution.
        </p>
        {/* Resume button  */}
        <a href="https://drive.google.com/file/d/1iT5CyuunsFU-qfA2rBCj3hOS9EUyaEqU/view?usp=drivesdk "
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold tansition duration-300 transform hover:scale-105'
        style={{
          background:'linear-gradient(90deg, #8245ec,#a855f7)',
          boxShadow:'0 0 2px #8245ec, 0 0 40px #8245ec',
        }}
        >DOWNLOAD CV</a>

       </div>
       {/* Right side */}
       <div className='md:w-1/2 flex justify-center md:justify-end'>
       <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-purple-700 rounded-full'
       tiltMaxAngleX={20}
       tiltMaxAngleY={20}
       perspective={1000}
       scale={1.05}
       transitionSpeed={1000}
       gyroscope={true}
       >
         <img src={ProfilePhoto} alt="Yash sharma" 
         className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
        </Tilt>
       </div>

      </div>

    </section>
  )
}

export default About