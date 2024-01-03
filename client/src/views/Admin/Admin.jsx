import { Link, useNavigate } from 'react-router-dom';
import '../../utils/styles/_utils.scss';

const Admin = () => {
    const navigate = useNavigate();

    return (
        <div className='container container--page'>
            <h2 className='title title--sm'>Панель адміністратора</h2>
            <Link to='/editor' className='button button--border'>
                Редагувати сторінки
            </Link>
            <Link to='/edit/events' className='button button--border'>
                Редагувати події
            </Link>
            <button
                onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                }}
                className='button button--border'
            >
                Вийти
            </button>
        </div>
    );
};

export default Admin;
