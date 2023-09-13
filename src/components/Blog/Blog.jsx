import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { Title, Cover, Author_img, Author, Reading_Time, Posted_Date, Hashtag } = blog;
    return (
        <div>
            <img src={Cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-14 h-14 rounded-full' src={Author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div>
                </div>
                <p>{Reading_Time}.min read</p>
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