
import './App.css';
import Animal from  './components/Animal'

function App() {
  let dataArr = [
    {name:"Ed", location:"Lake"},
    {name:"John", location:"Water"}
  ];

  let listItem = dataArr.map((val, idx) =>{  
  return (
    <li key={idx}>Name: {val.name}
      location: {val.location}
    </li>
  );
});
  return (
    <div className="App">
{/*      <ul>{listItem}</ul> 
 */}     
  <Animal/>
    </div>
  );
}

export default App;
