import * as React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-3 px-4 text-center text-gray-500">
      <small className="flex justify-center items-center">
        &copy; 2023 ttphats <FaHeart className="text-red-400 ml-1" />. All
        rights reserved.
      </small>
    </footer>
  );
}
