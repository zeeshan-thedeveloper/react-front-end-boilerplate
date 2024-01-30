import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.bg.main};
  color: white; /* Set text color to white, adjust as needed */
`;

const MyStyledButton = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.palette.warning.main};
    color: white; /* Set the text color to white */
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const StyledHeading = styled(Typography)`
  && {
    font-size: 24px; /* Customize the font size */
    font-weight: bold; /* Customize the font weight */
    color: ${({ theme }) => theme.palette.primary.main}; /* Use the primary color from the theme */
    margin-bottom: 16px; /* Add any additional styles as needed */
  }
`;

export { MyStyledButton, StyledTextField, StyledHeading,StyledContainer }
