import styled from 'styled-components';

const UnderLine = styled.div`
  display: flex;
  border-top: 1px solid #c4c4c4;    
  width: ${props=> props.DesktopLength || 0}rem;
  @media only screen and (max-width: 1440px) {
    width: ${props=> props.BetweenLength || 0}rem;
  }
    @media only screen and (max-width: 1024px) {
    width: ${props=> props.TabletLength || 0}rem;
  }
    @media only screen and (max-width: 768px) {
    width: ${props=> props.MobileLength || 0}rem;
  }
`

const UnderLineComponent = ({DesktopLength,BetweenLength,TabletLength,MobileLength}) => {
    return <UnderLine DesktopLength={DesktopLength} BetweenLength={BetweenLength}TabletLength={TabletLength} MobileLength={MobileLength} ></UnderLine>
}

export default UnderLineComponent;