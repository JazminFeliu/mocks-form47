import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";

export const FormInicialChat = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>                      
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div >
                        <label>Foto?: </label>
                        <input type='text' {...register('imagen1', {
                            required: true})} />
                </div>
                <div >
                        <label>Name: </label>
                        <input type='text' {...register('nombre', {
                            required: true})} />
                </div>                            
                <div >
                        <label>Age: </label>
                        <input type='text' {...register('edad')}/>
                </div>
                <div >
                        <label>Country</label>
                        <select {...register('pais')}>
                            <option value='ar'>Argentina</option>
                            <option value='cl'>Chile</option>
                            <option value='cr'>Costa Rica</option>
                            <option value='es'>España</option>
                            <option value='it'>Italia</option>
                            <option value='fr'>Francia</option>
                        </select>
                </div>
                <div >
                        <label>StartUp Name: </label>
                        <input type='text' {...register('startupName', {
                            required: true})} />
                </div>             
                <input  type='submit' value= 'Req: Continuar' />
                <input  type='submit' value= 'Resetear' />

            </form>                
        </>        
    );
};