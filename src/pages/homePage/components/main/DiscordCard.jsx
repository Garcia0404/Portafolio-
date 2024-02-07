import React from 'react'
import userbg from '../../../../assets/hollow.mp4'
import myphoto from '../../../../assets/mifoto.jpeg'


export const DiscordCard = () => {
  return (
    <section className='bg-blackMain rounded-xl flex flex-col w-72 tablet:w-80 overflow-hidden shadow-xl h-full m-auto tablet:my-auto tablet:mx-0 min-h-[680px] drop-shadow-[0_0_0.5rem_#30072D]'>
      <div className="h-28 w-full overflow-hidden">
        <video className='object-cover h-full w-full' src={userbg} muted loop autoPlay></video>
      </div>
      <div className='absolute ms-4 mt-[70px] h-20 w-20 rounded-full border-[3px] border-blackMain'>
        <div className='rounded-full overflow-hidden object-cover'>
          <img src={myphoto} alt="user" />
        </div>
        <span className='absolute bottom-0 right-0 w-5 h-5 border-[3px] border-blackMain rounded-full bg-green-600 drop-shadow-[0_0_0.1rem_#16A34A]'></span>
      </div>
      <div className='flex mt-8 grow'>
        <div className='flex flex-col text-white p-4 bg-[#111214] grow m-3 rounded-md'>
          <h2>Julio García</h2>
          <div className='flex border-b border-blackMain items-center pb-3 gap-1'>
            <span>
              <svg className='h-3 w-3 fill-grayTxt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span>
            <span className='text-xs font-light'>@Garcia0404</span>
          </div>

          <h3 className='font-bold mt-2 mb-1'>SOBRE MÍ</h3>
          <ul className='list-none font-extralight'>
            <li>&#62; Frontend Developer</li>
            <li>&#62; De Lima</li>
            <li>&#62; 23 años</li>
          </ul>

          <h3 className='font-bold mt-2 mb-1'>MIEMBRO DESDE</h3>
          <span>
            <span className='font-extralight'>10 oct 2023</span>
          </span>

          <h3 className='font-bold mt-2 mb-1'>MIS SKILLS</h3>
          <div className='flex flex-wrap gap-2 font-light'>
            <span className='bg-grayBtn flex rounded-md px-2.5 gap-1 py-px items-center'>
              <span className='h-3 w-3 bg-[#149ECA] drop-shadow-[0_0_0.1rem_#149ECA] rounded-full'></span>
              <span>React</span>
            </span>
            <span className='bg-grayBtn flex rounded-md px-2.5 gap-1 py-px items-center'>
              <span className='h-3 w-3 bg-[#F7E025] drop-shadow-[0_0_0.1rem_#F7E025] rounded-full'></span>
              <span>JavaScript</span>
            </span>
            <span className='bg-grayBtn flex rounded-md px-2.5 gap-1 py-px items-center'>
              <span className='h-3 w-3 bg-[#3EBFF8] drop-shadow-[0_0_0.1rem_#3EBFF8] rounded-full'></span>
              <span>TailwindCSS</span>
            </span>
            <span className='bg-grayBtn flex rounded-md px-2.5 gap-1 py-px items-center'>
              <span className='h-3 w-3 bg-[#0870C2] drop-shadow-[0_0_0.1rem_#0870C2] rounded-full'></span>
              <span>CSS</span>
            </span>
            <span className='bg-grayBtn flex rounded-md px-2.5 gap-1 py-px items-center'>
              <span className='h-3 w-3 bg-[#E4552D] drop-shadow-[0_0_0.1rem_#E4552D] rounded-full'></span>
              <span>HTML</span>
            </span>
            <span className='bg-grayBtn flex rounded-md px-2.5 gap-1 py-px items-center'>
              <span className='h-3 w-3 bg-[#F05639] rounded-full'></span>
              <span>Git</span>
            </span>
          </div>
          <h3 className='font-bold mt-2 mb-1'>NOTA</h3>
          <p className='font-extralight'>Hecho con React y TailwindCSS</p>

          <form className='mt-auto self-end w-full border border-blackMain'>
            <input className='font-light rounded-sm w-full px-3 py-2 text-whiteMain bg-transparent' type="text" placeholder='Escribe un mensaje ...' />
          </form>
        </div>
      </div>
    </section>
  )
}
