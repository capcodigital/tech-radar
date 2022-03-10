import React, { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper, StyledSubContent } from "../Content/styles/";

type SubContentType = {
  contentData: Array<{
    name: string;
    intro: string;
    data: Array<{ name: string; description: string }>;
  }>;
};

export const AccordionComponent: FC<SubContentType> = ({ contentData }) => {
  return (
    <>
      {contentData.map(({ data }, idx) => (
        <StyledSubContent key={`subcontent-${idx}`}>
          {data.map(({ name, description }, idx) => (
            <div className={"content"} key={`data-content-${idx}`}>
              <Wrapper>
                <Accordion>
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
                          color: "#000",
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
            </div>
          ))}
        </StyledSubContent>
      ))}
    </>
  );
};
