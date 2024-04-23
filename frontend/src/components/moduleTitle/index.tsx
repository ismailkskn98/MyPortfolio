import Image from 'next/image';
import React from 'react'
import { LuMouse } from "react-icons/lu";
import lineArrow from '@/../public/images/Line.png';
import LineTitle from '@/../public/images/Line-title.png';

type Props = {
  description: string,
  title: string,
}

const ModuleTitle: React.FC<Props> = ({description, title}) => {
  return (
    <article className='flex flex-col items-center text-White gap-16'>
      <div className='flex flex-col items-center gap-4 max-h-[140px]'>
        <LuMouse className='text-Brand1 w-8 h-11' />
        <Image src={lineArrow} alt='moduleTitle arrow' className='max-h-[80px]' />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-Brand1 h1-u'>{title}</h1>
          <Image src={LineTitle} alt='moduleTitle arrow' className='max-h-[80px]' />
        </div>
        <p className='para-m'>{description}</p>
      </div>
    </article>
  )
}

export default ModuleTitle