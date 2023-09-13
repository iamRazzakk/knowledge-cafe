import PropTypes from 'prop-types';
import { BsBookmarksFill } from 'react-icons/bs';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { Title, Cover, Author_img, Author, Reading_Time, Posted_Date, Hashtag } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={Cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-14 h-14 rounded-full' src={Author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div>
                </div>
                <div className='flex gap-2 justify-center'>
                <p>{Reading_Time}.min read</p>
                <BsBookmarksFill></BsBookmarksFill>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2> <br />
            <p>
            Hashtag: {blog.Hashtag}
            </p>
        </div>
    );
};


Blog.prototype = {
    blog: PropTypes.object.isRequired
}
export default Blog;