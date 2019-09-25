import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';


export default class Cart extends React.Component<any, any> {

    
    render() {
        
        const {books} = this.props;
        
        return (  
        <div>
            {books.map((book: any, index: number)=>
            <table key={`id_${index}`} className="table-success table-striped table-bordered table-hover table-sm">         
            <tbody>
            <tr>
            <td><img height="30" width="50" src={book.image} alt=""/></td>
            <td>{book.title}</td>
            <td>{book.language}</td>
            <td><Button size="small" variant="contained" color="secondary" onClick={()=>{alert("Should be deleted")}} >Delete</Button></td>
            </tr>
            </tbody>
            </table>,)}
        </div>
        )
    }
} 





