import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    width:500px;
    border: 0.5px solid #CED4DA;
    border-radius: 20px;
    margin: auto;
    margin-top: 33px;
`;
const Title = styled.p`
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 2px;
    
`;
const Comment = styled.p`
    margin:0px 20px 20px 20px;
`;


const Item = ({ article }) => {
    const { id,email,body} = article;

    return(
        <ItemBlock>
            <Title><b>comment Id</b> {id}</Title>
            <Title><b>Email</b> {email}</Title>
            <Title><b>Comment</b></Title><Comment>{body}</Comment>
        </ItemBlock>
    )
};

export default Item;