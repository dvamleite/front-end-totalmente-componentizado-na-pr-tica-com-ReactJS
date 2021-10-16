import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 98%;
  padding: 1rem;
  border: 2px solid #bababa;
  border-radius: 8px;
  margin-top: .5rem;  
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  
  height: 200px;



  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 14px;
    font-weight: bold;   
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
 
  div {
    margin: 4px;
    text-align: center;    
  }

  span{
    color: red;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 10%;
  margin: 8px;
`;
