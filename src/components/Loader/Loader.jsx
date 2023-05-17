import { Oval } from 'react-loader-spinner';
import LoaderContainer from './Loader.styled';
const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={2}
        strokeWidthSecondary={2}
        color="red"
        secondaryColor="white"
      />
    </LoaderContainer>
  );
};
export default Loader;
