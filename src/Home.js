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
            <div className='w-[calc(1440px)] bg-[#F4F7FE] min-h-[100vh] ml-[290px] pt-[70px] px-8'>
                <h1 className='text-xl'>システムサポートLP</h1>

                <section className='flex flex-row gap-[20px] w-auto'>
                    <div className='w-[331px] h-auto'>
                        <ul class="flex flex-col gap-[20px]">
                            <li class="bg-white px-6 py-6 text-[#A3AED0] h-[98px] rounded-[20px] w-[100%]">category<br/><span className='text-light text-[1.3rem] text-[#1B2559]'>LP</span></li>
                            <li class="bg-white px-6 py-6 text-[#A3AED0] h-[98px] w-[100%] rounded-[20px]">keyword<br/><span className='text-light text-[1.3rem] text-[#1B2559]'>ESG, Renew</span></li>
                            <li class="bg-white px-6 py-6 text-[#A3AED0] h-[98px] w-[100%] rounded-[20px]">chatwork<br/><span className='text-light text-[1.3rem] text-[#1B2559]'>http://xxxxxxx</span></li>
                        </ul>
                    </div>
                    <div class="w-[427px] bg-white rounded-[20px] h-[334px]">
                        <img src="/images/img01.png" alt="" className="w-auto h-[90%] px-4 py-4 cover m-auto" />
                    </div>
                    <div class="w-[282px] bg-white rounded-[20px] h-[334px] py-10">
                        <img src="/images/img02.png" alt="" className="w-auto h-[170px] px-4 py-4 cover m-auto" />
                        <button type="button" class="rounded-full bg-[#4318FF] text-white text-sm w-[162px] py-2 ml-[60px] mr-[60px]"  >サイトへ</button>
                    </div>

                </section>
            </div>          
        </div>
    )
}