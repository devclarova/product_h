import styled from "@emotion/styled";

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  gap: 10px;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
`;
const HeaderTitle = styled.h1``;
const HederSubTitle = styled.h2`
  font-size: 18px;
  color: #999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderDetail = styled.p`
  font-size: 18px;
  color: #999;
`;

function Header() {
  return (
    <HeaderWrap>
      <HeaderTitle>Beauty Product List</HeaderTitle>
      <HederSubTitle>
        다양한 뷰티 제품을 한눈에 확인하세요.
        <HeaderDetail>https://dummyjson.products API 사용 예제</HeaderDetail>
      </HederSubTitle>
    </HeaderWrap>
  );
}

export default Header;
