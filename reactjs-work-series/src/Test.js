import React from 'react';

let data =  [ 
{
  name : 'chicken',
  ingredient : ['spinach','chillies']
}];    
  
class Test extends React.Component {
    constructor(props){
    super(props);
       this.state={ recipes :[] } 
       this.addRecipe=this.addRecipe.bind(this);
    }

    addRecipe (recipe) {
      this.setState({ 
         recipes: [...this.state.recipes, recipe]
      });
    }
    componentWillMount(){
      this.setState({
        recipes : data
      });
    } 
    render() {
     return (
      <div className="App">
         <h2>Welcome to the Recipe Book</h2>
         <dl>
         {this.state.recipes.map(recipe => {
             return ( <div key={recipe.name}>
                 <dt>{recipe.name}</dt>
                 <dd>{recipe.ingredient.join(',')}</dd>
                 <hr></hr>
                </div>
               )
             })
         }
      </dl>
     
        Add Recipe
        <AddRecipe addRecipe={this.addRecipe}/>
      </div>
    );
 }
}

class AddRecipe extends React.Component{
   add(){
      this.props.addRecipe({name: this.name.value, ingredient: this.ing.value.split(',')});
   }
   render(){
      return (
         <div>
           <input ref={name=>this.name=name}/>
           <input ref={ing=>this.ing=ing}/>
           <input type='button' onClick={this.add.bind(this)} value='Add'/>
         </div>
      )
   }
}
//<!--ReactDOM.render(<Test/>, document.getElementById('root'));-->
export default Test