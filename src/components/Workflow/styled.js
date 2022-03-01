import styled from "styled-components";
import bg from "../../assets/images/workflow.png";

export const Container = styled.div`
  width: 100%;
  background: url(${bg});
  padding: 96px 0;
`;

Container.Flex = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .content {
    p {
      font-size: 16px;
      color: white;
      font-weight: 400;
      width: 385px;
      margin-bottom: 64px;
      line-height: 24px;
    }
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 25px;
      color: white;
      h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        text-transform: uppercase;
      }
    }
  }
`;
