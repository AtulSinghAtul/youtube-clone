import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";

const useChannelIcons = (channelId) => {
  const [channelDp, setChannelDp] = useState(null);

  useEffect(() => {
    channelIcon();
  }, []);

  async function channelIcon() {
    const data = await axios.get(YT_POPULAR_VIDEOS_BASE_API + "channels", {
      params: {
        part: "snippet",
        id: channelId,
        key: API_KEY,
      },
    });

    // console.log("first time channel icon call");
    setChannelDp(data?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
    localStorage.setItem(
      "yt-channel-icon",
      data?.data?.items[0]?.snippet?.thumbnails?.medium?.url
    );
  }

  return channelDp;
};

export default useChannelIcons;
