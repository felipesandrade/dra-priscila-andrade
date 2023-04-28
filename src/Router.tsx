import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { Location } from './pages/Location';
import { About } from './pages/About';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Location />} />
            </Route>
        </Routes>
    )
}

