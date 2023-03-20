import React from 'react'
import Image from 'next/image';
import javascript from '/javascript.png';
import swift from '/swift-logo.png';
import C from '/c-logo.png';
import python from '/python-logo.png';
import {motion} from 'framer-motion';
const HomePage = () => {
  
  return (
   
<div>
      <div className=' grid bg-gradient-to-r from-blue-900 to-purple-900 pt-40  w-full h-full justify-center'>


<div className='max-w-screen-lg text-center'>
<motion.div
                
                  initial={{ scale:0}}
                  animate={{rotate:360, scale:1 }}
                  transition={{
                    type:"spring",
                    stiffness:260,
                    damping:20,
                    delay:1,
                  }}
                  >
        <Image alt=''src={javascript} id='script' className=' lang h-40 w-80 float-left clear-right' />
        </motion.div>

        <motion.div
        
         initial={{ scale:0}}
                  animate={{rotate:360, scale:1 }}
                  transition={{
                    type:"spring",
                    stiffness:260,
                    damping:20,
                    delay:1.3,
                  }}
                  >

        <Image alt='' src={swift} id='swift' className='lang h-40 w-40 float-right' />
        </motion.div>
</div>
                

                  
                  
                <div className='logo justify-center'>
                <motion.div
               className=''
                  initial={{ scale:0}}
                  animate={{rotate:360, scale:1 }}
                  transition={{
                    type:"spring",
                    stiffness:260,
                    damping:20,
                    
                  }}
                  >
                 <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="1100.665" height="700.474" viewBox="0 0 1074.665 1037.474">
  <ellipse id="Ellipse_23" data-name="Ellipse 23" cx="490.893" cy="469.999" rx="490.893" ry="469.999" transform="matrix(0.995, 0.105, -0.105, 0.995, 98.257, 0)" fill="#2600c6"/>
  <rect id="Rectangle_16" data-name="Rectangle 16" width="37" height="146" transform="translate(280.832 585.737)" fill="#179800"/>
  <rect id="Rectangle_17" data-name="Rectangle 17" width="37" height="78" transform="translate(335.832 653.737)" fill="#179800"/>
  <rect id="Rectangle_18" data-name="Rectangle 18" width="37" height="193" transform="translate(454.832 538.737)" fill="#179800"/>
  <rect id="Rectangle_19" data-name="Rectangle 19" width="37" height="150" transform="translate(518.832 580.737)" fill="#179800"/>
  <rect id="Rectangle_20" data-name="Rectangle 20" width="37" height="103" transform="translate(582.832 627.737)" fill="#179800"/>
  <rect id="Rectangle_21" data-name="Rectangle 21" width="37" height="120" transform="translate(646.832 610.737)" fill="#179800"/>
  <rect id="Rectangle_22" data-name="Rectangle 22" width="37" height="114" transform="translate(226.832 617.737)" fill="#179800"/>
  <path id="Path_19" data-name="Path 19" d="M0-12.978,19.094-27.865,37-12.978V28.693L19.094,17.73,0,28.693Z" transform="translate(802.957 538.52) rotate(-90)" fill="#179800"/>
  <path id="Path_20" data-name="Path 20" d="M0-12.978,19.094-27.865,37-12.978V28.693L19.094,17.73,0,28.693Z" transform="translate(859.514 538.52) rotate(-90)" fill="#179800"/>
  <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="22" cy="21" rx="22" ry="21" transform="translate(501.832 224.737)" fill="#179800"/>
  <g id="Ellipse_25" data-name="Ellipse 25" transform="translate(791.832 660.737)" fill="none" stroke="#179800" stroke-width="7">
    <ellipse cx="21" cy="20.5" rx="21" ry="20.5" stroke="none"/>
    <ellipse cx="21" cy="20.5" rx="17.5" ry="17" fill="none"/>
  </g>
  <g id="Ellipse_26" data-name="Ellipse 26" transform="matrix(0.995, 0.105, -0.105, 0.995, 191.726, 111.183)" fill="#a700d9" stroke="#2600c6" stroke-width="7">
    <ellipse cx="383.5" cy="371" rx="383.5" ry="371" stroke="none"/>
    <ellipse cx="383.5" cy="371" rx="380" ry="367.5" fill="none"/>
  </g>
  <line id="Line_3" data-name="Line 3" y1="212" x2="719" transform="matrix(0.995, 0.105, -0.105, 0.995, 189.573, 379.218)" fill="none" stroke="#0093ff" stroke-width="1"/>
  <path id="Path_21" data-name="Path 21" d="M752.887,369c0,205.523-168.539,372.132-376.444,372.132S0,574.523,0,369" transform="translate(97.004 225.174) rotate(-11)" fill="#1f00a2" stroke="#2600c6" stroke-width="5"/>
  <g id="Rectangle_23" data-name="Rectangle 23" transform="translate(237.444 316.737)" fill="#a700d9" stroke="#2600c6" stroke-width="16">
    <rect width="231" height="148" stroke="none"/>
    <rect x="8" y="8" width="215" height="132" fill="none"/>
  </g>
  <rect id="Rectangle_24" data-name="Rectangle 24" width="72" height="50" transform="translate(315.444 464.737)" fill="#2600c6"/>
  <rect id="Rectangle_25" data-name="Rectangle 25" width="123" height="8" transform="translate(292.444 514.737)" fill="#2600c6"/>
  <text id="_Hello_World_" data-name="
Hello World
" transform="translate(292.444 356.237)" fill="#28ce00" font-size="27" font-family="AlBayan, Al Bayan"><tspan x="0" y="0"></tspan><tspan font-family="Helvetica"><tspan x="0" y="41">Hello</tspan><tspan y="41" font-family="AlBayan, Al Bayan"> </tspan><tspan y="41">World</tspan><tspan y="41" font-family="AlBayan, Al Bayan"></tspan></tspan><tspan x="0" y="82"></tspan></text>
  <text id="_100101101_" data-name="100101101

" transform="translate(367.444 235.737)" fill="#24e301" font-size="46" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">100101101</tspan><tspan x="0" y="55"></tspan><tspan x="0" y="110"></tspan></text>
  <text id="_001101010_" data-name="001101010

" transform="translate(405.444 279.737)" fill="#24e301" font-size="48" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">001101010</tspan><tspan x="0" y="57"></tspan><tspan x="0" y="114"></tspan></text>
  <text id="_001010_" data-name="001010

" transform="translate(475.444 334.737)" fill="#24e301" font-size="48" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">001010</tspan><tspan x="0" y="57"></tspan><tspan x="0" y="114"></tspan></text>
  <text id="_1010_" data-name="1010

" transform="translate(294.626 279.965)" fill="#24e301" font-size="48" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">1010</tspan><tspan x="0" y="57"></tspan><tspan x="0" y="114"></tspan></text>
  <path id="Path_22" data-name="Path 22" d="M14.952,4.344,0,86.5" transform="translate(658.414 423.737)" fill="none" stroke="#0093ff" stroke-width="8"/>
  <path id="Path_23" data-name="Path 23" d="M50.328-52.458V45.448L0,80" transform="translate(671.444 418.737)" fill="none" stroke="#1f00a2" stroke-width="8"/>
  <path id="Path_24" data-name="Path 24" d="M-22.354-51.521S-18.915-12.778-14.8-4.578c8.11,16.148,21.635,10.621,32.563,27.9C33.979,48.948,42.5,51,42.5,51" transform="translate(602.944 459.237)" fill="none" stroke="#1f00a2" stroke-width="8"/>
  <path id="Path_25" data-name="Path 25" d="M-39.6-14.187-24.5,9.875,16.292,25H50" transform="translate(573.944 459.237)" fill="none" stroke="#1f00a2" stroke-width="8"/>
  <path id="Path_26" data-name="Path 26" d="M14.952,4.344,10.63,28.092,0,86.5" transform="translate(658.414 423.737)" fill="none" stroke="#1f00a2" stroke-width="8"/>
  <path id="Path_27" data-name="Path 27" d="M-22.986,7.558l8.552,26.969L7.476,58.345" transform="translate(658.414 410.814)" fill="none" stroke="#1f00a2" stroke-width="8"/>
  <path id="Path_28" data-name="Path 28" d="M78.2-34.115,83.827.072l-33.5,45.376-37.7-28.7L-10.8-15.633" transform="translate(687.232 389.988) rotate(21)" fill="none" stroke="#1f00a2" stroke-width="8"/>
  <g id="Ellipse_27" data-name="Ellipse 27" transform="translate(507.444 416.008)" fill="none" stroke="#28ce00" stroke-width="7">
    <ellipse cx="18" cy="16.5" rx="18" ry="16.5" stroke="none"/>
    <ellipse cx="18" cy="16.5" rx="14.5" ry="13" fill="none"/>
  </g>
  <ellipse id="Ellipse_28" data-name="Ellipse 28" cx="18" cy="16.5" rx="18" ry="16.5" transform="translate(561.444 372.737)" fill="#28ce00"/>
  <ellipse id="Ellipse_29" data-name="Ellipse 29" cx="18" cy="16.5" rx="18" ry="16.5" transform="translate(613.017 389.237)" fill="#28ce00"/>
  <g id="Ellipse_30" data-name="Ellipse 30" transform="translate(661.366 408.363)" fill="none" stroke="#28ce00" stroke-width="5">
    <ellipse cx="12" cy="11" rx="12" ry="11" stroke="none"/>
    <ellipse cx="12" cy="11" rx="9.5" ry="8.5" fill="none"/>
  </g>
  <ellipse id="Ellipse_31" data-name="Ellipse 31" cx="18" cy="16.5" rx="18" ry="16.5" transform="translate(658.414 339.237)" fill="#28ce00"/>
  <g id="Ellipse_32" data-name="Ellipse 32" transform="translate(703.772 333.279)" fill="none" stroke="#28ce00" stroke-width="6">
    <ellipse cx="18" cy="16.5" rx="18" ry="16.5" stroke="none"/>
    <ellipse cx="18" cy="16.5" rx="15" ry="13.5" fill="none"/>
  </g>
  <ellipse id="Ellipse_33" data-name="Ellipse 33" cx="18" cy="16.5" rx="18" ry="16.5" transform="translate(756.444 350.737)" fill="#28ce00"/>
  <text id="E" transform="matrix(0.899, -0.438, 0.438, 0.899, 366.73, 160.966)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">E</tspan></text>
  <text id="F" transform="translate(477.212 132.011) rotate(-8)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="62" font-family="Impact"><tspan x="0" y="0">F</tspan></text>
  <text id="L" transform="translate(238.914 249.687) rotate(-44)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">L</tspan></text>
  <text id="G" transform="translate(324.673 183.542) rotate(-28)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="63" font-family="Impact"><tspan x="0" y="0">G</tspan></text>
  <text id="O" transform="translate(846.99 268.756) rotate(49)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">O</tspan></text>
  <text id="O-2" data-name="O" transform="translate(204.675 283.047) rotate(-44)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">O</tspan></text>
  <text id="L-2" data-name="L" transform="matrix(0.743, -0.669, 0.669, 0.743, 268.67, 224.305)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">L</tspan></text>
  <text id="C" transform="matrix(0.643, -0.766, 0.766, 0.643, 181.396, 314.381)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">C</tspan></text>
  <text id="E-2" data-name="E" transform="translate(824.542 243.852) rotate(46)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">E</tspan></text>
  <text id="T" transform="translate(800.8 220.906) rotate(40)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">T</tspan></text>
  <text id="E-3" data-name="E" transform="matrix(0.819, -0.574, 0.574, 0.819, 295.97, 201.006)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">E</tspan></text>
  <text id="O-3" data-name="O" transform="translate(442.126 137.508) rotate(-12)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">O</tspan></text>
  <text id="S" transform="matrix(0.993, 0.122, -0.122, 0.993, 562.281, 127.354)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">S</tspan></text>
  <text id="A" transform="translate(606.598 133.03) rotate(14)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">A</tspan></text>
  <text id="N" transform="translate(654.785 145.442) rotate(19)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="62" font-family="Impact"><tspan x="0" y="0">N</tspan></text>
  <text id="A-2" data-name="A" transform="matrix(0.839, 0.545, -0.545, 0.839, 766.373, 196.647)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="60" font-family="Impact"><tspan x="0" y="0">A</tspan></text>
  <text id="M" transform="matrix(0.848, 0.53, -0.53, 0.848, 725.118, 171.482)" fill="#a700d9" stroke="#2600c6" stroke-width="1" font-size="54" font-family="Impact"><tspan x="0" y="0">M</tspan></text>
  <g id="Rectangle_26" data-name="Rectangle 26" transform="translate(84.874 605.342) rotate(-11)" fill="#a700d9" stroke="#2600c6" stroke-width="10">
    <rect width="929" height="153.072" rx="24" stroke="none"/>
    <rect x="5" y="5" width="919" height="143.072" rx="19" fill="none"/>
  </g>
  <text id="Computer_science_club" data-name="Computer science club" transform="translate(165.368 693.309) rotate(-11)" fill="#28ce00" stroke="#0031ff" stroke-width="1" font-size="83" font-family="Impact"><tspan x="0" y="0">COMPUTER SCIENCE CLUB</tspan></text>
  <text id="_" data-name="&lt;&gt;

&lt;/&gt;" transform="translate(276.989 360.501)" fill="#28ce00" font-size="35" font-family="AndaleMono, Andale Mono"><tspan x="0" y="0">&lt;&gt;</tspan><tspan x="0" y="40"></tspan><tspan x="0" y="80">&lt;/&gt;</tspan></text>
</svg>

                
        
</motion.div>


                </div>

<div className='max-w-screen-lg text-center'>
        <motion.div 
        initial={{ scale:0}}
                  animate={{rotate:360, scale:1 }}
                  transition={{
                    type:"spring",
                    stiffness:260,
                    damping:20,
                    delay:1.6,
                  }}>
        <Image alt='' src={C} id='cplus' className='lang pl-10 h-40 w-60 float-left clear-right' />
        </motion.div>

        <motion.div 
        initial={{ scale:0}}
                  animate={{rotate:360, scale:1 }}
                  transition={{
                    type:"spring",
                    stiffness:260,
                    damping:20,
                    delay:1.8,
                  }}>
        <Image alt='' src={python} id='python' className='lang h-40 w-40 float-right' />
         
        </motion.div>
</div>


  



      </div>
    
</div>
  )
}

export default HomePage

{/*

*/}