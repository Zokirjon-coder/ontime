import styled from "styled-components";
import foot from "../../assets/images/footer.png";

export const Foot = styled.div`
  background: url(${foot});
  width: 100%;
  height: 224px;
  padding: 30px 0;
`;

export const Container = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: auto;
  .header 
  {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links
    {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 25px;
        a
        {
            color: white;
            text-decoration: none;
            :hover
            {
                color: var(--main-color);
            }
        }
    }
}
.line{
    width: 100%;
    height: 1px;
    background: var(--btncl);
    margin: 42px 0 27px;
    opacity: .8;
}
.contacts{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .socials{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 15px;
        img{
            opacity: .7;
            :hover{
                opacity: 1;
            }
        }
    }
    .address{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 20px;
        flex-direction: column;
        .contact{
            display: flex;
            align-items: center;
            color: white;
            gap: 15px;
            font-size: 14px;
            opacity: .7;
            cursor: pointer;
            a{
                color: inherit;
                text-decoration: inherit;;
            }
            :hover{
                opacity: 1;
            }
        }
    }
}
`;
