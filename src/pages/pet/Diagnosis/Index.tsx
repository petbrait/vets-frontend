import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconArrow from "@/assets/icons/chevron.svg";
import Goals from "./Goals/Index";

const Index = () => {
  return (
    <div>
      {/* Goals */}
      <Box>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={
              <Image
                width={16}
                height={16}
                priority
                src={IconArrow}
                alt="icon-arrow"
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion> */}
        {/* <Typography>Metas</Typography> */}
        <Goals />
      </Box>
      {/* Nutrition
      <Accordion>
        <AccordionSummary
          expandIcon={
            <Image
              width={16}
              height={16}
              priority
              src={IconArrow}
              alt="icon-arrow"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Nutricion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

export default Index;
