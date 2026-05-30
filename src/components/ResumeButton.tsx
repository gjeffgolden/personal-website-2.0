import Box from "@mui/material/Box";
import { StyledBorderedLink } from "../styles/styles";
import DownloadIcon from "@mui/icons-material/Download";
import Typography from "@mui/material/Typography";

const ResumeButton = () => {
  return (
    <StyledBorderedLink
      to="assets/Golden.Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume (PDF, opens in a new tab)"
      download
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography pr={3} variant="subtitle1" component="span">
          Resume
        </Typography>
        <DownloadIcon />
      </Box>
    </StyledBorderedLink>
  );
};

export default ResumeButton;
