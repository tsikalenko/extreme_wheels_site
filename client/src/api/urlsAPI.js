import axios from '../utils/instance/instance';

export const getUrl = async (name) => {
    const { data } = await axios.get(`/urls?name=${name}`);
    return data;
};

export const updateUrl = async (_id, url) => {
    const { data } = await axios.put('/urls', { _id, url });
    return data;
};
