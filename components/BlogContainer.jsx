import React from 'react';
import BlogPost from './BlogPost';

function BlogContainer() {
    return (
        <div>
            <BlogPost title='1st post' body='body of post' />
            <BlogPost title='2nd post' body='body of post' />
            <BlogPost title='3rd post' body='body of post' />
            <BlogPost title='4th post' body='body of post' />
        </div>
    );
}

export default BlogContainer;