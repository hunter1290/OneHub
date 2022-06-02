import React from 'react'
import styled from 'styled-components'

function Design({fallback,footer}) {
    return (
        <Container>
         <p>{fallback}</p>
         <br />
         {footer}
        </Container>
    )
}

const Container = styled.div`
 margin:0;
 padding:0;
 box-sizing:border-box;
`;

export default Design
