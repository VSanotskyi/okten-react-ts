import {FC, PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {IAuth} from '../../interface';
import {loginThunk} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks';

interface IProps extends PropsWithChildren {

}

const Login: FC<IProps> = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const navigate = useNavigate();
    const {loginError} = useAppSelector(state => state.authReducer);

    const dispatch = useAppDispatch();

    const handleLogin: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(loginThunk({user}));

        if (requestStatus === 'fulfilled') {
            navigate('/cars');
        }
    };

    return (
        <>
            {loginError && <h2>{loginError}</h2>}
            <form onSubmit={handleSubmit(handleLogin)}>
                <input type="text"
                       placeholder={'username'} {...register('username')}/>
                <input type="password"
                       placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </>
    );
};

export {Login};