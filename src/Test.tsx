import * as React from 'react';
import TestList from './TestList'
import './style.css'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const boxes = [1, 2, 3, 4, 5, 6, 7, 8]

const BasicCard = () => {
    return (
        <div className="outer-box">
            <div className="box" >
                <div className="box-header">
                    <div className="box-header-title"><Typography variant="h6" component="h6">
                    Sales by Countries
                    </Typography></div>
                    <div className="box-header-action">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="box-content">
                    <TestList />
                </div>

            </div>
        </div>
    );
}

export default function Test() {
    return <div className="container">
        {boxes.map(box => <BasicCard />)}
    </div>
    // return <BasicCard />
}