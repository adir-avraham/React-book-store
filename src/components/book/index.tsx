import React from 'react';




export default class Book extends React.Component<any, any> {

    render() {
        const { author, country, language, link, pages, title, year, image, style } = this.props;

    return (
        <div style={style}>
            <h3>{title}</h3>
            <img height="100" width="100" src={image} alt=""/>
            <div>Author: {author}</div>
            <div>Country: {country}</div>
            <div>Language: {language}</div>
            <a href={link}>Wikipedia page</a>
            <div>Pages: {pages}</div>
            <div>Year: {year}</div>
        </div>
    )
    }
}

