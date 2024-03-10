import { useEffect, useState } from "react";


//검색창에서 입력값을 처리할때 연속적인 변화를 바로 처리하지 않고
// 잠시 기다렸다가 최종결과를 반영할때 사용!
export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
    
      return () => {
        clearTimeout(handler)
      }
    }, [value, delay])

    return debounceValue
}