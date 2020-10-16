import React from 'react';
import {Avatar,  makeStyles} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


import './Header.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: deepOrange[500], 
      },
});

export const Header = ({infoPerson, classes, push}) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleRedirect = () => {
        push('/');
    }

    return (
        (infoPerson) ?
        (<div className="header">
            {/* <Link to="/" style={{ textDecoration: 'none' }}><div className="header-logo">VChats</div></Link> */}
            <div button="true" onClick={handleRedirect} style={{ cursor: 'pointer' }} className="header-logo">VChats</div>
            <Link to="/About" style={{ textDecoration: 'none' }}>
                <div className="header-avatar">
                    <Avatar className={classes.root} src={infoPerson.avatar} />
                    {infoPerson.name}
                </div>
            </Link>
        </div>) : <div>Данные загружаются</div>
    )
 }
