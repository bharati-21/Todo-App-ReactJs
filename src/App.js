import React from 'react';
import './App.css';
import './index.css';
import Main from './Main.js'
import Header from "./Header"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
        items:[],
        id : 0,
        text : "",
        editItem : false,
        completed: false,
     }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.RandomKey = this.RandomKey.bind(this);

    this.handleEdit = this.handleEdit.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  
  RandomKey = e => {
    
        var ranNums =[];
        var flag = true;
        while (flag === true) {
            var rand = Math.floor(Math.random() * 10000);
            var i = 0;
            console.log(rand)
            for(i=0; i<ranNums.length; i++){
                if(ranNums[i]===rand) {
                    break;
                }
            }
            if(i===ranNums.length){

                console.log(rand);
                 ranNums.push(rand);
                return rand;            
            }
           
        }
    }

  handleChange = e =>  {
    this.setState({
      text: e.target.value
    });
  }
 
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.text==="" && this.state.editItem!==true )
    {
      alert("Enter a new goal!");
    }
    
    else {
          const newItem = {
            id: this.RandomKey(),
            text: this.state.text,
            completed : false,
            editItem : false
          }
          
          const filteredItems = this.state.items.filter(item => item.completed!==true)
          const completedItems =this.state.items.filter(item => item.completed===true)
          var completedArray = [].concat.apply([], completedItems);

          var updatedItems = []
          if(completedItems.length>0){
            
            updatedItems = [...filteredItems, newItem, ...completedArray]
          
          }
          else{
            updatedItems = [...this.state.items, newItem]
          }
         
          this.setState({
           
              items: updatedItems,
              text :"",
              id : 0,
              editItem : false,
              completed : false,
            
          })
    }
  } 
    
  

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id!==id)

      this.setState ({
        items:filteredItems,
      })
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id!==id)
    const selectedItem = this.state.items.find(item => item.id ===id) 
    this.setState ({
          items:filteredItems,
          text : selectedItem.text,
          editItem : true,
          completed : selectedItem.completed,
          id : selectedItem.id
    });
  }

  handleEditSubmit = e => {
    const id = this.state.id
    
     const newItem = {
            id: this.state.id,
            text: this.state.text,
            completed : this.state.completed,
            editItem : this.state.editItem
          }
          const filteredItems = this.state.items.filter(item => item.completed!==true)
          const completedItems =this.state.items.filter(item => item.completed===true)

          var updatedItems = []
          if(completedItems.length>0){
            
            updatedItems = [...filteredItems, newItem, ...completedItems]
          
          }
          else{
            updatedItems = [...this.state.items, newItem]
          }
          this.setState({
           
              items: updatedItems,
              text :"",
              editItem : false
          })
  }

  completeItem = id => {
    const selectedItem = this.state.items.find(item => item.id ===id);
   
    selectedItem.completed = !selectedItem.completed
    var updatedItems = []
    const filterInComplete = this.state.items.filter(item => item.completed!==true)
    const filterCompletedItems = this.state.items.filter(item => item.completed===true)
    if(filterCompletedItems.length > 0){
      updatedItems = [...filterInComplete , ...filterCompletedItems]
    }
    else {
      updatedItems = [...filterInComplete]
    }
    this.setState ({
          items:updatedItems
    });
  }

   render() {  
    return (

      <div className="App">
        <Header />
        <div id="todo-container">
          <Main 
            item={this.state.text}
            items={this.state.items}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            editItem={this.state.editItem}
            completed={this.state.completed}
            completeItem={this.completeItem}
            handleEditSubmit={this.handleEditSubmit}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
