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

const AccordionComponent = ({ name, description }: Props) => {
  return (
    <Wrapper>
      <Accordion id="accordion-component">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          data-test-id={name}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }} component={"span"}>
            <div className="content-title">{name}</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <div
              data-test-id={`${name}-content`}
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
  );
};

export default AccordionComponent;
