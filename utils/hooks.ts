/*
 * @Author: indeex
 * @Date: 2019-05-19 19:54:39
 * @Email: indeex@qq.com
 */
import { useRef, useLayoutEffect, useCallback } from "react";

export function useEvent(handler: any) {
    const handlerRef = useRef(null);

    useLayoutEffect(() => {
        handlerRef.current = handler;
    });

    return useCallback((...args: any) => {
        const fn: any = handlerRef.current;
        return fn(...args);
    }, []);
}