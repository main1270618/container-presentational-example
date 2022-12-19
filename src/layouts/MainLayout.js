import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';

class MainLayout extends React.Component {
    
    render(){
        return(
            <div className='wrap'>
                <div className='header'>

                </div>
                <div className='container'>
                    <Outlet/>
                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
}

export default MainLayout;