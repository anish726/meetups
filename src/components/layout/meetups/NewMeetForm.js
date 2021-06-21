import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from './NewMeetForm.module.css'


function NewMeetForm(props) {

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    const submitForm = (e) =>{
        e.preventDefault();
        const enterTitle= titleRef.current.value;
        const enterImage= imageRef.current.value;
        const enterAddress= addressRef.current.value;
        const enterDescription= descriptionRef.current.value;

        const meetupData = {
            title:enterTitle,
            image:enterImage,
            address:enterAddress,
            description:enterDescription
        }
        props.onMeetup(meetupData);

    }
    return (
      
        <form className={classes.form} onSubmit={submitForm}>
              <Card >
            <div className={classes.control}>
                <label htmlFor="titel">Meetup Title</label>
               <input type='text' required id='titel' ref={titleRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
               <input type='url' required id='image' ref={imageRef}/>
               
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
               <input type='text' required id='address' ref={addressRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
               <textarea  id='description' required rows='5' ref={descriptionRef}> </textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
            </Card>
        </form>
    
    )
}

export default NewMeetForm
