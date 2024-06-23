import { useState, useEffect } from "react";

const useGetCode = (roomId) => {
  const [defaultCode, setDefaultCode] = useState();
  useEffect(() => {
    const getCode = async () => {
        try {
            const res = await fetch(`/api/get/${roomId}`);
            const data = await res.json();
            if (data.error) {
              throw new Error(data.error);
            }
      
            const { code } = data[0];
            setDefaultCode(code);
            
          } catch (error) {
            console.log(error.message);
          }
    }
    getCode();
  }, [defaultCode,roomId]);

  return { defaultCode };
};

export default useGetCode;
