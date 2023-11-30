import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';

import '../src/utils/styles/_utils.scss';

function App() {
    return (
        <div
            className='app'
            style={{
                backgroundImage:
                    'url(https://res.cloudinary.com/dd3fd4eey/image/upload/v1701291900/main_bg.png)',
            }}
        >
            <Header />
            <Routing />
            <Footer />
        </div>
    );
}

export default App;
