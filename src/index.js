import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfilePage from './components/ProfilePage';

import './styles/style.css';
 
 
const root = createRoot(document.getElementById('root'));
root.render(<ProfilePage />);