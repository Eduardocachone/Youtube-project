import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
`;

export const ImageBanner = styled.img`
width: 100%;
height: auto;
aspect-ratio: 16/9;
border-radius: 12px;
object-fit: cover;
`;

export const TitleContainer = styled.div`
width: 100%;
display: flex;
`;

export const ChannelImage = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right:10px;
background-color: grey;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const Title = styled.span`
font-weight: 600;
color: #0f0f0f;
`;

export const TextCard = styled.span`
font-size: 14px;
color: #8c8c8c;
`;