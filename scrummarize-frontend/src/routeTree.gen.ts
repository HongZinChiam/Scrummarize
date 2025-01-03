/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SprintBoardImport } from './routes/sprint-board'
import { Route as IndexImport } from './routes/index'
import { Route as ProductBacklogIndexImport } from './routes/product-backlog/index'
import { Route as ProductBacklogTaskNewImport } from './routes/product-backlog/task.new'
import { Route as ProductBacklogTaskEditTaskIDImport } from './routes/product-backlog/task.edit.$taskID'

// Create/Update Routes

const SprintBoardRoute = SprintBoardImport.update({
  id: '/sprint-board',
  path: '/sprint-board',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductBacklogIndexRoute = ProductBacklogIndexImport.update({
  id: '/product-backlog/',
  path: '/product-backlog/',
  getParentRoute: () => rootRoute,
} as any)

const ProductBacklogTaskNewRoute = ProductBacklogTaskNewImport.update({
  id: '/product-backlog/task/new',
  path: '/product-backlog/task/new',
  getParentRoute: () => rootRoute,
} as any)

const ProductBacklogTaskEditTaskIDRoute =
  ProductBacklogTaskEditTaskIDImport.update({
    id: '/product-backlog/task/edit/$taskID',
    path: '/product-backlog/task/edit/$taskID',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/sprint-board': {
      id: '/sprint-board'
      path: '/sprint-board'
      fullPath: '/sprint-board'
      preLoaderRoute: typeof SprintBoardImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/': {
      id: '/product-backlog/'
      path: '/product-backlog'
      fullPath: '/product-backlog'
      preLoaderRoute: typeof ProductBacklogIndexImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/task/new': {
      id: '/product-backlog/task/new'
      path: '/product-backlog/task/new'
      fullPath: '/product-backlog/task/new'
      preLoaderRoute: typeof ProductBacklogTaskNewImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/task/edit/$taskID': {
      id: '/product-backlog/task/edit/$taskID'
      path: '/product-backlog/task/edit/$taskID'
      fullPath: '/product-backlog/task/edit/$taskID'
      preLoaderRoute: typeof ProductBacklogTaskEditTaskIDImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/sprint-board': typeof SprintBoardRoute
  '/product-backlog': typeof ProductBacklogIndexRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/sprint-board': typeof SprintBoardRoute
  '/product-backlog': typeof ProductBacklogIndexRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/sprint-board': typeof SprintBoardRoute
  '/product-backlog/': typeof ProductBacklogIndexRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/sprint-board'
    | '/product-backlog'
    | '/product-backlog/task/new'
    | '/product-backlog/task/edit/$taskID'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/sprint-board'
    | '/product-backlog'
    | '/product-backlog/task/new'
    | '/product-backlog/task/edit/$taskID'
  id:
    | '__root__'
    | '/'
    | '/sprint-board'
    | '/product-backlog/'
    | '/product-backlog/task/new'
    | '/product-backlog/task/edit/$taskID'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SprintBoardRoute: typeof SprintBoardRoute
  ProductBacklogIndexRoute: typeof ProductBacklogIndexRoute
  ProductBacklogTaskNewRoute: typeof ProductBacklogTaskNewRoute
  ProductBacklogTaskEditTaskIDRoute: typeof ProductBacklogTaskEditTaskIDRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SprintBoardRoute: SprintBoardRoute,
  ProductBacklogIndexRoute: ProductBacklogIndexRoute,
  ProductBacklogTaskNewRoute: ProductBacklogTaskNewRoute,
  ProductBacklogTaskEditTaskIDRoute: ProductBacklogTaskEditTaskIDRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/sprint-board",
        "/product-backlog/",
        "/product-backlog/task/new",
        "/product-backlog/task/edit/$taskID"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/sprint-board": {
      "filePath": "sprint-board.tsx"
    },
    "/product-backlog/": {
      "filePath": "product-backlog/index.tsx"
    },
    "/product-backlog/task/new": {
      "filePath": "product-backlog/task.new.tsx"
    },
    "/product-backlog/task/edit/$taskID": {
      "filePath": "product-backlog/task.edit.$taskID.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
