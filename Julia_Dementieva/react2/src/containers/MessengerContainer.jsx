import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { nanoid } from 'nanoid';
import {Messenger} from 'components/Messenger';
import {aboutLoadAction} from '../actions/about';
import {chatsLoadAction, chatsMessageSendAction} from '../actions/chats';


export const MessengerContainer = (props) => {
    
    const dispatch = useDispatch();

    const [readyAbout, entriesAbout] = useSelector((state) => [state.about.ready, state.about.entries]);
    let namePerson = (readyAbout) ? entriesAbout.name : null;

    const chats = useSelector((state) => state.chats.entries);

    const {id} = useParams();

    let chatId =  id ? id: null;
    let messages =  (chatId && chats[chatId]) ? chats[chatId].messages: null;
    let authorChat =  (chatId && chats[chatId]) ? chats[chatId].author: null;
    let avatarChat =  (chatId && chats[chatId]) ? chats[chatId].avatar: null;
    
    const isLoadingChat = useSelector((state) => state.chats.loading);

    useEffect(() => {
        if(!chatId) {
            dispatch(chatsLoadAction());
            dispatch(aboutLoadAction());
        }
    }, []);

    const handleMessageSend = (message) => {
        dispatch(chatsMessageSendAction({
            ...message,
            id: nanoid(),
            chatId,
        }));
    };

    return(
        <Messenger authorChat={authorChat}
            namePerson={namePerson}
            avatarChat={avatarChat}
            messages={messages}
            isLoading={isLoadingChat} 
            onAdd={handleMessageSend} />
        )
    
}