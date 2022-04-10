import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section( { title, description, backgroundImg, leftBtnTxt, rightBtnTxt }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p> {description} </p>
                </ItemText>
            </Fade>
            {/* //this makes it so justify-content: space-between doesn't push the left/right buttons to the middle */}
            <Buttons> 
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnTxt}
                        </LeftButton>
                        {/* makes it so the right button will only display if the text exists...centers "Shop Now" in the last Section component on Home */}
                        { rightBtnTxt &&
                            <RightButton>
                            {rightBtnTxt}
                        </RightButton> }
                    </ButtonGroup>
                </Fade>
                <DownArrow src ='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical alignment
    align-items: center; //horizontal alignment
    background-image: ${props => `url("/images/${props.bgImage}")`}
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: #393c41;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div`
`;


export default Section