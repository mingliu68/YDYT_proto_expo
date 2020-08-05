import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from "styled-components";

const screenHeight = Dimensions.get("window").height

const Card = (props) => {
    return (
        <Container
            accessible={true}
            accessibilityLabel={props.title}
        >
            <Cover>
                <Image source={{ uri: props.img }} />
                <Title>{props.title}</Title>
            </Cover>
            <Content>
                {/* <Wrapper> */}
                <Caption>{props.caption}</Caption>
                <Subtitle>{props.subtitle}</Subtitle>
                {/* </Wrapper> */}
            </Content>
        </Container>
    )
}

export default Card;

const Container = styled.View`
    width: 315px;
    height: 340px;
    border-radius: 14px;
    background: white;
    margin: 10px 10px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    overflow: hidden;
`;

const Cover = styled.View`
    width: 100%;
    height: 160px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);
`;

const Content = styled.View`
    padding: 10px 20px;
    align-items: flex-start;
    height: 180px;
`;

const Caption = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`;

const Wrapper = styled.View`
    margin-left: 10px;
`;

const Subtitle = styled.Text`
    color: #b8bece;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 4px;
`;

const Logo = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
`;


