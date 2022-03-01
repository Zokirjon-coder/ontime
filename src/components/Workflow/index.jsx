import React from "react";
import { dataWorkflow } from "../../utils/dataWorkflow";
import Button from "../Button";
import { Heading } from "../page/styled";
import { Container } from "./styled";

const Workflow = () => {
  return (
    <Container>
      <Container.Flex>
        <div className="content">
          <Heading>How it works?</Heading>
          <p>
            Our professional team operate daily checking calls, tracking loads,
            emailing updates and enabling all other communication options
            according to your unique needs. All in all, we assure your freight
            to arrive safe and on time.
          </p>
          <Button px='60'>Order</Button>
        </div>
        <div className="icons">
            {
                dataWorkflow.map(icon => (
                    <div className="icon" key={icon.id}>
                        <img src={icon.img} alt="icon" />
                        <h4>{icon.id}. {icon.content}</h4>
                    </div>
                ))
            }
        </div>
      </Container.Flex>
    </Container>
  );
};

export default Workflow;
