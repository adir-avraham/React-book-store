import React from 'react';
import Button from '@material-ui/core/Button';

export default class CreateBook extends React.Component<any, any> {
    constructor (props: any){
        super(props)
        this.state = { title: "", language: "", image: "" }

    }
    render() {
        
        const {title, language, image} = this.state;
        const { addBookToList } = this.props
        
        return (
            <div >
                <div>
                    <div className="form-group mx-auto" style={{width: "400px"}}>
                    Title: <input className="form-control" value={title} onChange={(e:any)=> {
                    this.setState({title: e.target.value})
                    }} type="text"/>
                    </div>
                    <div className="form-group mx-auto" style={{width: "400px"}}>
                    Language: <input className="form-control" value={language} onChange={(e:any)=> {
                    this.setState({language: e.target.value})    
                    }} type="text"/>
                    </div>
                    <div className="form-group mx-auto" style={{width: "400px"}}>
                    Image: <input className="form-control" value={image} onChange={(e:any)=>{
                    this.setState({image: e.target.value})    
                    }}  type="text"/>
                    </div>

                    <div className="form-group mx-auto" style={{width: "100px"}}>
                    <Button onClick={(r)=>addBookToList(this.state)} variant="contained" color="primary">Create</Button>
                    </div>             
                </div>

            </div>

          )


    }
                    

}  