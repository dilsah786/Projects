import React from "react";

function Title({ title }) {
  return (
    <div>
      <p className="text-2xl 2xl:text-3xl font-semibold text-gray-600 dark:text-gray-500">
        {title}
      </p>
    </div>
  );
}

export default Title;
