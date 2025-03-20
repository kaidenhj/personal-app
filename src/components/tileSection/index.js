import React from "react";
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img
 } from "./tileElements";


const TileSection = ({
    lightBg, id, img, imgStart, topLine, 
    lightText, headline, darkText, 
    description, buttonLabel, alt
}) => {
    return (
        <div>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                                <Button to='about' >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </div>
    );
};

export default TileSection;