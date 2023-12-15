import {useContext} from "react";
import {ApprovalProcessContext} from "../context";

export const useProcessEngine = () => {
  return useContext(ApprovalProcessContext)
}