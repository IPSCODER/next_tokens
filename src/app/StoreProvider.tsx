"use client";

import { useRef, useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | any>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>

    {children}
    </Provider>;
}