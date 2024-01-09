import { useNavigate } from "react-router-dom";

const useNavigator = (destination) => {
  const navigate = useNavigate();
  const navigateToDestination = () => {
    navigate(destination);
  };
  return [navigateToDestination, navigate];
};

export default useNavigator;
