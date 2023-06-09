import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Location } from './pages/Location';
import { Treatment } from './pages/Treatment';
import { Consultaion } from './pages/Consultation';
import { Faq } from './pages/Faq';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/reumatologia" element={<Treatment />} />
                <Route path="/consulta" element={<Consultaion />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contato" element={<Location />} />
            </Route>
        </Routes>
    )
}

