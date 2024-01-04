import styled from "styled-components";

export const Basestyle = styled.div`
display:flex;
gap : 10px;
align-items : flex-start;
margin : 10px ;
`
export const LargePrimary = styled.button`
width : 200px;
height : 50px;
border : 3px solid rgb(85,239,196);
border-radius : 8px;
font-weight : 600;
background-color : white;
&:active {
    background-color: #dfe6e9; // 클릭 시 배경 색상 변경
    transform: scale(0.98); // 클릭 시 버튼을 약간 축소
  }
`;

export const MediumPrimary = styled.button`
width : 130px;
height : 45px;
background-color : rgb(85,239,196);
border-radius : 8px;
border:none;
&:active {
    background-color: #dfe6e9; // 클릭 시 배경 색상 변경
    transform: scale(0.98); // 클릭 시 버튼을 약간 축소
  }
`;
export const SmallPrimary = styled.button`
width : 100px;
height : 40px;
background-color : rgb(85,239,196);
border-radius : 8px;
border:none;
&:active {
    background-color: #dfe6e9; // 클릭 시 배경 색상 변경
    transform: scale(0.98); // 클릭 시 버튼을 약간 축소
  }
`;
export const LargeNegative = styled.button`
width : 200px;
height : 50px;
border : 3px solid rgb(250, 177, 160);
border-radius : 8px;
font-weight : 600;
background-color : white;
color: rgb(214, 48, 49);
&:active {
    background-color: #dfe6e9; // 클릭 시 배경 색상 변경
    transform: scale(0.98); // 클릭 시 버튼을 약간 축소
  }
`;
export const MediumNegative = styled.button`
width : 130px;
height : 45px;
background-color : rgb(250, 177, 160);
border-radius : 8px;
color: rgb(214, 48, 49);
border:none;
&:active {
    background-color: #dfe6e9; // 클릭 시 배경 색상 변경
    transform: scale(0.98); // 클릭 시 버튼을 약간 축소
  }
`;
export const SmallNegative = styled.button`
width : 100px;
height : 40px;
background-color : rgb(250, 177, 160);
border-radius : 8px;
color: rgb(214, 48, 49);
border:none;
&:active {
    background-color: #dfe6e9; // 클릭 시 배경 색상 변경
    transform: scale(0.98); // 클릭 시 버튼을 약간 축소
  }
`;
export const Input = styled.input`
border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 300px;
`;