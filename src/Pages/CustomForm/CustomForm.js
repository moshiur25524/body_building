import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './CustomForm.css'

const CustomForm = () => {
    return (
        <div className='form-field'>
            <h1 className='text-center highlight'>Get User Information</h1>
            <form action="">
                <PageTitle title='Form'></PageTitle>
                <input type="text" name="name" placeholder='Your Nice Name' id="" /> <br />
                <input type="Email" name="Email" placeholder='Your Email' id="" /><br />
                <input type="password" name="password" placeholder='Your Password' id="" />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default CustomForm;