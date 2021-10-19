import React from 'react';

const Loader = ({ size = 10 }) => {
  return (
    <div
      className={`loader ease-linear rounded-full border-2 border-t-2 border-gray-200 w-10 h-10`}
    ></div>
  );
};

Loader.defaultProps = {
  size: 10
};

export default Loader;
