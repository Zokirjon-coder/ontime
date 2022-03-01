import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 96px 0;
`;

Container.Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 160px;
  align-items: center;

  .content {
    flex: 1;
    display: flex;
    height: 100%!important;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    p{
        margin-bottom: 8px;
        font-size: 16px;
        color: #49555A;
        line-height: 24px;
        b{
            color: black;
        }
    }
  }

  .imgbox {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 200px 250px;
    grid-gap: 10px;
    .images img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img3 {
      grid-column: span 2;
    }
  }
`;
