import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

export const TwitchScreen = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
  const handleReady = (e) => {
    embed.current = e;
  };
  
  return (
    <TwitchEmbed 
    channel="jasubip" 
    autoplay={ true }
    muted 
    withChat={false} 
    darkMode={true} 
    onVideoReady={handleReady}
    width='100%' 
  />
  );
};