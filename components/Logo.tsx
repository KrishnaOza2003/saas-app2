import React from 'react'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

function Logo() {
  return (
    <Link href={'/'} prefetch={false} className=' overflow-hidden'>
        <div className=' flex items-center w-72 h-14 '>
            <AspectRatio ratio={16 / 9} className=' flex items-center justify-center'>
                <Image 
                    priority
                    src={'https://saas-translator-app.vercel.app/_next/static/media/black.2e8db712.svg'}
                    alt='logo' 
                    className=' dark:filter dark:invert '
                    width={'700'}
                    height={'70'}
                />
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo
