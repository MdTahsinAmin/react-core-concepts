import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name :'Photoshop',price:"$90.99"},
    {name:"Illustrator", price :"$60.99"},
    {name:'PDF Reader', price :"$6.99"},
    {name :'Adobe XD',price :'$66.89'},
    {name :'Figma',price:'$47.26'}
    ];
    const productName = products.map(product => product.name);
    //console.log(productName);
   const userName = ['Tahsin' ,'Tarit','Tanvir','Tanzir','Tanzim','Razzak','Shifar'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
         <Counter></Counter>
         <User></User>
        <ul>
          {
            products.map(pd =><li>{pd.name}</li>)
          }
          {
            userName.map(user =><li>{user}</li>)
          }
        </ul>
        {
          products.map(prod => <Product product ={prod}></Product>)
        }
      </header>
    </div>
  );
} 
function Counter(){
   // state declaration  return state name , function 
   // use function for set the sate
   const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={()=> {if(count > 0)setCount(count-1)}}>Decrease</button>
      <button onClick ={() => setCount(count+1)}>Increase </button>
    </div>
  );

}

function User(){
  const [user,setUsers] = useState([]);

  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[]);

  return(
    <div>
      <h3>Dynamic users Number : {user.length} </h3>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ul>
      
    </div>
  );
}

function Product(props){
  const productStyle ={
    border :'1px solid gray',
    borderRadius :'5px',
    backgroundColor :'lightgray',
    height: '200px',
    width :'500px',
    float :'left',
    margin :'2px'
  }
  const btnStyle ={
     padding :"5px 10px 5px 10px",
     borderRadius:"5px 0 5px 5px",
     backgroundColor:"blue",
     color : "white",
     border :"none"
  }
  const {name , price} = props.product;
  return(
    <div style={productStyle}>
      <h4>Name :{name} </h4>
       <h3>{price}</h3>
      <button style={btnStyle}>Buy Now</button>
    </div>
  );
}

export default App;
