import React, { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper } from "../Content/styles/";

type Props = {
  name: string;
  description: string;
};

const AccordionComponent: FC<Props> = ({ name, description }) => {
  return (
    <>
      <Wrapper>
        <Accordion id="accordion-component">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <div>{name}</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{
                  fontWeight: "300",
                  color: "#fff",
                }}
                dangerouslySetInnerHTML={{
                  __html: description.replace(
                    /href=/g,
                    'rel="noreferrer" target="_blank" href='
                  ),
                }}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Wrapper>
    </>
  );
};

export default AccordionComponent;
