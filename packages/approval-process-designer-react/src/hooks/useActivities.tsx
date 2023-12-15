import {useContext} from "react";
import {ActivitiesContext} from "../context";

export const useActivities = () => {
    return useContext(ActivitiesContext)
}