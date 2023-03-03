import React from 'react';
import ReactDOM from 'react-dom/client';
// import Calculator from './chapter_12/Calculator';
import Card from './chapter_13/Card';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './chapter_04/clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Accommodate from './chapter_07/Accommodate';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendanceBook';
// import NameForm from './test/test';
// import SignUp from './chapter_11/SignUp';
// import TemperatureInput from './chapter_12/TemperatureInput';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);

reportWebVitals();
