import React from 'react';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';



export default class Payment extends React.Component<any, any> {

    render() {

        return (
            <div>

  <div className="form-group mx-auto" style={{width: "400px"}}>
   Credit card: <input type={"text"} className="form-control"  placeholder="Creadit card"/>
  </div>
   
 
  <div className="form-group mx-auto" style={{width: "400px"}}>
   ID number: <input type="number" className="form-control" placeholder="ID number"/>
  </div>

            <div className="form-group mx-auto" style={{width: "100px"}}>
            <Button size="small" variant="contained" color="primary">PAY</Button>
            </div>
            </div>
        )

    }





}