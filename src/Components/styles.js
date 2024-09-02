import { Box, Button, Stack, styled, TextField } from "@mui/material";
export const StyledStack = styled(Stack)(({ theme }) => ({
    height: '45rem',
    width: '100rem',
    boxShadow: '0px 0px 5px 0px olive',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        width: '80rem',
        height: '40rem',
    },
    [theme.breakpoints.down('sm')]: {
        width: '60rem',
        height: '35rem',
    },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    height: '45rem',
    width: '55rem',
    [theme.breakpoints.down('md')]: {
        width: '45rem',
        height: '40rem',
    },
    [theme.breakpoints.down('sm')]: {
        width: '35rem',
        height: '30rem',
    },
}));
export const EmptyBox = styled(Box)({

    height: '40rem',
    width: '40rem',
    position: 'relative',
    top: '60px',
    transform: 'rotate(-45deg)',
    backgroundColor: '#aea580',
    borderRadius: '45%/30%',
    overflow: 'hidden',
    // transform: "translateY(50%)",
    // clipPath: "polygon(0 20%, 100% 0%, 100% 100%, 0 70%)",
})

export const StyledButton = styled(Button)({
    textTransform: 'none'
})
export const StyledTextBox = styled(Box)({
    position: "relative",
    top: "5rem",
    textAlign: "left",
    padding: "0",
    margin: "0",
})
export const StyledTextField = styled(TextField)({
    flex: 1,
    p: "0px",
    // outline: "2px solid #aea580",
    outlineColor: "#aea580",
    border: "none",
    outline: "none",
})
export const HiredButton = styled(Button)({
    backgroundColor: "#aea580",
    padding: "10px 50px",
    color: 'white',
    border: 'none',
    '&:hover': {
        backgroundColor: "#aea580",
        padding: "10px 50px",
        color: 'white',
        border: 'none',
    }
})

export const ProjectsMainBox = styled(Box)({
    boxShadow: '1px 1px 3px 1px #aea580',
    width: '35rem',
    height: '20rem',
    textAlign: 'left',
    paddingLeft: '2rem',
    marginLeft: '30px',
    transform: "scaleZ(3.5)",
    transition: "transform .35s ease-in-out",
    '&:hover': {
        transform: "scale(1.05)", // Example transform property for hover effect
        boxShadow: '3px 3px 6px 2px #aea580', // Adding some more changes for hover effect
    }
})