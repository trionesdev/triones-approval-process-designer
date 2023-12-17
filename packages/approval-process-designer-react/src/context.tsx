import {createContext} from "react";
import {ApprovalProcessEngine} from "./model/ApprovalProcessEngine";
import {IActivities} from "./types";
import {ProcessNode} from "./model";

export const ApprovalProcessContext = createContext<ApprovalProcessEngine>(null)

export const ActivitiesContext = createContext<IActivities>(null)

export const ProcessNodeContext = createContext<ProcessNode>(null)