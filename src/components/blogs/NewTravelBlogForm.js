import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './NewTravelBlogForm.module.css';

const NewTravelBlogForm = ({ onAddTravelBlog }) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const cityInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionRef = useRef();

    const submitHandler = (event) => {
        //prevent refresh on submit
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const newTravelBlog = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            city: enteredCity,
            description: enteredDescription
        }

        console.log(newTravelBlog);

        onAddTravelBlog(newTravelBlog);
    };
    

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" id="image" required ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required ref={cityInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required ref={descriptionRef} rows="5"></textarea>
                </div>

                <div className="classes.action">
                    <button>Add Blog</button>
                </div>

            </form>
        </Card>
    );
};

export default NewTravelBlogForm;
