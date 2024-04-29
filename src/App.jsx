import { useState, useEffect, useRef } from 'react'
import './App.css';
import Form from './components/Form/Form';
import ButtonShowCards from './components/ShowCards/ButtonShowCards';
import CardMaker from './components/Card/CardMaker';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import PercentList from './components/ShowCards/PercentList';

function App() {


  const [active, setActive] = useState(true);

  const [stateList, setStateList] = useState("all");

  const [comps, setComps] = useState([]);

  const [cardToChange, setCardToChange] = useState({
    name: '',
    overview: '',
    percent: 0
  });

  const modalRef = useRef(null);

  useEffect(()=>{
    const json = JSON.parse(localStorage.getItem("comps"));
    if (json.length > 0) {
        setComps(json)
    }
  }, [])

  useEffect(()=>{
    const json = JSON.stringify(comps);
    localStorage.setItem("comps", json)
  }, [comps])


  const addCard = (state) => {

    setComps((prev)=>{

        let lastComp = prev.length > 0 ? prev[prev.length-1] : null;

        let lastId;
        
        if (lastComp) {
            lastId = lastComp.id
        }
       
        return [
            ...prev, {...state, id: lastId >= 0 ? lastId + 1 : 0}
        ]

    });

  }


    const showClick = () => {
        setActive(!active)
    }



    const deleteProduct = (id) => {
        setComps((prev)=>{
        return prev.filter((card)=>{return id!== card.id})
        })
    }

    const openModal = (obj) => {
        setCardToChange(obj);
        modalRef.current.classList.add('active');
    };

    const closeModal= (e) =>{
        e.preventDefault();
        modalRef.current.classList.remove('active')
    };

    const closeModalOut = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal(e);
        }
    };

    const saveChanges = (state) => {
        setComps((prev)=>{
            return prev.map((card)=>{
                return card.id === state.id ? state : card
            })
        })
    }

    const onChangeList = (e) =>{
        setStateList(e.target.value);
    }

  const RenderCards = comps.map((card)=>{
    if (stateList === "all") {
        return <CardMaker key={card.id} obj={card} deleteProduct={deleteProduct}  openModal={openModal} /> 
    } else if (stateList === "more" & card.percent >= 50) {
        return <CardMaker key={card.id} obj={card} deleteProduct={deleteProduct}  openModal={openModal} /> 
    } else if (stateList === "less" & card.percent < 50) {
        return <CardMaker key={card.id} obj={card} deleteProduct={deleteProduct}  openModal={openModal} />
    }
  })


  return (

    <>
        <div>
            <Header />
            <hr />
            <div id="main" className="head">
                <h2 className="title">Добавить компетенцию</h2>
                <Form addCard={addCard} />
            </div>
            <hr />
            <div className="head_list">
                <h3 className="title-list">Список компетенций</h3>
                <PercentList stateList={stateList} onChangeList={onChangeList} />
                <ButtonShowCards active={active} showClick={showClick} />
            </div>
            <div className="container">
                <Modal card={cardToChange} ref={modalRef} closeModal={closeModal} closeModalOut={closeModalOut} saveChanges={saveChanges} />
                {active && RenderCards}
            </div>
        </div>

    </>
  )
}

export default App