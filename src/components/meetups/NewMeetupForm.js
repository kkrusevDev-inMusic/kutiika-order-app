import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  // const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      // image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Име</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="address">Офис</label>

          <select
            className={classes.dropdown}
            name="cars"
            id="cars"
            ref={addressInputRef}
          >
            <option value="InMusic">InMusic</option>
            <option value="Flatrock">Flatrock</option>
            <option value="Forkpoint">Forkpoint</option>
            <option value="Telenor">Telenor</option>
            <option value="Tera">Tera</option>
          </select>

          {/* <input
          type="text"
          required
          id="address"
          ref={addressInputRef}
          ></input> */}
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Поръчка</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Изпрати Поръчката</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
