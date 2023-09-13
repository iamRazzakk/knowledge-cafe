import PropTypes from 'prop-types';
import { prototype } from 'postcss/lib/previous-map';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>

        </div>
    );
};


Blog.PropTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;