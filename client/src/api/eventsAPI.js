import axios from '../utils/instance/instance';

export const createEvent = async (newEvent) => {
    const { data } = await axios.post('/events', newEvent);
    return data;
};

export const getAllEvents = async () => {
    const { data } = await axios.get('/events');
    return data;
};

export const getEnableEvents = async () => {
    const { data } = await axios.get('/events/enable');
    return data;
};

export const getEvent = async (eventID) => {
    const { data } = await axios.get(`/events?id=${eventID}`);
    return data;
};

export const updateEvent = async (eventData) => {
    const { data } = await axios.put('/events', eventData);
    return data;
};
