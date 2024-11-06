import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex bg-white flex-col rounded-lg shadow-lg overflow-hidden
     w-[15rem] mx-3'>

            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src='https://assets.digitalcontent.marksandspencer.app/image/upload/w_550,h_715,q_auto,f_auto,e_sharpen/SD_03_T15_1604F_SU_X_EC_0' alt='' />
            </div>

            <div>
                <h3 className='text-lg font-medium text-gray-900'>M&S Collection</h3>
                <p className='text-gray-500 mt-2 text-sm'>Slim Fit Stretch Suit Trousers </p>
            </div>
        </div>
    )
}

export default HomeSectionCard