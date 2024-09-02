import styled from "styled-components";
export const StyledImage = styled.img({
    position: "relative",
    left: "10px",
    top: "7rem",
    //   float: "left",
    borderRadius: "10px 20px 0px 150px",
    height: "250px",
    width: "320px",
    border: "none",
    opacity: "0.8",

})
export const StyledSpan = styled.span({
    fontSize: "3em",
    position: "relative",
    bottom: "10px",
})
export const StyledHr = styled.hr({
    width: "80px",
    marginLeft: "20px",
    border: "none",
    height: "4px",
    backgroundColor: "olive",
})
export const SkilledImg = styled.img({
    position: "absolute",
    top: "18rem",
    left: "6rem",
    // backgroundColor: "white",
    borderRadius: "20px",
    height: "450px",
    width: "450px",
    transform: "rotate(360deg)",
    transition: "transform .35s ease-in-out",
    '&:hover': {
        transform: "rotate(20deg)", // Example transform property for hover effect
        boxShadow: '3px 3px 6px 2px #aea580', // Adding some more changes for hover effect
        border: "0px",
        boxShadow: 'none'
    }
})