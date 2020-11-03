export interface DocSpecResult {
    results: Result[];
    start: number;
    limit: number;
    size: number;
    _links: DocSpecResultLinks;
}

export interface DocSpecResultLinks {
    self: string;
    next: string;
    base: string;
    context: string;
}

export interface Result {
    id: string;
    type: Type;
    status: Status;
    title: string;
    extensions: Extensions;
    _links: ResultLinks;
    _expandable: Expandable;
}

export interface Expandable {
    container: Container;
    metadata: string;
    operations: string;
    children: string;
    restrictions: string;
    history: string;
    ancestors: string;
    body: string;
    version: string;
    descendants: string;
    space: Container;
}

export enum Container {
    RESTAPISpaceDs = "/rest/api/space/ds",
    RESTAPISpaceQJWL = "/rest/api/space/QJWL",
}

export interface ResultLinks {
    webui: string;
    edit: string;
    tinyui: string;
    self: string;
}

export interface Extensions {
    position: PositionEnum | number;
}

export enum PositionEnum {
    None = "none",
}

export enum Status {
    Current = "current",
}

export enum Type {
    Page = "page",
}
