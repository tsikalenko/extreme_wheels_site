import axios from '../utils/instance/instance';

export const createParticipant = async (newParticipant) => {
    const { data } = await axios.post('/participants', newParticipant);
    return data;
};

export const updateParticipant = async (
    _id,
    eventID,
    participantData,
    payment,
    token
) => {
    const { data } = await axios.put('/participants', {
        _id,
        eventID,
        data: participantData,
        payment,
        token,
    });
    return data;
};

export const getParticipantOfEvents = async (eventId, token) => {
    const { data } = await axios.post('/participants/event', {
        eventId,
        token,
    });
    return data;
};

export const getParticipant = async (participantId) => {
    const { data } = await axios.get(`/participants?id=${participantId}`);
    return data;
};

export const deleteParticipant = async (participantId) => {
    const { data } = await axios.delete(`/participants/${participantId}`);
    return data;
};
