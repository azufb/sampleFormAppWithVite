import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SampleDynamicForm from './components/SampleDynamicForm';
import SampleForm from './components/SampleForm';
import List from './components/List';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='form' element={<SampleForm />} />
                <Route path='dynamicForm' element={<SampleDynamicForm />} />
                <Route path='list' element={<List />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;