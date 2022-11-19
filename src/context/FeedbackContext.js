import { createContext, us, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const  FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id : 1,
            text : 'This is feedback item 1',
            rating : 10
        },

        {
            id : 2,
            text : 'This is feedback item 2',
            rating : 9
        },

        {
            id : 3,
            text : 'This is feedback item 3',
            rating : 8
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    });

    // Add Item
    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    //Delete Item
    const deleteFeedBack = (id) => {
        if(window.confirm('Are you sure u want to delete ??')){
          setFeedback(feedback.filter((item) => item.id !== id));
        } 
    }

    //Update Item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item));
    }

    //Set Item To Be Updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit : true
        });
    } 

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        updateFeedback,
        editFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;