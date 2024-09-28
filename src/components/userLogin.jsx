import React from "react";

export const UserLogin = ({ userName, setUserName, setLogin }) => {
  return (
    <>
      <div>userLogin</div>
      <div>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(el) => setUserName(el.target.value)}
        />
      </div>
      <button
        onClick={() => {
          if (userName) setLogin(true);
        }}
      >
        Submit
      </button>
    </>
  );
};
