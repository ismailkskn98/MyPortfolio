'use client'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {
    bgColor: 'bg-Brand1' | 'bg-White' | 'bg-BG1',
    textColor: 'text-BG1' | 'text-White',
    border: boolean,
    buttonText: string,
    buttonFc: () => void;
}

const SolidButton: React.FC<Props> = ({bgColor, textColor, border, buttonText, buttonFc}) => {

    const handleClick = (): void => {
        // dinamik fonksiyon
        buttonFc();
    }
    
    return (
    <button onClick={handleClick} className={`flex items-center gap-1 py-3 px-6 rounded-[32px] button-u cursor-pointer hover:opacity-80 transition-opacity ${bgColor} ${textColor} ${border ? 'border-2 border-Brand1' : 'border-none'}`} >
        {buttonText} <MdKeyboardDoubleArrowRight className='w-[24px] h-[24px]' />
    </button>
  )
}

export default SolidButton