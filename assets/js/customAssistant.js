function preReceiveHandler(event) {
    const message = event.data;
    if (message.output.generic) {
      message.output.generic.forEach(messageItem => {
        if (messageItem.response_type === 'option') {
          messageItem.response_type = 'user_defined';
        }
      })
    }
  }

  function customResponseHandler(event) {
    const { message, element, fullMessage } = event.data;
    message.options.forEach((messageItem, index) => {
      const button = document.createElement('button');
      button.innerHTML = messageItem.label;
      button.classList.add('CardButton');
      button.addEventListener('click', () => onClick(messageItem, button,     fullMessage, index));
      element.appendChild(button);
    });
  }
  


var g_wa_instance;
window.watsonAssistantChatOptions = {
    integrationID: "0ec15536-4f64-4717-a29a-f74b3536fc70", // The ID of this integration.
    region: "aws-us-east-1", // The region your integration is hosted in.
    serviceInstanceID: "20240313-1416-3826-1055-26022b1c41ef", // The ID of your service instance.
    showRestartButton: true,
    
    onLoad: async (instance) => {
        // The instance returned here has many methods on it that are documented on this page. You can assign it to any
        // global window variable you like if you need to access it in other functions in your application. This instance
        // is also passed as an argument to all event handlers when web chat fires an event.
        await instance.render();
     }
  };


  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

  