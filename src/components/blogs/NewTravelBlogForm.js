import React from 'react';
import Card from '../ui/Card';
import classes from './NewTravelBlogForm.module.css';


const NewTravelBlogForm = () => {

    const submitHandler = (event) => {
        //prevent refresh on submit
        event.preventDefault();

    };
    

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" id="image" required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5"></textarea>
                </div>

                <div className="classes.action">
                    <button>Add Blog</button>
                </div>

            </form>
        </Card>
    );
};

export default NewTravelBlogForm;
