import React from 'react'
import { Icon } from '@iconify/react';

export default function 
() {
  return (
    <div className="bg-dark3 w-96 h-96 flex flex-col p-5 m-3 rounded-lg">
      <h1 className='text-xl font-medium italic'>Name</h1>
      <div className='flex flex-row font-light items-center'>
        <span className='mr-2'>
          ID
        </span>
        <span>
          <Icon icon="material-symbols:content-copy" width={20}/>
        </span>
      </div>
      <span>Description</span>
      <div className='flex flex-row justify-between font-light text-sm'>
        <div className='flex flex-row'>
          <Icon icon="mdi-light:account" width={20}/>
          <span className='ml-1'>Created By</span>
        </div>
        <span>Date</span>
      </div>
      <div className='flex flex-row font-light text-sm'>
          <Icon icon="mdi-light:link-variant" width={20}/>
          <span className='ml-1'>Link</span>
      </div>
      <div className='flex justify-center'>
        Button here
      </div>
    </div>
  )
}
