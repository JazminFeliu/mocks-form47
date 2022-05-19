import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";
import {FormBAndRMethod } from "./FormBAndRMethod"

export const FormApplication = () => {

    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form>
            <div >
                <label>Risk Valuation Porcentage: </label>
                <input type='text' {...register('risk_porcentage')}/>
            </div>
            <div >
                <label>Risk Valuation : </label>
                <input type='text' {...register('risk_valuation')}/>
            </div>
            <div >
                <label>Berkus Valuation Porcentage: </label>
                <input type='text' {...register('berkus_porcentage')}/>
            </div>
            <div >
                <label>Berkus Valuation : </label>
                <input type='text' {...register('berkus_valuation')}/>
            </div>                
            
            <a href="applicationfree.html">Ver Application Free</a>
        </form>                     

        </>        
    );
};