import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="black">
          HOMISMA
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        // backgroundColor={theme.palette.background.alt}
        backgroundColor="white"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Homisma, the Home Services site for the Homies!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
}

export default Login;