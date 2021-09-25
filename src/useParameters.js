import { useHistory, useLocation } from "react-router-dom";

export const useParameter = (paramName) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(paramName);
};

export const useReplaceParameters = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const replaceParameters = (parameters) => {
    parameters.forEach(({ key, value }) => {
      if (value === "") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    history.push(
      `${
        location.pathname.includes("movie") ? "/movies" : "/people"
      }?${searchParams.toString()}`
    );
  };

  return replaceParameters;
};
