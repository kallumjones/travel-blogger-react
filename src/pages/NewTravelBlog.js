import React from 'react';
import { useHistory } from 'react-router-dom';
import NewTravelBlogForm from '../components/blogs/NewTravelBlogForm'

const NewTravelBlog = () => {

    const history = useHistory();

    const addNewTravelblogHandler = (newBlogData) => {
        const apiUrl = process.env.REACT_APP_TRAVEL_DB_URL;
        // console.log(apiUrl);
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(newBlogData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            history.replace('/');
        });


    }

    return (
        <div>
            <h1>New Travel Blog</h1>
            <NewTravelBlogForm onAddTravelBlog={addNewTravelblogHandler}/>
        </div>
    )
}

export default NewTravelBlog
