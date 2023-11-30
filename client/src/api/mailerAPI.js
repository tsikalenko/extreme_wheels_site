import axios from '../utils/instance/instance';

export const sendTeamBuilding = async (data) => {
    await axios.post('/mailer/team-building', data);
};

export const sentEventParticipants = async (participantList, eventId) => {
    await axios.post('/mailer/event', { participantList, eventId });
};
