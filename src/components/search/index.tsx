import React from 'react';


export default class Search extends React.Component<any, any> {

    render() {

        const {searchOperation, searchValue, inHebrew, languages, lang } = this.props

        return ( <div>
                <div className="form-group mx-auto" style={{width: "400px"}}> Show Hebrew books
                  <input type="checkbox" onChange={(e) => {
                  const inHebrew = e.target.checked;
                  searchOperation(searchValue, inHebrew, lang) 
          }} />

        </div>
        <div className="form-group mx-auto" style={{width: "400px"}}>
          <input className="form-control" placeholder="search by name" value={searchValue} onChange={(e) => {
            const searchValue = e.target.value;
            searchOperation(searchValue, inHebrew, lang)
          }} />
        </div>

        <div>
                    Languege
                   <select className="form-control mx-auto" style={{width: "400px"}} value={this.props.lang} onChange={
                        (e) => {
                            const lang = e.target.value;
                            searchOperation(searchValue, inHebrew, lang);
                        }
                    }>
                        {languages.map((item: any, index:number) => <option key={`key_${index}`}> {item} </option>)}
                    </select>
                </div>

    </div>
        )
    }



}

