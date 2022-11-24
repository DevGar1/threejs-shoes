import { useDeviceSelectors } from "react-device-detect";

const useDevices = () => {
  const [selectors] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;
  return {
    isMobile,
  };
};

export default useDevices;
