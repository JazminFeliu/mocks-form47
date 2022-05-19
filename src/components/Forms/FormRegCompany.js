import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";

export const FormRegCompany = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
          <form  onSubmit={handleSubmit(onSubmit)}>
                <div >
                        <label>MMR </label>
                        <input type='text' {...register('mmr')}/>
                </div>
                <div >
                        <label>Working Capital Year (% of Revenue): </label>
                        <input type='text' {...register('working_capital')}/>
                </div>
                <div >
                        <label>Rotation of WC (Months): </label>
                        <input type='text' {...register('rotation')}/>
                </div>
                <div >
                        <label>CAPEX per year (% of Revenue): </label>
                        <input type='text' {...register('capex')}/>
                        <p></p>
                </div>
                <div>
                        <label>Industry</label>
                        <select {...register('company')}>
                            <option value='i1'>Industry 1</option>
                            <option value='i2'>Industry 2</option>
                            <option value='i3'>Industry 3</option>
                        </select>      
                </div>  
                {/* <div >
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
                </div> */}

                <input  type='submit' value= 'Req: Registrar Company' />
            </form>                       
        </>
        
    );
};