import { useState } from "react";
import styled from "styled-components";
import CatalogFilter from "../Catalog/Filter/CatalogFilter";
import CatalogItems from "../Catalog/Filter/CatalogItems";

function Sneakers() {
  const [gender, setGender] = useState<string>("");



  return (
    <>
      <CatalogBlockStyle id="catalog">
        <div className="container">
          <div className="head">
            <h2>Каталог</h2>
          </div>
          <div className="content">
            <CatalogFilter setGender={setGender}  />
            <CatalogItems gender={gender} />
          </div>
         
        </div>
      </CatalogBlockStyle>
    </>

  )
}
const CatalogBlockStyle = styled.section`
  margin-bottom: 60px;
  padding-top: 60px;
  position: relative;

  .head {
    display: flex;
    justify-content: space-between;
  }

  .content {
    display: flex;
    gap: 20px;
  }

  h2 {
    color: #444B58;
    font-family: "IntroBold", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 40px;
  }

  .lines {
    display: none;
    flex-direction: column;
    gap: 5px;

    span {
      width: 30px;
      height: 5px;
      display: inline-block;
      background-color: #FFF4EE;
    }
  }

  @media (max-width: 810px) {
    .lines {
      display: flex;
      z-index: 3;
      span {
        transition: all 300ms linear;
      }
    }

    .lines-open {
      span:first-child {
        transform: rotate(-45deg) translate(-6px, 8px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: rotate(45deg) translate(-6px, -8px);
      }
    }
  }
`;

export default Sneakers;