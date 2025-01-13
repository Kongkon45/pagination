"use client"
import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepTwo = () => {
    const { register } = useFormContext();
    return (
        <div>
            <label htmlFor='email'>
                Email : 
                <input {...register('email')} placeholder='Email' className='w-full border py-1 px-2 rounded-full mb-2'/>
            </label>
            <label htmlFor="phone">Phone Number :
            <input {...register('phone')} placeholder='Phone Number' className='w-full border py-1 px-2 rounded-full mb-2'/>
            </label>
        </div>
    );
};

export default StepTwo;