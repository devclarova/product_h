/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const ItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #c9c9c9;
  border-radius: 16px;
  margin: 30px;
  padding-left: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &&:hover {
    transform: translateY(-5px); /* 위로 5px 떠오름 */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 더 진한 그림자 */
  }
`;
const ItemPhoto = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
const ItemInfoWrap = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 20px 30px;
  gap: 10px;
`;
const ItemInfoTitle = styled.h3``;
const ItemInfoPrice = styled.span`
  color: #ff0000;
  font-weight: 600;
`;
const ItemInfoDetail = styled.p`
  color: #a0a0a0;
`;

function ItemList({ title, price, thumbnail, description }) {
  return (
    <ItemWrap>
      <ItemPhoto>
        <img src={thumbnail} alt={title} />
      </ItemPhoto>
      <ItemInfoWrap>
        <ItemInfoTitle>{title}</ItemInfoTitle>
        <ItemInfoPrice>${price}</ItemInfoPrice>
        <ItemInfoDetail>{description}</ItemInfoDetail>
      </ItemInfoWrap>
    </ItemWrap>
  );
}

export default ItemList;
