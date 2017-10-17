import React from 'react'
import Contact from './Contact'

class App extends React.Component {
  /*  constructor(props){
        super(props);
        this.state = {
            name: ''
        };
    }*/
    render(){
        return (
           /* <div>
            <button onClick={() => {this.setState({name:'eevvvv'});}}>Click Me!</button>
            <h1>Hello {this.state.name} </h1>
            </div>*/
            <Contact/>
        );
    };
}
export default App;