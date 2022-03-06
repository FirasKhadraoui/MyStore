import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <div>
            <WelcomeWrapper>
                <h1>Hello to MyStore</h1>
            </WelcomeWrapper>
        </div>
    );
}

export default Home;

const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;