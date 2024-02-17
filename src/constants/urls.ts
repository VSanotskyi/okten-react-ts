const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars';


const carsUrls = {
    base: cars,
    byId: (id: number): string => `${cars}/${id}`,
};


export {
    baseURL,
    carsUrls,
};