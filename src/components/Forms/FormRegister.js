import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";

export const FormRegister = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>                      
            <form  onSubmit={handleSubmit(onSubmit)}>

                <div >
                        <label>Email: </label>
                        <input type='text' {...register('email')}/>
                </div>
                <div >
                        <label>Password: </label>
                        <input type='text' {...register('password')}/>
                </div>
                <div >
                        <label>Password Confirm: </label>
                        <input type='text' {...register('passwordConfirm')}/>
                </div>

                <input  type='submit' value= 'Req: User Register' />

            </form>                
        </>        
    );
};