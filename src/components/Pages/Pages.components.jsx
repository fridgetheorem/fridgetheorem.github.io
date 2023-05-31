import styled from 'styled-components';

const LazyDiv = styled.div`
    padding: 50px;
`;
const ContentCard = styled.div`
    position: relative;
    border-radius: 20px;
    background: #EEEEEE;

    box-shadow: 10px 10px 0px #90ADC6;

    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 15px;

    @media screen and (max-width: 768px) {
        margin: 0;
        box-shadow: none;
    }
    padding: 10px;
    padding-top: 20px;
`;

const PageContainer = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
`;

const BodyText = styled.div`
    text-align: left;
    & > h3 {
        color: #555555;
    }
`;
const JobHeaders = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    & > *{
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
    }
    & > b {
        text-align: right;
    }
`;

const FullWidthDiv = styled.div`
    background: ${props => props.background};
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 10px;
`;

const TwoColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    & > div{
        flex: 1;
    }
`;
const PhotoCircle = styled.img`
    border-radius: 50%;
    border-width: 8px;
    border-style: solid;
    margin: 20px;

    max-width: 400px;
    width: calc(10vw);
    max-height: 400px;
    height: calc(10vw);
`;

const ImageBackground = styled.div`
    width: 100%;
    background-color: ${props => props.bgColor};
    text-align: center;
    & > img{
        position: absolute;
        display: block;
        width: auto;
        height: 100%;

        top: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
    }
    & > div {
        position: relative;
        padding: 10px;
        padding-left: 40px;
        padding-right: 40px;
        background-color: #EEEEEE;
        z-index: 1;

        border-radius: 20px;
        box-shadow: 10px 10px 0px #90ADC6;

        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        opacity: .9;
    }
`;


export { 
    ContentCard, 
    PageContainer, 
    BodyText, 
    JobHeaders, 
    FullWidthDiv, 
    TwoColumn,
    LazyDiv,
    PhotoCircle,
    ImageBackground
}