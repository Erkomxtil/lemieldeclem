import Image from 'next/image';
import ruches from './src/ruches.jpg'

export default function Home() {
  return (
    <div className="w-[1024px] text-center mt-6">
      <h1 className="font-bold text-6xl">Atelier</h1>
      <h2 className="bg-amber-400 inline-flex pt-1 px-4 -rotate-2 text-3xl mb-10 mt-10 font-bold">Découverte de l&apos;apiculture</h2>
      <div className="mt-4 mb-10">
        <p className=" inline-block outline-dashed outline-offset-2 rounded-2xl font-bold p-10 text-4xl ">
          Venez vivre <br />
          <span className="bg-amber-400 px-10 inline-flex rotate-2" >Une expérience unique</span><br />
          en vous immergeant dans <br />
          monde des abeilles
        </p>
      </div>
      <div>
        <div className="relative">
          <p className="bg-amber-400 inline-flex px-10 py-2 uppercase font-bold text-3xl">
            2 Heures <br />
            d&apos;activités
          </p>
          <p className="pt-20 text-2xl">
            Pour toute la famille <br />
            et à partir de 5 ans
          </p>
          <div className="absolute top-100 left-[50%] w-1 h-7 bg-black block"></div>          
          <div className="absolute top-28 left-[50.6%] w-1 h-5 bg-black block rotate-45"></div>
          <div className="absolute top-28 left-[49.4%] w-1 h-5 bg-black block -rotate-45"></div>
        </div>
        <div className='flex place-content-center my-[40px]'>
          <div className='bg-amber-400 rounded-[20px]'>
            <Image
            src={ruches} 
            alt="Apiculteurs"
            height={180}
            className='rounded-[20px] m-[10px] rotate-2' 
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className='bg-amber-400 inline-flex px-10 py-2 uppercase font-bold text-3xl'>
            Renseignements et réservations        
          </p>
        </div>       
        <div>
          <p className='font-bold text-3xl py-10'>
            06.95.30.33.99 <br />
            {/* <img src="" alt="" /> */}
            <span className='text-2xl'>
              lemieldeclem19@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div className='absolute w-100 bg-amber-400 top-0 -left-20 block h-20 -rotate-30'> 
      <hr className='border-dashed border-2 rotate-6 mt-20'/>   
      </div>
    </div>
  );
}
