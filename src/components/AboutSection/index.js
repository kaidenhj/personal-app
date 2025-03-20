import React from "react";
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img
 } from "./aboutElements";

const InfoSection = () => {
    return (
        <div>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Top Line</TopLine>
                            <Heading>Heading </Heading>
                            <SubTitle>Subtitle</SubTitle>
                            <BtnWrap>
                                <Button to='about' />
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </div>
    );
};

export default InfoSection;