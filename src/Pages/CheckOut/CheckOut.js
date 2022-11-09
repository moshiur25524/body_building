import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import MyVerticallyCenteredModel from '../Shared/MyVerticallyCenteredModel/MyVerticallyCenteredModel';
// import './CheckOut.module.css'

const CheckOut = () => {

    // const [service , setService] = useState({})

    const [user, loading, error] = useAuthState(auth);
    const [modalShow, setModalShow] = React.useState(false);
    const { register, reset, formState, formState: { isSubmitSuccessful }, handleSubmit, formState: { errors } } = useForm();

    const watchModel = () => setModalShow(true)
    const onSubmit = data => {
        console.log(data)
        watchModel()
        reset()
    };
    console.log(errors);
    return (
        <div className='container'>
            <h1 className='text-center highlight my-5 checkout-header'>Checkout Service</h1>
            <div>
                <div>
                    <form className='form-field' onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />

                        <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />

                        <input type="text" placeholder="Present Address" {...register("Present Address", { required: true, maxLength: 500 })} />

                        <input type="email" value={user?.email} readOnly placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                        <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />

                        <input type="submit" />
                        <MyVerticallyCenteredModel show={modalShow}
                            onHide={() => setModalShow(false)} />
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;