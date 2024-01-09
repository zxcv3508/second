import { useNavigate } from "react-router-dom";

const useNavigator = () => {
  const navigate = useNavigate();
  const navigateToDestination = (destination) => {
    navigate(destination);
  };
  return [navigateToDestination, navigate];
};

export default useNavigator;
