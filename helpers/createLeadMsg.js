import parseDate from './parseDate.js';

const createLeadMsg = (data, eventInfo, isDelete = false) => {
    const keys = Object.keys(data);
    const fields = keys.map((field) => {
        return `\n<b>${field}</b>: ${data[field]}`;
    });
    const msgTitle = isDelete ? 'Скасування' : 'Бронювання';
    const addToCalendar = `https://www.google.com/calendar/event?action=TEMPLATE&text=${
        data['Імя']
    }&dates=${parseDate(eventInfo)}&details=${
        data['Номер телефону (Телеграм/Вайбер)']
    }`;
    return `<b><i>${msgTitle}</i></b>\n\n<b>${eventInfo.title}</b>\n${
        eventInfo.startDate
    }, ${eventInfo.startTime}\n${fields},\n\n${
        !isDelete ? addToCalendar : ''
    }\n`;
};

export default createLeadMsg;
