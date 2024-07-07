"use client"

import { useWatchContext } from "@/context/Watch";
import EpInfo from "./EpInfo";
import Option from "./Option"
import Server from "./Server";
import VideoPlayer from "./VideoPlayer";

const MainVideo = ({ sub, dub }) => {
  const { episode } = useWatchContext();

  return (
    <div className="w-full bg-[#22212c] rounded-md p-2 !pb-0 flex flex-col">

      <VideoPlayer />


      <Option />

      <div className="h-full min-h-[124px] bg-[#484460] text-slate-100 flex rounded-md overflow-hidden mt-1 shadow-[3px_13px_29px_0px_#48455fbd]">
        <EpInfo episode={episode} />
        <Server sub={sub} dub={dub} />
      </div>
    </div>
  )
}

export default MainVideo