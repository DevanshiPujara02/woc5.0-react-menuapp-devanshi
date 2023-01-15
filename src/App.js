import './App.css';

function App() {
  const planets=[
    {name: "Mars", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Earth" , isGasPlanet: false}
  ];
  return (
    <div className="App">
      Only displaying gas planets wierdly with a function
        {/* <PrintPlanets name={planets[0].name}/>  */}
        {planets.map((planet,key) => {
          if(planet.isGasPlanet){
            return <PrintPlanets name={planet.name} boo={planet.isGasPlanet}/>
          }
          else{
            return (null);
          }
        })}

      A sensible way to print it
      {planets.map( (planet,key) => {
        return (planet.isGasPlanet && <h1>{planet.name}</h1>)
      })}
    </div>
  );
}

function PrintPlanets(props){
  return(
    <h1>{props.name} {props.boo}</h1>
  );
}

export default App;
