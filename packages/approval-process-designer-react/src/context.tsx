import {createContext} from "react";
import {ApprovalProcessEngine} from "./model/ApprovalProcessEngine";
import {IActivities} from "./types";

export const ApprovalProcessContext = createContext<ApprovalProcessEngine>(null)

export const ActivitiesContext = createContext<IActivities>(null)