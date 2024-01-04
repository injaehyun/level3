import React, { useState } from 'react'; 
import './App.css'
import styled from 'styled-components';
import { Basestyle,
  LargePrimary,
  MediumPrimary,
  SmallPrimary,
  LargeNegative,
  MediumNegative,
  SmallNegative,
  Input,
} from './Styled/StyledComponents';
import FirstModal from './Modals/FirstModal';
import SecondModal from './Modals/SecondModal';


function App() {
  const [name, setName] =useState('')
  const [price, setPrice] =useState('0')
  const [isOpen, setIsOpen] = useState(false)
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const formatPrice = (value) => {
    const numberValue = parseInt(value.split(',').join(''), 10);
    if (!isNaN(numberValue)) {
      return numberValue.toLocaleString();
    }
    return '';
  };

  const priceHandler = (event) => {
    const formattedNumber = formatPrice(event.target.value);
    setPrice(formattedNumber);
  };

  const handleClick = () => {
    prompt('어렵나요?');
  };

  const nameHandler =(event)=>{
    setName(event.target.value)
  }
  
  const handleSave = () => {
    if (!name || !price) {
      return alert('이름과 가격 모두 입력해주세요');
    } else {
      const numericPrice = parseInt(price.split(',').join(''), 10);
      alert(`{ name: ${name}, price: ${numericPrice} }`);
    }
  };

  const closeFirstModal = () => {
    setIsOpen(false);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };
  

  


   
  return (
    <div>
      <div> <h1>Button</h1> </div>
      <Basestyle>
        <LargePrimary onClick={()=>{alert('버튼을 만들어보세요')}} >Large Primary Button</LargePrimary>
        <MediumPrimary>Medium</MediumPrimary>
        <SmallPrimary>Small</SmallPrimary>
      </Basestyle>

      <Basestyle>
        <LargeNegative onClick={handleClick}>Large Negative Button</LargeNegative>
        <MediumNegative>Medium</MediumNegative>
        <SmallNegative>Small</SmallNegative>
      </Basestyle>

      <div><h1>Input</h1></div>
      
      <Basestyle>
        이름<Input value={name} onChange={nameHandler} type='text'></Input>
        가격<Input value={price} onChange={priceHandler} type='text'></Input>
        &nbsp; <SmallPrimary onClick={handleSave}> 저장 </SmallPrimary>
      </Basestyle>

      <div><h1>Modal</h1></div>
      <Basestyle>
        <SmallPrimary onClick={()=>{setIsOpen(true)}}>open Modal </SmallPrimary>
        <LargeNegative onClick={() => setIsSecondModalOpen(true)}>open Modal</LargeNegative>
      </Basestyle>
      
      <FirstModal isOpen={isOpen} onClose={closeFirstModal}>
        <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
        <Basestyle>
        <SmallNegative onClick={closeFirstModal}>닫기</SmallNegative>
        <SmallPrimary>확인</SmallPrimary>
        </Basestyle>
      </FirstModal>
        
        <SecondModal isOpen={isSecondModalOpen} onClose={closeSecondModal}>
          <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
          <Basestyle>
          <SmallNegative onClick={closeSecondModal}>X</SmallNegative>
          </Basestyle>
      </SecondModal>

      <div className='Select1'>
        <div><h1>Select</h1></div>
        
        <select className='Select2'>
          <option value="react">리액트</option>
          <option value="java">자바</option>
          <option value="spring">스프링</option>
          <option value="react-native">리액트 네이티브</option>
        </select>
        &nbsp;&nbsp;
        <select className='Select2'>
          <option value="react">리액트</option>
          <option value="java">자바</option>
          <option value="spring">스프링</option>
          <option value="react-native">리액트 네이티브</option>
        </select>
      </div>
      </div>
      
      )}

export default App
