import { useState } from 'react';
const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]); 
    const [newBook, setNewBook] = useState ({
        title: '',
        author: '',
})

 const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value})
 }   

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    form onSubmit={handleInputChange}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          />
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div> 
)}


export default Bookshelf; 