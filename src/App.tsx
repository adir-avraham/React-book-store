import './App.css';
import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';
import Cart from './/components/cart'
import CreateBook from './components/create-book'
import Header from './components/header/index'
import React from 'react';
import Search from './/components/search'

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

//const newStyle = { opacity: 0.2, background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}     

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = { 
      lang: "All",
      style : {background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"},
      searchValue: "",
      inHebrew: false,
      filteredBookList: booksWithImages, 
      fullBookList: booksWithImages,
      cart: [],
      }
  }

  searchOperation = (searchText: string, inHebrew: boolean, lang: string): void => {

    const {fullBookList} = this.state;


    const filteredData = fullBookList.filter((book: any) => { 
    const isInHebrew = inHebrew ? book.language.toLowerCase() === "hebrew" : true
    const isLang = lang !== "All" ? book.language === lang : true 

    return book.title.toLowerCase().includes(searchText) && isInHebrew && isLang
   })
    
    this.setState({lang, filteredBookList: filteredData, searchValue: searchText, inHebrew })

  }
  addToCart = (book: any) => {
    this.setState({cart: [...this.state.cart, book]})
  }

  render() {
    const {style, filteredBookList, searchValue, inHebrew, fullBookList, cart } = this.state
    const searchProps = {lang: this.state.lang, languages: getLanguages(fullBookList), searchOperation: this.searchOperation, inHebrew, searchValue}
    
    
    
    return (
      <div className="App">
        <Header style={{ color: "#B4BFCD", background: "#5142B1", padding: "40px" }} title="Books Store"/>

        <Header title="Search" />
        <CreateBook addBookToList={(book: any)=>{
        const newData = [...fullBookList, { ...book, inHebrew: true }];
        this.setState({ filteredBookList: newData, fullBookList: newData })
          
        }}/>
         
        <Search {...searchProps}/>

        <Header style={{ color: "#B4BFCD", background: "#0AA12C", padding: "15px" }} title="Cart"/>
        <Cart books={cart} style={style}/>
 
        
        <Header style={{ color: "#B4BFCD", background: "#88768C", padding: "15px" }} title="Our Books"/>
        <BookList addToCart={this.addToCart} books={filteredBookList} style={style} />

      </div>
    )
  }

}


function getLanguages(books: Array<any>) {
  return Object.keys(books.reduce((allCats, book: any) => {
    return { ...allCats, [book.language]: true }
  }, { "All": true }))
}


export default App;