import React from 'react';


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
                    Title: <input value={title} onChange={(e:any)=> {
                    this.setState({title: e.target.value})
                    }} type="text"/>
                    
                    Language: <input value={language} onChange={(e:any)=> {
                    this.setState({language: e.target.value})    
                    }} type="text"/>
                    
                    Image: <input value={image} onChange={(e:any)=>{
                    this.setState({image: e.target.value})    
                    }}  type="text"/>
                    
                    <button onClick={(r)=>addBookToList(this.state)}>Create a new book</button>
                 
                    
                </div>

            </div>

          )


    }
                    

}  