import styled from "styled-components"

const HeaderContainer = styled.div`
    width:100%;
    background:#1B2430;
    text-align:center;
    padding:1rem;
    margin-bottom:2rem;
    
    h1{
        color:#E4DCCF;
        font-weight:600;
        font-size:4rem;
    }`

function Header() {
    return (
        <HeaderContainer className='header-container'>
            <h1>Management Board</h1>
        </HeaderContainer>
    )
}

export default Header