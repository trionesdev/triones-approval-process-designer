import {useContext} from "react";
import {ProcessNodeContext} from "../context";

export const useProcessNode = () => {
  return useContext(ProcessNodeContext)
}