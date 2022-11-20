import styled, {keyframes} from 'styled-components';

const rotateAnimation = keyframes`
    from{ transform: rotate(0deg) }
    to{ transform: rotate(360deg) }
`;

export const ContainerDetails = styled.div`
    width: 100%;
    height: 90vh; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerImageDetails = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    
    &::after{
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        inset: 5px;
        border-radius: 16px;
    }
    &:hover{
        &::before{
            content: '';
            position: absolute;
            width: 170px;
            height: 140%;
            background: linear-gradient(#00ccff, #d500f9);
            animation: ${rotateAnimation} 6s linear infinite;
        }
    }
`;


export const ImageDetails = styled.img`
    border-radius: 8px;
    width: 98%;
    z-index: 2;
    height: 98%;
`;

export const ContainerDetailsGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    width: 90%;
`;

export const ContainerDetailsInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ReleaseDate = styled.span`
    width: 120px;
    text-align: center;
    background: #1e1e1e;
    border-radius: 4px;
    color: cornflowerblue;
    letter-spacing: 2px;
    z-index: 1;
    &::before{
        content: '';
        position: absolute;
        width: 170px;
        height: 60%;
        background: linear-gradient(#00ccff, #d500f9);
        animation: ${rotateAnimation} 6s linear infinite;
        border-radius: 4px;
        z-index: -1;
    }
    &::after{
        content: '';
        position: absolute;
        inset: 2px;
        background: #1e1e1e;
        border-radius: 4px;
        z-index: -1;
    }
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;



// width: 300px;
// display: flex;
// align-items: center;
// align-content: center;
// justify-content: center;
// position: relative;
// overflow: hidden;