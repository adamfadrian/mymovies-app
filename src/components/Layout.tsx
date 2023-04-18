import React, { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-zinc-50 dark:bg-zinc-800">
      <Navbar />
      <div className="h-full overflow-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
