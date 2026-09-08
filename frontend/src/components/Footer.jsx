// import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>At DocBook, we believe that quality healthcare should be accessible, convenient, and just one click away. Founded with a vision to bridge the gap between patients and healthcare providers, DocBook simplifies the process of booking doctor appointments with ease and confidence.
Whether you are looking for a specialist or a general practitioner, our platform helps you find verified doctors, check availability, and schedule appointments instantly—all from the comfort of your home. With a user-friendly interface and dedicated support, we ensure a smooth and secure experience for both patients and healthcare professionals.
Join us on our mission to make healthcare smarter, faster, and more accessible for everyone.

</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+918670403446</li>
            <li>enankanandi083@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ DocBook.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
