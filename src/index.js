import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// FOR NESTED AND SINGLE COMPONENTS
// function BookList()
// {
//   return(
//   <section className='booklist'>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//     </section>
//   )
// }

// USING SINGLE COMPONENT
// const Book = () =>
// {
//   return(
//     <article className='book'>
//       <img className='imgid' src='https://images-na.ssl-images-amazon.com/images/I/81DSi4ECwyL._AC_UL906_SR906,600_.jpg'  alt='' />
//       <h1>Bible</h1>
//       <h3>Shannon Bream</h3>
//     </article>)
// }
// ReactDom.render(<BookList/>, document.getElementById('root'));

// USING NESTED COMPONENTS

// const Book = () =>
// {
//   return(
//     <article className='book'>
//       <Image></Image>
//       <Booktitle></Booktitle>
//       <Author></Author>
//     </article>)
// }
// const Image = () => <img className='imgid' src='https://images-na.ssl-images-amazon.com/images/I/81DSi4ECwyL._AC_UL906_SR906,600_.jpg'  alt='' />
// const Booktitle = () => <h1>Bible</h1>
// const Author = () => <h3 style={{color:'green',fontSize:'35px'}}>Shannon Bream</h3>
// ReactDom.render(<BookList/>, document.getElementById('root'));

//USING OBJECTS:

// const firstBook = {
//   title:'Spirit of jersey',
//   author:'Nani',
//   img : 'https://static.toiimg.com/thumb/msid-65034960,width-219,height-317,imgsize-38564/65034960.jpg'
// };
// const secondBook = {
//   title:'How to Train your dragon',
//   author:'Hiccup',
//   img : 'https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg'
// }

// function BookList()
// {
//   return(
//   <section className='booklist'>
//       <Book
//       img={firstBook.img}
//       title={firstBook.title}
//       author={firstBook.author}>
//       <p>తగలక మేఘమే ఎగురికా నింగి వైపుకే కొలవని వేగమే అడుగులో చూపటానికే మరిచిన తారావే తారావే ముసుగుక నేడు వీడేలే పరుగుల దాహమే దాహమే బారువిక తెలికాయిలే</p>
//       </Book>
//       <Book
//       img={secondBook.img}
//       title={secondBook.title}
//       author={secondBook.author}
//       />
//       <Book
//       img='https://www.goalexandria.com/wp-content/uploads/2019/08/HarryPotter.jpg'
//       title='Harry Potter'
//       author='Kummersami'
//       />
//     </section>
//   )
// }
// const Book = (props) =>{
//   return(
//     <article className='book'>
//       <img src={props.img} style={{width:'170px',height:'250px'}} alt=''/>
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       {props.children}
//     </article>
//   )
// }
// ReactDom.render(<BookList/>, document.getElementById('root'));

// Object destructuring:
// #1const Book = (props) =>{
//  const {img, title, author} = props
// #2 const Book = ({img, author, title}) =>{
// #3 const Book = ({img, author, title , children}) =>{

//USING ARRAY

const books = [
  {
    id: 1,
    title: "Spirit of jersey",
    author: "Nani",
    img: "https://static.toiimg.com/thumb/msid-65034960,width-219,height-317,imgsize-38564/65034960.jpg",
  },
  {
    id: 2,
    title: "How to Train your dragon",
    author: "Hiccup",
    img: "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
  },
  {
    id: 3,
    title: "Tom n Jerry",
    author: "Sherly",
    img: "https://m.media-amazon.com/images/M/MV5BMmYxMzE0MWItZTFmZC00OWM4LWFjOGEtNTQ3ZjNjNzIxMGIxXkEyXkFqcGdeQXVyMTMwMDQ0MzYx._V1_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;

        // {books.map((book,index)=>{
        // return <Book key={index} book={book}></Book>
        // note : Can also use above code if array is not dynamic - not changing frequently
        // If your array changes frequently or you gotta do some manipulations very often
        // It's suggested to have UNIQUE value for each record
        // Else can use the default index
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} style={{ width: "170px", height: "250px" }} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
