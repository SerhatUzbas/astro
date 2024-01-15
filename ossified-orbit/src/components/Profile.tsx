import React, { useState } from "react";

const Profile = () => {
  const [isHidden, setIsHidden] = useState(false);
  console.log(isHidden);
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-10 h-10 bg-red-950 rounded-full " />
        <p className="text-emerald-800-500">first</p>
        <p className="text-emerald-800-500">second</p>
        <p className="text-emerald-800-500">third</p>
        {!isHidden && <p className="text-2xl text-orange-500">Hidden Text</p>}
        <button
          className="bg-white text-orange-600"
          onClick={() => setIsHidden((prev) => !prev)}
        >
          Set Hidden
        </button>
      </div>
    </div>
  );
};

export default Profile;
