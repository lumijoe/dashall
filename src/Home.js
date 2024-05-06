import React from 'react';

export default function Home() {
    return(
        <div className="">
            <header className="bg-[white] w-[290px] h-[100vh] pl-12 pt-[180px] fixed bottom-[120px]">
                <div className="flex flex-row">
                <img src="/images/icon.svg" alt="Icon" className=""/>
                <h1 className='text-[#4318ff] font-bold text-2xl content-center pl-2'>Dash All</h1>
                </div>
                <nav>
                <ul className="mt-12 flex flex-col gap-[40px] text-2xl">
                    <li className='text-[white] bg-[#4318FF] -ml-8 pl-8 rounded-l-[4px] py-3'>Client 01</li>
                    <li className='text-[#A3AED0]'>Client 02</li>
                    <li className='text-[#A3AED0]'>Client 03</li>
                    <li className='text-[#A3AED0]'>Client 04</li>
                    <li className='text-[#A3AED0]'>Client 05</li>
                </ul>
                </nav>
            </header>
            <div className='w-[calc(100% - 290px)] bg-[#F4F7FE] min-h-[100vh]'>
                
            </div>          
        </div>
    )
}