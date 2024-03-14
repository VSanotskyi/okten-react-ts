import {FC, PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {IAuth} from '../../interface';
import {registerThunk} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks';

interface IProps extends PropsWithChildren {

}

const Register: FC<IProps> = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const {registerError} = useAppSelector(state => state.authReducer);

    const handleRegister: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(registerThunk({user}));

        if (requestStatus === 'fulfilled') {
            navigate('/login');
        }
    };

    return (
        <>
            {registerError && <h2>{registerError}</h2>}
            <form onSubmit={handleSubmit(handleRegister)}>
                <input type="text"
                       placeholder={'username'} {...register('username')}/>
                <input type="password"
                       placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </>
    );
};

export {Register};