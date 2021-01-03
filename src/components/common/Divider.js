import styled from "styled-components";

const Line = styled.div`
  width: ${(props) => props.DesktopLength || 0}rem;
  margin: 0 auto;
  border-top: 1px solid #ffffff;
  @media (max-width: 1024px) {
    width: ${(props) => props.TabletLength || 0}rem;
  }
  @media (max-width: 768px) {
    width: ${(props) => props.MobileLength || 0}rem;
  }
`;

const Divider = ({ DesktopLength, TabletLength, MobileLength }) => {
  return (
    <Line
      DesktopLength={DesktopLength}
      TabletLength={TabletLength}
      MobileLength={MobileLength}
    />
  );
};

export default Divider;
