import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  if (error.code === 'ERR_NETWORK') {
    return <h4>Please check your network connection...</h4>;
  }
  return <h4>There was an error...</h4>;
};
export default SinglePageError;
