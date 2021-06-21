import React from 'react'
import {  useHistory} from "react-router-dom";
import NewMeetForm from '../components/layout/meetups/NewMeetForm'

function NewMeetup() {
  const history = useHistory();

  const addMeetupHandler =( meetupData) =>
  {
    fetch(
      'https://react-meetups-f21cb-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'POST',
        body:JSON.stringify(meetupData),
        headers:{
          'Content-Type':'application.json'
        }
      }

      ).then(() =>{
        history.replace("/");
      })
  }
    return (
        <section>
          <NewMeetForm  onMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetup
