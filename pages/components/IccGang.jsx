import React from 'react'
import Image from 'next/image'
import Edan from '/edan.jpg'
import Brendan from '/brendan.jpg'
import charlie from '/charlie.png'
import aaron from '/aaron.png'
import keon from '/keon.png'
import auner from '/auner.png'
const IccGang = () => {
  return (
    <div>
      
   <div name='CLUB OFFICERS' class="bg-gradient-to-r from-blue-900 to-purple-900">
<h3 class="pt-60 pb-20 text-center text-7xl text-white">CLUB OFFICERS</h3>

<div class="flex pb-60 items-center justify-center ">

  <div class="grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-3xl ">
    <div class=" m-10 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <Image class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Edan} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-600 group-hover:from-green-300/70 group-hover:via-green-600/60 group-hover:to-green-600/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">President: Edan Barrios</h2>
        <p class="mb-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">What's up everyone, I'm Edan and I'm currently a freshman here at CSM. I'm majoring in Computer Science with hopes of becoming a full-stack developer. Outside of school I love going to the gym, listening to music, reading manga, and playing video games. If you see me around feel free to say hi!</p>
      </div>
    </div>
    <div class="m-10 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <Image class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Brendan} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-green-600 group-hover:from-green-300/70 group-hover:via-green-600/60 group-hover:to-green-600/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">vice-President: Brendan Keane</h2>
        <p class="mb-3 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Hey everyone, my name is Brendan Keane and I am a freshman here at CSM. I am majoring in Computer Science where I plan on being a full stack developer. Outside of school I play a lot of video games, go to the gym, and work as a server. </p>
      </div>
    </div>
    <div class="m-10 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <Image class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={auner} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-green-600 group-hover:from-green-300/70 group-hover:via-green-600/60 group-hover:to-green-600/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">Treasurer: Auner Barrios-Vasquez</h2>
        <p class="mb-3 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Hey I'm Auner, this year's treasurer for the CS club, I'm a Computer Science major with 4 years of experience. I like to exercise, play video games, and program. My favorite programming language at the moment is Java</p>
      </div>
    </div>
    <div class="m-10 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <Image class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={charlie} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-green-600 group-hover:from-green-300/70 group-hover:via-green-600/60 group-hover:to-green-600/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">ICC Representative: Charlie Greene</h2>
        <p class="mb-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">I'm Charlie, this is my second year at CSM. I'll be earning my degree in computer science for web development in 2023. I've been coding for several years within the field of front-end development and iOS development. I started while I was in the army as a ranger. Now I devote all my time sharpening my coding skills and helping others.</p>
      </div>
    </div>
    <div class="m-10 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <Image class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={aaron} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-green-600 group-hover:from-green-300/70 group-hover:via-green-600/60 group-hover:to-green-600/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">ICC Representative: Aaron Krimer</h2>
        <p class="mb-3 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">What's up my name is Aaron and I'm a Computer Science major. I'm hoping to transfer to UCLA next year for the fall semester. I love long walks on the beach, cooking like I'm Ratatouille, playing piano and I think in morse code. Code is my third language after Russian and before English.</p>
      </div>
    </div>
    <div class="m-10 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <Image class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={keon} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-green-600 group-hover:from-green-300/70 group-hover:via-green-600/60 group-hover:to-green-600/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h2 class="font-dmserif text-3xl font-bold text-white">ICC Representative: Keon Amid</h2>
        <p class="mb-3 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Hi I'm Keon. I like lifting weights, spending time with my family/dogs, and playing video games. It's my first year at CSM and my favorite things about CSM so far are the cool study spots and the decent food. It's my first year studying computer science and so far I am having a lot of fun doing it.</p>
      </div>
    </div>
  </div>

</div>




   </div>
 
  </div>
  )
}

export default IccGang