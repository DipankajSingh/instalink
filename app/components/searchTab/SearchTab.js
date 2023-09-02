import React from "react";
import ProfileList from "./ProfileList";
import FilterTabs from "./FilterTabs";
import SearchInputField from "./SearchInputField";
import HasTagList from "./HastagList";

function SearchTab() {
  // set navbar to hidden when this was search tab
  return (
    <div className="text-black overflow-auto flex flex-col">
      <div className="flex bg-white justify-between z-10 flex-col sticky top-0 pt-3">
        <div className="flex px-5">
          <div className="flex bg-[#efefef] rounded-xl items-center px-2 w-full mr-3">
            <svg
              width={"22px"}
              height={"22px"}
              viewBox={"0 0 24 24"}
              fill={"none"}
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke={"rgb(107, 114, 128)"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <SearchInputField />
          </div>
          <button className="font-semibold scale-110">Cancel</button>
        </div>
        <FilterTabs />
      </div>

      <div className="flex flex-col relative overflow-auto pt-0 gap-1">
        <ProfileList />
        <HasTagList />
        <ProfileList />
        <div className="flex justify-between px-6 z-10 sticky top-0 pb-3 border-b bg-white">
          <p className="text-2xl font-bold">Recent</p>
          <button className="text-blue-600 text-lg font-semibold">
            See All
          </button>
        </div>
        <ProfileList />
        <HasTagList />
        <ProfileList />
        <ProfileList />
        <HasTagList />
        <ProfileList />
        <ProfileList />
        <HasTagList />
        <ProfileList />
        <ProfileList />
        <HasTagList />
        <ProfileList />
      </div>
    </div>
  );
}

export default SearchTab;
