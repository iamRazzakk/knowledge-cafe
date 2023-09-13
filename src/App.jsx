import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
// import Bookmark from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBooksMark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handelAddBookMark = blog => {
    // console.log(blog);
    const newBookMarks = [...bookmarks, blog]
    setBooksMark(newBookMarks)
  }
  
  const handleMarkAsRead = (ID, time) => {
    // setReadingTime(...readingTime = time);
    // remove the read blog from book mark
    // console.log(ID);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.ID !== ID)
    setBooksMark(remainingBookmarks);
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }

  return (
    < >
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handelAddBookMark={handelAddBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        {/* <Bookmarks ></Bookmarks>
         */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
