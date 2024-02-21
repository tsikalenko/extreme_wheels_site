import { createEvent } from '../../api/eventsAPI';

export const createEvents = (data) => {
    const { fields } = data;
    const { startDate, days } = fields;
    const date = new Date(startDate);
    for (let i = 0; i < days; i++) {
        const styledDate = `${date.getFullYear()}-${
            date.getMonth() + 1 < 10
                ? '0' + (date.getMonth() + 1)
                : date.getMonth() + 1
        }-${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}`;
        const newEvent1 = {
            title: '10:00 Персональне ендуро тренування',
            price: 3000,
            startDate: styledDate,
            startTime: '10:00',
            endDate: styledDate,
            endTime: '13:00',
            description:
                'Персональне ендуро тренування з тренером на нашому мотоциклі з повним комплектом спорядження',
            img: 'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_6.jpg',
            letterSubject: 'Персональне эндуро тренування',
            letterHtml:
                'Дякуємо що забронювали тренування!<br/>Найближчим часом ми з Вами зв`яжемось!',
            fields: [
                {
                    name: 'Імя',
                    description: '',
                },
                {
                    name: 'Номер телефону (Телеграм/Вайбер)',
                    description: '',
                },
                {
                    name: 'Комментар',
                    description: '',
                    isRequired: false,
                },
            ],
            maxQuantity: 1,
            freeSlots: 1,
            enable: true,
        };
        const newEvent2 = {
            title: '13:30 Персональне ендуро тренування',
            price: 3000,
            startDate: styledDate,
            startTime: '13:30',
            endDate: styledDate,
            endTime: '16:30',
            description:
                'Персональне ендуро тренування з тренером на нашому мотоциклі з повним комплектом спорядження',
            img: 'https://res.cloudinary.com/dd3fd4eey/image/upload/v1701766811/main_gallery/main_gallery_6.jpg',
            letterSubject: 'Персональне эндуро тренування',
            letterHtml:
                'Дякуємо що забронювали тренування!<br/>Найближчим часом ми з Вами зв`яжемось!',
            fields: [
                {
                    name: 'Імя',
                    description: '',
                },
                {
                    name: 'Номер телефону (Телеграм/Вайбер)',
                    description: '',
                },
                {
                    name: 'Комментар',
                    description: '',
                    isRequired: false,
                },
            ],
            maxQuantity: 1,
            freeSlots: 1,
            enable: true,
        };
        createEvent(newEvent1);
        createEvent(newEvent2);
        date.setDate(date.getDate() + 1);
    }
};
