import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEvent } from '../../api/eventsAPI';
import { useForm } from 'react-hook-form';
import { createParticipant } from '../../api/paticipantsAPI';

import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';
import { BeatLoader } from 'react-spinners';

const RegistrationForm = () => {
    const { eventId } = useParams();
    const [eventInfo, setEventInfo] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                setEventInfo(await getEvent(eventId));
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ mode: 'onChange' });

    const renderFields = () => {
        return eventInfo.fields.map((field) => (
            <div className='edit__item edit__item--column' key={field.name}>
                <h3 className='edit__subtitle'>{field.name}</h3>
                {field.description && (
                    <h3 className='edit__description'>{field.description}</h3>
                )}
                <input
                    type='text'
                    className='edit__input edit__input--text'
                    {...register(`${field.name}`, {
                        required: field.isRequired ? field.isRequired : true,
                    })}
                />
                {errors[field.name]?.type === 'required' && (
                    <p role='alert' className='edit__error'>
                        Заповніть будьласка поле
                    </p>
                )}
            </div>
        ));
    };

    const parseDate = (data) => {
        const startDate = data.startDate.split('-').join('');
        const endDate = data.endDate.split('-').join('');
        const startTime = data.startTime.split(':').join('') + '00';
        const endTime = data.endTime.split(':').join('') + '00';
        return startDate + 'T' + startTime + '/' + endDate + 'T' + endTime;
    };

    const onSubmit = async (data) => {
        let dataHTML = '';
        for (const key in data) {
            dataHTML += `${key}: ${data[key]}</br>`;
        }
        const letterHtml =
            eventInfo.letterHtml +
            `
            </br>
            </br>
            Данні бронювання: 
            </br>
            Дата тренування: ${eventInfo.startDate}
            </br>
            Початок тренування: ${eventInfo.startTime}
            </br>
            ${dataHTML}
            <a 
                href='https://www.google.com/calendar/event?action=TEMPLATE&text=${
                    eventInfo.title
                }&dates=${parseDate(eventInfo)}&details=${
                eventInfo.description
            }' 
                target='_blank' 
                style='font-size: 18px;
                    display: block;
                    cursor: pointer;
                    text-align: center;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    padding: 15px 0;
                    margin: 20px auto;
                    width: 50%;
                    border: 2px solid transparent;
                    background-color: #ffcc33;
                    color: #000000;
                    text-decoration: none;'>
                Додати в мій Google Calendar
            </a>`;

        try {
            await createParticipant({
                eventId,
                email: data.email,
                letterSubject: eventInfo.letterSubject,
                letterHtml: letterHtml,
                data,
            });
            navigate('/gratitude');
        } catch (err) {
            setIsErrorLoading(true);
        }
    };

    return (
        <>
            {isErrorLoading ? (
                <h2 className='error'>
                    Нажаль, виникла проблема зі завантаженням сторінки,
                    спробуйте оновити сторінку
                </h2>
            ) : Object.keys(eventInfo).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='edit container'>
                    <h2 className='edit__title edit__title--closest'>
                        {eventInfo.title}
                    </h2>
                    <h3 className='edit__subtitle edit__subtitle--capitalize attention'>
                        Вільних місць: {eventInfo.freeSlots}
                    </h3>
                    <h3 className='edit__subtitle edit__subtitle--capitalize'>
                        Початок: {eventInfo.startDate}, {eventInfo.startTime}
                    </h3>
                    <h3 className='edit__subtitle edit__subtitle--capitalize'>
                        Завершення: {eventInfo.endDate}, {eventInfo.endTime}
                    </h3>
                    <p className='edit__description pre-wrap'>
                        {eventInfo.description}
                    </p>
                    <h3 className='edit__subtitle edit__subtitle--lowercase'>
                        {eventInfo.price} грн.
                    </h3>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='edit__form'
                    >
                        <div
                            className='edit__item edit__item--column'
                            key={'email'}
                        >
                            <h3 className='edit__subtitle'>Email</h3>
                            <input
                                type='email'
                                className='edit__input edit__input--text'
                                {...register('email', {
                                    required: true,
                                })}
                            />
                            {errors.email?.type === 'required' && (
                                <p role='alert' className='edit__error'>
                                    Заповніть будьласка поле
                                </p>
                            )}
                        </div>
                        {renderFields()}
                        <button
                            type='submit'
                            className='button button--accent'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <BeatLoader color='#808000' />
                            ) : (
                                'Зарееструватися'
                            )}
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default RegistrationForm;
