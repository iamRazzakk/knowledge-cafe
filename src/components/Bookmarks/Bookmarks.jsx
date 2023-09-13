import Bookmark from "../Singel Book Mark/Bookmark";

// import Bookmark from '../Singel Book Mark/Bookmark';
const Bookmarks = ({ bookmarks,readingTime }) => {
    console.log(bookmarks);
    return (
        <div className='md:h-1/3 bg-gray-300 ml-4 mt-2 pt-2'>
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h1 className='text-3xl text-center '>Bookmarked Blog: {bookmarks?.length}</h1>
            {
                bookmarks?.map((bookmark => <Bookmark key={bookmark.id}
                    bookmark={bookmark}></Bookmark>))
            }
        </div>
    );
};
// Bookmark.propTypes = {
//     bookmarks: PropTyeps.array
// }
export default Bookmarks;

