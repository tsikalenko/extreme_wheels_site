const parseDate = (data) => {
    const startDate = data.startDate.split('-').join('');
    const endDate = data.endDate.split('-').join('');
    const startTime = data.startTime.split(':').join('') + '00';
    const endTime = data.endTime.split(':').join('') + '00';
    return startDate + 'T' + startTime + '/' + endDate + 'T' + endTime;
};

export default parseDate;
