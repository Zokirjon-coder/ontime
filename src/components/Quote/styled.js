import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 96px 0;

  .flex {
    display: flex;
    justify-content: space-between;

    .form {
      position: relative;
      z-index: 2;
      min-width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(4, 80px);
      grid-gap: 20px 16px;
      .inp {
        width: 100%;
        div{
          height: 24px;
          font-size: 16px;
        }
        input{
          height: 48px;
          width: 100%;
          padding-left: 28px;
          margin-top: 8px;
        }
      }
      .inp.area{
        grid-column: span 2;
        margin-bottom: 24px;
        textarea{
          width: 100%;
          min-height: 163px;
          resize: vertical;
          background: transparent;
          padding: 15px 28px;
        }
      }
    }
    .img{
      position: relative;
      width: 50%;
      img{
        /* width: 100%; */
        height: 100%;
        position: absolute;
        top: 0;
        right: -23px;
      }
    }
  }
`;
