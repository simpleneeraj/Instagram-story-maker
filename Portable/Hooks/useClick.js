import { useRef, useEffect, useCallback } from "react";

export function useClickOutside(onClickHandler) {
  //---------------------------------------------------------------------//
  // Use Ref to Container Where you don't want to Click means it's outside
  //---------------------------------------------------------------------//

  const ref = useRef(null);
  //----------------------------------//
  // Handler
  //----------------------------------//
  const handleEvent = useCallback(
    (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      onClickHandler();
      console.log("Hello World");
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleEvent, false);
    return () => {
      document.removeEventListener("click", handleEvent, false);
    };
  }, []);

  return ref;
}
