import { useState } from 'react';
import List from './List';
import NoList from './NoList';
import { list } from './Test';
import Modal from './Modal';
export default function Contents() {
  let [item, setItem] = useState(list);
  let [isActive, setIsActive] = useState(false);
  let [titleNum, settitleNum] = useState();
  let [inputText, setInputText] = useState("");


  let toggleModal = () => {
      setIsActive(!isActive);
  }
  let openModal = (i) => {
    setIsActive(true);
    settitleNum(i);
  }
  let closeModal = () => {
    setIsActive(false);
  }
  let addItem = () => {
    let copy = [...item]
    copy.unshift(inputText);
    setItem(copy);
    setInputText('');
  }
  let delItem = (i) => {
    let copy = [...item]
    copy.splice(i,1);
    setItem(copy);
  }
  return (
    <div className="main">
      <div className="inputBox">
        <input value={inputText} type="text" placeholder="가고싶은 여행지를 등록하세요" 
        onChange={(e)=>{
          setInputText(e.target.value)
          console.log(e.target.value);
        }} />
        <button onClick={addItem}>ADD</button>
      </div>
      
      <p className="count">
        <span>total</span>
        <strong>{item.length}</strong>
      </p>

      {list.length === 0 ? (
        <NoList />
      ) : (
        <ul className="listCon">
          {item.map((list, i) => {
            return <List list={list} i={i} openModal = {openModal}
           key={i} delItem={delItem} />;
          })}
        </ul>
      )}
      {isActive && (<Modal item={item} titleNum={titleNum} closeModal={closeModal}/>)}
    </div>
  );
}
//<button onClick={toggleModal}>모달 열기</button>