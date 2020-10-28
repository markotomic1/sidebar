import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const {
    openSidebar,
    openModal,
    isSidebarOpen,
  } = useGlobalContext();
  return (
    <section>
      <button
        className={
          isSidebarOpen
            ? "btn-display"
            : "sidebar-toggle"
        }
        onClick={openSidebar}
      >
        <FaBars />
      </button>

      <button
        className={
          isSidebarOpen ? "btn-1" : "btn"
        }
        onClick={openModal}
      >
        Show Modal
      </button>
    </section>
  );
};
export default Home;
