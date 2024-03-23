import { PropsWithChildren } from "react";
import { Header } from "./header";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full bg-base-300 overflow-auto">
      <Header />
      <div className="flex flex-col p-4 max-w-[1920px] mx-auto px-2 sm:px-5 md:px-12 lg:px-24 gap-4">
        {children}
      </div>
    </div>
  );
};
