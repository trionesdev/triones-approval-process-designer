import {useProcessEngine} from "./useProcessEngine";

export const useProcess = () => {
  return useProcessEngine().process
}