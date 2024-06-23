import _ from "lodash.throttle";

const useSendCode = () => {
  const sendCode = async (code, roomId) => {
    try {
      const res = await fetch(`/api/save/${roomId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({code}),
      });
      
      const data = await res.json();
      console.log("retrieved data ",data);
      if (data.error) {
        throw new Error(data.error);
      }
      
    } catch (error) {
        console.error('Error saving code:', error.message);
        
    }
  };
  const throttledSendCode = _(sendCode, 3000);

  return { throttledSendCode };
};

export default useSendCode;
