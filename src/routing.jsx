import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuNoticias } from './components/MenuNoticias';
import { Homepage } from './components/Homepage';
import NoticiasDetalhadas from  './components/NoticiasDetalhadas';


const Routing = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/news" element={<MenuNoticias/>} />
            <Route path="/news/:id" element={<NoticiasDetalhadas />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Routing;