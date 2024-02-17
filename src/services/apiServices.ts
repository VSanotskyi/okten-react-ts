import axios from 'axios';
import {baseURL} from '../constants/urls';

const apiServices = axios.create({baseURL});

export {
    apiServices,
};