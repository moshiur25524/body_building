import React from 'react';
import { useForm } from 'react-hook-form';
import MyVerticallyCenteredModel from '../Shared/MyVerticallyCenteredModel/MyVerticallyCenteredModel';
import './CheckOut.module.css'

const CheckOut = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { register, reset, formState, formState: { isSubmitSuccessful }, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    console.log(errors);
    return (
        <div className='container'>
            <h1 className='text-center'>CheckOut page</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />

                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />

                <input type="text" placeholder="Present Address" {...register("Present Address", { required: true, maxLength: 500 })} />

                <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />

                <input onClick={() => setModalShow(true)} type="submit" />
                <MyVerticallyCenteredModel show={modalShow}
                    onHide={() => setModalShow(false)} />
            </form>
        </div>
    );
};

export default CheckOut;