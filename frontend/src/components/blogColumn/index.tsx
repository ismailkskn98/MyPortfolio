'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image from '@/../public/images/Image.png'
import Link from 'next/link'
import { MdDoubleArrow } from "react-icons/md";


type Props = {
    // image?: string,
    title: string,
    description: string,
}

const BlogColumn: React.FC<Props> = ({title, description}) => {
    const [subTitle, setSubTitle] = useState<string>('');

    useEffect(() => {
        const words: string[] = description.split(' ');
        const newText = words.length <= 20 ? words.join(' ') + '...' : words.slice(0, 21).join(' ') + '...'; 
        setSubTitle(newText);
    }, [description])

  return (
    <section className='w-full'>
        <article className='relative min-h-[368px] max-w-[1052px] flex justify-center items-center py-16'>
            <div className='w-full absolute top-0 left-0 border border-White'></div>
            <div className='flex items-center gap-16'>
                <Image src={image} alt='blog image' className='max-w-60 max-h-60' />
                <div id='blogInfo' className='flex flex-col gap-6'>
                    <h2 className='h2-u text-Brand1'>{title}</h2>
                    <p className='para-u text-White overflow-ellipsis'>{subTitle}</p>
                    <Link href={'#'} className='flex items-center gap-1 text-Brand1 decoration-White underline-offset-8 para-u group'>
                        <span>Devamını Oku</span>
                        <MdDoubleArrow className='group-hover:ml-1 transition-all' />
                    </Link>
                    <div id='label' className='flex items-center gap-6 text-White mt-2'>
                        <span className='inline-block bg-Grey rounded-2xl px-2 py-1 Label-u-l'>Web Developer</span>
                        <span className='Label-u-l'><span className='Label-u-m'>Text </span>İsmail</span>
                        <span className='Label-u-l'><span className='Label-u-m'>Date </span>10/02/2023</span>
                    </div>
                </div>
            </div>
            <div className='w-full absolute bottom-0 left-0 border border-White'></div>
        </article>
    </section>
  )
}

export default BlogColumn