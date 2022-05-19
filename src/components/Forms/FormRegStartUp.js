import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";

export const FormRegStartUp = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>            

                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div >
                            <label>StartUp Name: </label>
                            <input type='text' {...register('startup_name')}/>
                    </div>
                    <div >
                        <label>Title??? : </label>
                        <input type='text' {...register('title')}/>
                    </div>
                    <div >
                            <label>Short_description??: </label>
                            <input type='text' {...register('short_description')}/>
                    </div>
                    <div >
                            <label>Stage: </label>
                            <input type='text' {...register('stage')}/>
                    </div>
                    <div >
                        <label>Acquisition: </label>
                        <input type='text' {...register('acquisition')}/>
                    </div>
                    <div >
                            <label>Revenue: </label>
                            <input type='text' {...register('revenue')}/>
                    </div>
                    <div >
                            <label>Raised: </label>
                            <input type='text' {...register('raised')}/>
                    </div>
                    <div >
                            <label>Valuation: </label>
                            <input type='text' {...register('valuation')}/>
                    </div>
                    <div >
                            <label>Adjusted_val: </label>
                            <input type='text' {...register('adjusted_val')}/>
                    </div>
                    <div >
                            <label>Date: </label>
                            <input type='text' {...register('date')}/>
                    </div>
                    <div >
                            <label>Link: </label>
                            <input type='text' {...register('link')}/>
                    </div>
                    {/* <div>
                            <label>Company</label>
                            <select {...register('company')}>
                                <option value='c1'>Company 1</option>
                                <option value='c2'>Company 2</option>
                                <option value='c3'>Company 3</option>
                            </select>      
                    </div>                       */}
                        <input  type='submit' value= 'Req: Registrar StartUp' />                    
                </form>

        </>
        
    );
};