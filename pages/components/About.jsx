import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";
const About = () => {
	const x = useMotionValue(0);
	const opacity = useTransform(x, [ 0, 100], [ 1, 0]);
  return (
    <div>
    <div name='ABOUT US' className='bg-gradient-to-r from-blue-900 to-purple-900 pt-40 pb-60'> 
	
	
    
    <div className=' text-white max-w-screen-lg mx-auto pb-20 pt-20 text-2xl'>
           <h2 className='pb-10 text-center text-6xl'> ABOUT OUR CLUB </h2>
           <p className='leading-10 m-10'> 
           The CSM Computer Science club is a student-run organization based at the College of San Mateo. We are a dedicated group that focuses on helping others foster their love for coding through collaborative projects, weekly meetings, and social events. 
            </p>
    </div>
  
  <div class="cols max-w-screen-2xl mx-auto">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p className=''>CLUB MEETINGS</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p className=''>Our club meetings are every monday at 1:10pm in biulding 17 room 112. </p>
						</div>
					</div>
				</div>
			</div>

			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>BUILD CLUB PROJECTS</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p className=''>Collaborate in teams to build real world projects to better your coding skills and show future employers or colleges. </p>
						</div>
					</div>
				</div>
			</div>

			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front">
						<div class="inner">
							<p>HACK-A-THON&apos;S</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p className=''>We love challanges, prove your skills in hackathons with other club members or with other students at diffrent colleges. </p>
						</div>
					</div>
				</div>
			</div>

			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p> INTERN / HIRING <br /> CONVENTIONS</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p className=''> We travel to career conventions around the Bay Area to help students land internships or get their first job in tech. </p>
						</div>
					</div>
				</div>
			</div>


		</div>





 </div>
    </div>
    
  )
}

export default About

{/*



<div className='m-10 flex items-center justify-center'>
      <div className=' grid grid-cols-2 '>
        <div className='shadow-xl shadow-white w-60 h-60 text-center '> club meetings </div>
           <div className='shadow-xl shadow-white w-60 h-60 text-center '> hackathons </div>
           <div className='shadow-xl shadow-white w-60 h-60 text-center '> build club projects </div>
           <div className='shadow-xl shadow-white w-60 h-60 text-center '> field trips to: <br /> intern / hiring <br/> conventions  </div>

      </div>
           
   
 </div>
*/}