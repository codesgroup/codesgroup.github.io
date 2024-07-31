import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuNoticias } from './components/MenuNoticias';
import { Homepage } from './components/Homepage';
import NoticiasDetalhadas from  './components/NoticiasDetalhadas';
import { MenuArtigos } from './components/MenuArtigos';
import ArtigoDetalhado from './components/ArtigoDetalhado';



const Routing = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/news" element={<MenuNoticias/>} />
            <Route path="/news/:id" element={<NoticiasDetalhadas />} />
            <Route path="/artigos" element={<MenuArtigos />} />
            <Route path="/artigos/:id" element={<ArtigoDetalhado />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Routing;