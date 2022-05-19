import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";

export const FormBAndRMethod = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
      <form  onSubmit={handleSubmit(onSubmit)}>

            <div>                
                <label>Management? </label>
                <select {...register('management')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Stage? </label>
                <select {...register('stage')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Legislation_political? </label>
                <select {...register('legislation_political')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Manufacturing_service? </label>
                <select {...register('manufacturing_service')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>SalesAndMkt? </label>
                <select {...register('salesAndMkt')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Aditional_funding? </label>
                <select {...register('aditional_funding')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Competition? </label>
                <select {...register('competition')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Tech? </label>
                <select {...register('tech')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Litigation? </label>
                <select {...register('litigation')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Scalability? </label>
                <select {...register('scalability')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Reputation? </label>
                <select {...register('reputation')}>
                <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <div>                
                <label>Potential_exit? </label>
                <select {...register('potential_exit')}>
                    <option value='-1'>-1</option>
                    <option value='-0.5'>-0.5 </option>
                    <option value='0'>0</option>
                    <option value='0.5'>0.5</option>
                    <option value='1'>1</option>
                </select>      
            </div>
            <input  type='submit' value= 'Req: Cargar Datos Berkus and Risk' />
        </form>                     

        </>
        
    );
};