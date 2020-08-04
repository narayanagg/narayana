import { useEffect } from "react";

function useCustomHook(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
}

export default useCustomHook;
