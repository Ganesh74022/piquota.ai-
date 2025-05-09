import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(location.pathname);

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      sessionStorage.setItem(location.pathname, window.scrollY);
    };
  }, [location]);

  return null;
};

export default ScrollToTop;
