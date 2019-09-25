import React from "react";
import Book from "../book/index";


export default class BookList extends React.Component<any, any> {

    render() {
        const { books ,style, addToCart } = this.props
        books.sort(function(a:any, b:any) { return b.year - a.year;});
        return (
            <div>
                {books.map((book: any, index:number) => <Book addToCart={addToCart} key={index} {...book} style={style} /> )}
            </div>
        )
    }
}
