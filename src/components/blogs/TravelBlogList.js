import React from 'react';
import {TravelBlogItem} from './TravelBlogItem';

import classes from './TravleBlogList.module.css';

const TravelBlogList = ({blogs}) => {
    return (
        <ul className={classes.list}>
            {blogs.map((blog) => (
                <TravelBlogItem key={blog.id} 
                id={blog.id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                city={blog.city}
                address={blog.address}/>
            ))}
        </ul>
    )
}

export default TravelBlogList
