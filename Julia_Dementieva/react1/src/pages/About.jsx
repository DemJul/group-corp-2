import React from 'react'
import {Paper} from '@material-ui/core';
import './About.css'

export const About = ({infoPerson, isLoading }) => {

    if(isLoading){
        return(<div>ЗАгрузка</div>)
    }
    return (
        (infoPerson) ? 
            (<div className={"header"}>  
                <Paper elevation={3} style={{width: "35%",height: "58%", backgroundRepeat: 'no-repeat',
                backgroundPosition: "center center",
                backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/55c8e052e4b01bd89f02a45e/1452208562614-J8AFSSTSMN3DJ6Q798XX/ke17ZwdGBToddI8pDm48kE7xzgWkeVHhMSpwGz7q3y4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2du1iGr6rVFVouDCrC-EYDz_rjS4LofYkqCp0pRSzPi5Jm7cT0R_dexc_UL_zbpz6JQ/image-asset.jpeg?format=1000w')"}}>
                </Paper>
                <Paper elevation={3} style={{width: "56%",height: "80%"}}>
                    <div className='infoUser'> 
                        <h1>Логин: {infoPerson.name}</h1>
                        <h1>Возраст: {infoPerson.age}</h1>
                        <h1>Город: {infoPerson.city}</h1>
                        <h1>Главный чат: {infoPerson.mainChat}</h1>

                    </div>
                </Paper>
            </div>) : <div>Данные не загрузились</div>
    )
}

