"use client";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}
const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default ReactQueryProvider;
