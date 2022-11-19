import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {

    // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev + 1
    //     });
    // } 

    // const handleClick = id => {
    //     console.log(id);
    // }

    const {deleteFeedBack, editFeedback} = useContext(FeedbackContext);

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedBack(item.id)} className="close">
            <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

// FeedbackItem.prototypes = {
//     item : PropTypes.object.isRequired
// }

export default FeedbackItem