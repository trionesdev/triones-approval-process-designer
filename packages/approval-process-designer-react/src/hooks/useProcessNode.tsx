import {useProcessEngine} from "./useProcessEngine";

export const useProcessNode = () => {
  return useProcessEngine().processNode
}