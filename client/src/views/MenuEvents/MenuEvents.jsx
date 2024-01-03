import Schedule from '../../components/Schedule';
import { Link } from 'react-router-dom';

import '../../utils/styles/_utils.scss';
import { createEvents } from '../../utils/helpers/createEvents';
import { useForm } from 'react-hook-form';

const MenuEvents = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className='container container--color'>
            <p className='title'>Редагувати події</p>
            <Link
                to='/create-event'
                className='button button--border button--center'
            >
                Створиті нову подію
            </Link>
            <form onSubmit={handleSubmit(createEvents)}>
                <input
                    type='date'
                    placeholder='Виберіть дату початку'
                    {...register('fields.startDate', {})}
                />
                <input
                    type='number'
                    placeholder='Кількість днів'
                    {...register('fields.days', {})}
                />
                <input
                    type='submit'
                    className='button button--border button--center'
                    value='Створитb події на заданий строк'
                />
            </form>

            <Schedule type={'edit'} calendar={true} />
            <Link to='/admin' className='button button--border button--center'>
                Назад
            </Link>
        </div>
    );
};

export default MenuEvents;
