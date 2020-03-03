import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
	Route,
	Link
} from 'react-router-dom'
import Ex1 from './Components/Ex1'
import Ex2 from './Components/Ex2'
import Ex3 from './Components/Ex3'
import Ex4 from './Components/Ex4'
import Ex5 from './Components/Ex5'
import Ex6 from './Components/Ex6'
import Ex7 from './Components/Ex7'

function App() {
  //    EX1
  // Changer le texte du titre 
  const [titre, setTitre] = useState(true)
  const changerTitre = ()=>{
    titre === true ? setTitre(false) : setTitre(true)
  }
  // Changer la couleur du texte + fond
  const [colori,setColori] = useState({
    color : "black",
    backgroundColor : ""
  })
  const changerColori = ()=>{
    let colorX = {
      color: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`,
      backgroundColor: colori.backgroundColor
    }
    setColori(colorX)
  }
  const changerFond = ()=>{
    let colorY = {
      backgroundColor: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`,
      color: colori.color
    }
    setColori(colorY)
  }
  const laBase = ()=>{
    let base = {
      color : "black",
      backgroundColor : ""
    }
    setColori(base)
    setTitre(true)
  }
  //    EX3
  const [perso, setPerso] = useState("")
  const [valu, setValu] = useState("")
  const bluri = (e)=>{
    setValu(e.target.value)
  }
  const go = ()=>{
    setPerso(valu)
    setValu("")
  }
  //    Ex4
  const [count, setCount] = useState(0)
  const [place1, setPlace1] = useState("")
  const [place2, setPlace2] = useState("d-none")
  const changerPlace = ()=>{
    place1 === "" ? setPlace1("d-none") : setPlace1("")
    place2 === "d-none" ? setPlace2("") : setPlace2("d-none")
    setCount(count+1)
  }
  const reset = ()=>{
    setCount(0)
    setPlace1("")
    setPlace2("d-none")
  }

  return (
    <div className="container">
      <h1 className="text-center bg-primary text-white py-3 my-2">Recap REACT</h1>
      <Router>
        <div className="row">
          <div className="col-3 ">
            <div className="d-flex justify-content-center">
              <Link to="/ex1" className="text-decoration-none text-white m-1 px-5  btn btn-primary d-flex rounded-0 ">Exercice 1</Link>
            </div>
          </div>

          <div className="col-3 text-center">
            <div className="m-1 p-2 bg-primary">
            <Link to="/ex2" className="text-decoration-none text-white">Exercice 2</Link>
            </div>
          </div>

          <div className="col-3 text-center">
            <div className="m-1 p-2 bg-primary">
            <Link to="/ex3" className="text-decoration-none text-white">Exercice 3</Link>

            </div>
          </div>

          <div className="col-3 text-center">
            <div className="m-1 p-2 bg-primary">
            <Link to="/ex4" className="text-decoration-none text-white">Exercice 4</Link>
            </div>
          </div>
        </div>
        
        <Switch>
          <Route exact path="/">
            HOME
          </Route>
          <Route path="/ex1">
            <Ex1 changerTitre={changerTitre} titre={titre} changerColori={changerColori} colori={colori} changerFond={changerFond} laBase={laBase} />
          </Route>
          <Route path="/ex2">
            <Ex2/>
          </Route>
          <Route path="/ex3">
            <Ex3 perso={perso} valu={valu} bluri={bluri} go={go} />
          </Route>
          <Route path="/ex4">
            <Ex4 count={count} place1={place1} place2={place2} changerPlace={changerPlace} reset={reset} />
          </Route>
          <Route path="/ex5">
            <Ex5  />
          </Route>
          <Route path="/ex6">
            <Ex6  />
          </Route>
          <Route path="/ex7">
            <Ex7  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;