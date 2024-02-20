import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";
import { card, cardContent, cardIconBox, cardIcon } from "./styles/sidenavCard";
import { Box, Button, Typography } from "@mui/material";
import { useSoftUIController } from "../context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <Box
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })}>
            star
          </Icon>
        </Box>
        <Box lineHeight={1}>
          <Typography variant="h6" color="white">
            Need help?
          </Typography>
          <Box mb={1.825} mt={-1}>
            <Typography variant="caption" color="white" fontWeight="medium">
              Please check our docs
            </Typography>
          </Box>
          <Button
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="white"
            fullWidth
          >
            documentation
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
