import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const animateSoundWaves = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
  100% {
    transform: scaleY(1);
  }
`;

const SoundWave = styled.div`
  width: 6px;
  height: 50px;
  margin: 0 2px;
  background-color: ${props => props.color || '#333'};
  animation: ${animateSoundWaves} 1s ease-in-out infinite;

  animation-delay: ${props => props.delay}ms;
`;
const Loader = () => {

  const numSoundWaves = 6;
  const staggerDelay = 100;
  const colors = ['#1db95467', '#ffffff55', '#19141464'];
  return (

    <Container>
      { [...Array(numSoundWaves)].map((_, index) => (
        <SoundWave key={ index } delay={ index * staggerDelay } color={ colors[index % colors.length] } />
      )) }
    </Container>)

};

export default Loader;
