/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { BsBookmarksFill } from 'react-icons/bs';

const Blog = ({ blog, handelAddBookMark, handleMarkAsRead }) => {
    // console.log(blog);
    const { ID, Title, Cover, Author_img, Author, Reading_Time, Posted_Date } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={Cover} alt="" />
            <div className='flex justify-between mb-4 '>
                <div className='flex items-center'>
                    <img className='w-14 h-14 rounded-full' src={Author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <p>{Reading_Time}.min read</p>
                    <button onClick={() => handelAddBookMark(blog)}>
                        <BsBookmarksFill className='text-2xl text-red-500'></BsBookmarksFill>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2> <br />
            <p>
                Hashtag: {blog.Hashtag}
            </p>
            <button onClick={() => handleMarkAsRead(ID,Reading_Time)} className='text-purple-500 font-bold underline'>Mark as read</button>
        </div>
    );
};


Blog.prototype = {
    blog: PropTypes.object.isRequired,
    handelAddBookMark: PropTypes.func
}
export default Blog;