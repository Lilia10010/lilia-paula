import styled from "styled-components";
import Slider from "react-slick";

export const CustomSlider = styled(Slider)`
  margin: 24px auto;
  width: calc(100% - 64px);
  max-width: 1180px;
`;

export const SliderHolder = styled.div``;

export const Logo = styled.img`
  height: ${(props) => (props.small ? "55px" : "45px")};
  width: 90px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.primary};
  width: 100%;
  padding: 16px 0 24px 0;
  display: flex;
`;
