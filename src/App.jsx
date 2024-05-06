import { useState, useRef } from 'react'
import './App.css';
import MainForm from './components/MainForm/MainForm';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import { useLocalStorage } from './components/hooks/useLocalStorage';
import CardContainer from './components/Card/CardContainer';
import { useFilter } from './components/hooks/useFilter';
import Filtration from './components/Filtration/Filtration';
import { defaultValue } from './components/constants/defaultValue';


function App() {

  const [active, setActive] = useState(true);

  const [comps, setComps] = useLocalStorage([], "comps");

  const [filterProp, setFilterProp, filteredCards] = useFilter(comps, "all");

  const [cardToChange, setCardToChange] = useState(defaultValue);

  const modalRef = useRef(null);


  return (
    <>
      <div>
          <Header />
          <hr />
          <MainForm setComps={setComps} />
          <hr />
          <Filtration active={active} setActive={setActive} filterProp={filterProp} setFilterProp={setFilterProp} />
          {active && <CardContainer array={filteredCards} setCardToChange={setCardToChange} modal={modalRef} setComps={setComps} />}
          <Modal card={cardToChange} ref={modalRef} setComps={setComps} />
      </div>
    </>
  )
}

export default App