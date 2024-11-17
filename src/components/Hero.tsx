import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-cover bg-[url('/background.jpeg')]"
         style={{ backgroundSize: "cover", backgroundPosition: "center" }}>
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="flex justify-center items-center">
          <Image
            src="/salman.jpeg" 
            alt="Salman Raza" 
            className="rounded-full w-[250px] h-[250px] object-cover border-4 border-white shadow-lg"
            style={{ backgroundSize: "cover", backgroundPosition: "center" }} 
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col justify-center text-[80px] sm:text-[100px] font-bold leading-tight">
          <div>
            <p data-aos="zoom-in-up">I&#39;m</p>
            <p data-aos="zoom-in-up">Salman</p>
            <p data-aos="zoom-in-up">Raza</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero





































// import React from 'react'
// import Navbar from './Navbar'

// const Hero = () => {
//   return (
//     <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/salman.jpeg)] bg-cover'
//     style={{backgroundSize: "16%", backgroundPosition:"left 190px top 180px"}}
//     >
//       <Navbar />
//       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
//         <div className='hidden lg:block'></div>
//         <div className='text-[80px] sm:text-[100px] font-bold leading-tight justify-center items-center'>
//           <div>
//             <p data-aos="zoom-in-up">I'm</p>
//             <p data-aos="zoom-in-up">Salman</p>
//             <p data-aos="zoom-in-up">Raza</p>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Hero
