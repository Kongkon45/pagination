"use client"
import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepOne = () => {
    const { register } = useFormContext();
    return (
        <div>
            <label htmlFor="firstName">
                First Name :  
                <input {...register("firstName")} placeholder='First Name' className='w-full border py-1 px-2 rounded-full mb-2'/>
            </label>
            <label htmlFor="lastName">Last Name :
                <input {...register('lastName')} placeholder='Last Name' className='w-full border py-1 px-2 rounded-full mb-2'/>
            </label>
        </div>
    );
};

export default StepOne;