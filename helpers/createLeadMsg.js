const createLeadMsg = (data, eventInfo, isDelete = false) => {
    const keys = Object.keys(data);
    const fields = keys.map((field) => {
        return `\n<b>${field}</b>: ${data[field]}`;
    });
    const msgTitle = isDelete ? 'Скасування' : 'Бронювання';
    return `<b><i>${msgTitle}</i></b>\n\n<b>${eventInfo.title}</b>\n${eventInfo.startDate}, ${eventInfo.startTime}\n${fields}`;
};

export default createLeadMsg;
