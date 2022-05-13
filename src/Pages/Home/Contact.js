import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
 return (
   <div className=' py-14 bg-[url("https://i.ibb.co/BTFgwMt/appointment.png")]'>
     <div className='pb-14'>
       <p className='text-xl text-primary'>Contact Us</p>
       <p className='text-3xl text-white'>Stay connected with us</p>
     </div>
    <div className='grid grid-cols-1 justify-items-center gap-5'>
       <input type='text' placeholder='Email Address' className='input w-full max-w-xs lg:max-w-md'/>
       <input type='text' placeholder='Subject' className='input w-full max-w-xs lg:max-w-md' />
       <textarea className='textarea w-full max-w-xs lg:max-w-md' placeholder='Your message'rows={6}></textarea>
       <PrimaryButton>Submit</PrimaryButton>
    </div>
  </div>
 );
};
export default Contact;