import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Hello, I'm Gedeon
                </h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae fugit nostrum delectus. Animi delectus asperiores consectetur illo ad qui omnis illum consequuntur, libero deserunt incidunt sed eaque doloremque blanditiis!
                </p>
            </div>
            <div className='col-span-5'>
                <div className='rounded-full bg-[#191819] w-[250px] h-[250px] lg:w-[400px] relative'>
                    <Image
                    src="/images/hero-image.png"
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/5 top-1/2 left-1/2'
                    width={500}
                    height={500}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection