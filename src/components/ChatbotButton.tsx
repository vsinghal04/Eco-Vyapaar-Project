import React, { useState, useEffect } from 'react';

const ChatbotButton: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(prev => !prev);
  };

  // Inject Chatbase script once
  useEffect(() => {
    const alreadyInjected = document.getElementById('2Ra4G3v2VmOtj8593QM0J');
    if (alreadyInjected) return;

    const script = document.createElement('script');
    script.innerHTML = `
      (function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
          window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
          };
          window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
              if(prop==="q"){return target.q}
              return(...args)=>target(prop,...args)
            }
          })
        }
        const onLoad=function(){
          const script=document.createElement("script");
          script.src="https://www.chatbase.co/embed.min.js";
          script.id="2Ra4G3v2VmOtj8593QM0J";
          script.domain="www.chatbase.co";
          document.body.appendChild(script)
        };
        if(document.readyState==="complete"){onLoad()}
        else{window.addEventListener("load",onLoad)}
      })();
    `;
    document.body.appendChild(script);
  }, []);

  // Show/hide logic (optional if Chatbase auto-manages visibility)
  useEffect(() => {
    const iframeWrapper = document.querySelector('iframe[src*="chatbase.co"]')?.parentElement;
    if (iframeWrapper) {
      iframeWrapper.style.display = isChatbotOpen ? 'block' : 'none';
    }
  }, [isChatbotOpen]);

  return (
    <>
      <button
        id="chatbot-button"
        className="chatbot-button"
        onClick={toggleChatbot}
        aria-expanded={isChatbotOpen}
        aria-label="Toggle chatbot"
      >
        <i className="fa-solid fa-robot"></i>
      </button>
    </>
  );
};

export default ChatbotButton;