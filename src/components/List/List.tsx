import {ReactNode} from 'react';

import css from './List.module.css';

interface IProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

const List = <T, >(props: IProps<T>) => (
    <ul className={css.list}>
        {props.items.map(props.renderItem)}
    </ul>
);


export {List};