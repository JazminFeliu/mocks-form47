import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";

export const FormRegIndustry = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>    
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div >
                        <label>Industry Ref: </label>
                        <input type='text' {...register('industry_ref')}/>
                </div>
                <div >
                        <label>Industry Name: </label>
                        <input type='text' {...register('industry_name')}/>
                </div>
                <div >
                        <label>Specific: </label>
                        <input type='text' {...register('specific')}/>
                </div>
                <div >
                        <label>Stage: </label>
                        <input type='text' {...register('stage')}/>
                </div>
                <div >
                        <label>Industry_growth: </label>
                        <input type='text' {...register('industry_growth')}/>
                </div>

                <input  type='submit' value= 'Registrar Industry' />
            </form>                       
        </>
        
    );
};