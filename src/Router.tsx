import { Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Location } from './pages/Location';
import { Treatment } from './pages/Treatment';
import { Consultaion } from './pages/Consultation';
import { Clinic } from './pages/Clinic';
import { Faq } from './pages/Faq';
import { Review } from './pages/Reviews';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/reumatologia" element={<Treatment />} />
                <Route path="/consulta" element={<Consultaion />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/clinica" element={<Clinic />} />
                <Route path="/avaliacao" element={<Review />} />
                <Route path="/contato" element={<Location />} />
            </Route>
        </Routes>
    )
}

