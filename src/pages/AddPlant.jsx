import { useRef } from 'react';
import { useHistory } from 'react-router';

import classes from './AddPlant.module.css';

export default function AddPlant() {
  const history = useHistory();

  const titleInputeRef = useRef();
  const imageInputeRef = useRef();
  const descriptionInputeRef = useRef();
  const wateredInputeRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputeRef.current.value;
    const enteredImage = imageInputeRef.current.value;
    const enteredDescription = descriptionInputeRef.current.value;
    const enteredWatered = wateredInputeRef.current.value;

    const plantData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      watered: enteredWatered,
    };

    onAddPlant(plantData);
  }

  function onAddPlant(plantData) {
    fetch('https://plant-app-3bea9-default-rtdb.firebaseio.com/plants.json', {
      method: 'POST',
      body: JSON.stringify(plantData),
      header: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      history.replace('/');
    });
  }

  return (
    <div className={classes.page}>
      <div className={classes.form_container}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label className={classes.label} htmlFor="title">
            Name Of Plant
          </label>
          <input
            className={classes.input}
            type="text"
            required
            id="title"
            maxLength="50"
            ref={titleInputeRef}
          />

          <label className={classes.label} htmlFor="image">
            Image Url
          </label>
          <input
            className={classes.input}
            type="text"
            required
            id="image"
            ref={imageInputeRef}
          />

          <label className={classes.label} htmlFor="image">
            Description
          </label>
          <textarea
            className={classes.input}
            id="image"
            required
            rows="5"
            maxLength="200"
            ref={descriptionInputeRef}
          ></textarea>

          <label className={classes.label} htmlFor="water">
            Watered
          </label>
          <input
            className={classes.input_checkbox}
            type="checkbox"
            id="water"
            ref={wateredInputeRef}
          />

          <div>
            <div className={classes.submitBtn_container}>
              <button className={classes.submiteBtn}>Add new pant</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
