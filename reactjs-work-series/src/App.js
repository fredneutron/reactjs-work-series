import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) { 
      super(props); 
      this.state = {
        list : [],
        display: this.displayOn,
        displayOn: {display: 'block !important'},
        displayOff: {diplay: 'none !important'}
        }
      this.getInputvalue = this.getInputvalue.bind(this);
      this.setDisplay = this.setDisplay.bind(this);
  }
  getInputvalue(person){
      this.setState({ 
        list : [...this.state.list, person] });
  }
  setDisplay(){
      if (this.state.display === this.state.displayOn) {
         this.setState({
            display: this.state.displayOff
         });
      } else if(this.state.display === this.state.displayOff) {
         this.setState({
            display: this.state.displayOn
         });
      }

      
  }
  componentWillMount(){
      this.setState({
        list : [],
        diplay: this.state.displayOn
      });
    }

  render() {
    return (
      <div className="col-md-5 col-md-offset-3 col-sm-7 col-sm-offset-3">
        <div className="clearfix"></div>
        <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title"> <i className="fa fa-comments"></i> Chat</h3>
            <div className="dropdown">
                <button className="btn btn-primary btn-sm" type="button" id="close" onClick ={this.setDisplay}> <span className="caret"></span></button>
            </div>
        </div>
        <div className="panel-body">
            <div className="col-md-12" id="result" style={this.state.display}> {this.state.list.map(person => {
             return ( <div key={person.name}>
                 <span>{person.name}</span>
                </div>
               )
             })
         }</div>
        </div>
        <AppInputpanel getInputvalue={this.getInputvalue}/>
    </div>
</div>    );
  }
}
 class AppInputpanel extends React.Component{
    add(){
    this.props.getInputvalue({ name: this.name.value});
    }
    reset(){
        this.props.setState({
            list: []
        });
    }
    render(){
        return(<div className="panel-footer">
            <form name="form">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-addon"><span><a onClick ={this.reset.bind(this)}><i className="glyphicon glyphicon-refresh"></i></a></span></div>
                        <input className="form-control"  ref={name=>this.name = name}type="text" />
                        <div className="input-group-btn">
                            <button className="btn btn-warning" type="button" onClick = {this.add.bind(this)} >Add </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>);
    }
 }


export default App;
