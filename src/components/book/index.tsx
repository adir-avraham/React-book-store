import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';


export default class Book extends React.Component<any, any> {

    render() {
        const { author, country, language, link, pages, title, year, image, style, addToCart } = this.props;

    return (
        <div>
            <table className="table table-striped table-bordered table-hover table-sm">         
            <tbody>
            <tr>
            <td><img height="30" width="50" src={image} alt=""/></td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{country}</td>
            <td>{language}</td>
            <td><a href={link}>Wikipedia page</a></td>
            <td>{pages}</td>
            <td>{year}</td>
            <td><Button size="small" variant="contained" color="primary" onClick={()=>{addToCart({image, language, title})}} >Add</Button></td>
            </tr>
            </tbody>
            </table>
        </div>
    )
    }
}

