import {IResource, IResourceCreator} from "./types";
import _ from "lodash";
import {ProcessNode} from "./model";

export namespace DesignerCore {
    export function createResource(resource: IResourceCreator): IResource {
        return _.assign(resource, {
            node: new ProcessNode({
                type: resource.type,
                componentName: resource.componentName,
                title: resource.title,
                description: resource.description,
                props: resource.props
            })
        })
    }
}