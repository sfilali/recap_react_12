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
  //    Ex5
  const [nid, setNid] = useState([])
  const pondreUnOeuf = ()=>{
    let copieNid = [...nid]
    copieNid.push(1)
    setNid(copieNid)
  }
  const mangerOeuf = ()=>{
    if (nid.length > 0) {
      let copieNid = [...nid]
      copieNid.pop()
      setNid(copieNid)
    } else {
      alert("Il n'y a plus d'oeufs dans le panier !")
    }
  }
  const toutManger = ()=>{
    if (nid.length > 0) {
      setNid([])
    } else {
      alert("Il n'y a plus d'oeufs dans le panier !")
    }
  }
  //    Ex6   NIVEAU 1
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()
  const [res, setRes] = useState("...")
  const recup1 = (e)=>{
    setInput1(e.target.value)
  }
  const recup2 = (e)=>{
    setInput2(e.target.value)
  }
  const egale = ()=>{
    setRes(parseFloat(input1)+parseFloat(input2))
  }
  //    Ex6   NIVEAU 2
  const [carac] = useState(
    ["1","2","3","+","4","5","6","-","7","8","9","*","C","0","=","/"]
  )
  const bg = (i)=>{
    var backGround
    if (i === 3 || i === 7 || i === 11 || i === 15) {
      backGround = "btn-primary"
    } else if (i === 12) {
      backGround = "btn-danger"
    } else if (i === 14) {
      backGround = "btn-success"
    } else {
      backGround = "btn-light"
    }
    return backGround
  }
  const [view, setView] = useState("...")
  const [resultat, setResultat] = useState("...")
  const calcul = (el)=>{
    if (el !== "C" && el !== "=") {
      if (view === "...") {
        setView(el)
      } else {
        if (view[0] !== "/") {
          let copieView = view
          setView(copieView+el)
        } else {
          alert("Veuillez recommencer !\nMettez d'abord un chiffre puis le signe de l'opération voulue. Merci <3")

        }
      }
    } else if (el === "C") {
      setView("...")
      setResultat("...")
    } else if (el === "=") {
      setResultat(eval(view))
      setView("...")
    }
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

          <div className="col-3 ">
            <div className="d-flex justify-content-center">
              <Link to="/ex5" className="text-decoration-none text-white m-1 px-5  btn btn-primary d-flex rounded-0 ">Exercice 5</Link>
            </div>
          </div>

          <div className="col-3 ">
            <div className="d-flex justify-content-center">
              <Link to="/ex6" className="text-decoration-none text-white m-1 px-5  btn btn-primary d-flex rounded-0 ">Exercice 6</Link>
            </div>
          </div>


          <div className="col-3 ">
            <div className="d-flex justify-content-center">
              <Link to="/ex7" className="text-decoration-none text-white m-1 px-5  btn btn-primary d-flex rounded-0 ">Exercice 7</Link>
            </div>
          </div>

        </div>
        
        <Switch>
          <Route exact path="/">
            <div className="jumbotron p-5 text-center">
              <h1 className="d-3">Bienvenue dans la Recap</h1>
            </div>
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
            <Ex5 nid={nid} pondreUnOeuf={pondreUnOeuf} mangerOeuf={mangerOeuf} toutManger={toutManger} />
          </Route>
          <Route path="/ex6">
            <Ex6 recup1={recup1} recup2={recup2} res={res} egale={egale} carac={carac} bg={bg} calcul={calcul} view={view} resultat={resultat} />
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