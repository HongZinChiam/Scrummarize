/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SprintBoardIndexImport } from './routes/sprint-board/index'
import { Route as ProductBacklogIndexImport } from './routes/product-backlog/index'
import { Route as SprintBacklogSprintIDImport } from './routes/sprint-backlog/$sprintID'
import { Route as SprintBoardSprintNewImport } from './routes/sprint-board/sprint.new'
import { Route as ProductBacklogTaskNewImport } from './routes/product-backlog/task.new'
import { Route as ProductBacklogTaskMoveImport } from './routes/product-backlog/task.move'
import { Route as SprintBoardSprintViewSprintIDImport } from './routes/sprint-board/sprint.view.$sprintID'
import { Route as ProductBacklogTaskEditTaskIDImport } from './routes/product-backlog/task.edit.$taskID'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SprintBoardIndexRoute = SprintBoardIndexImport.update({
  id: '/sprint-board/',
  path: '/sprint-board/',
  getParentRoute: () => rootRoute,
} as any)

const ProductBacklogIndexRoute = ProductBacklogIndexImport.update({
  id: '/product-backlog/',
  path: '/product-backlog/',
  getParentRoute: () => rootRoute,
} as any)

const SprintBacklogSprintIDRoute = SprintBacklogSprintIDImport.update({
  id: '/sprint-backlog/$sprintID',
  path: '/sprint-backlog/$sprintID',
  getParentRoute: () => rootRoute,
} as any)

const SprintBoardSprintNewRoute = SprintBoardSprintNewImport.update({
  id: '/sprint-board/sprint/new',
  path: '/sprint-board/sprint/new',
  getParentRoute: () => rootRoute,
} as any)

const ProductBacklogTaskNewRoute = ProductBacklogTaskNewImport.update({
  id: '/product-backlog/task/new',
  path: '/product-backlog/task/new',
  getParentRoute: () => rootRoute,
} as any)

const ProductBacklogTaskMoveRoute = ProductBacklogTaskMoveImport.update({
  id: '/product-backlog/task/move',
  path: '/product-backlog/task/move',
  getParentRoute: () => rootRoute,
} as any)

const SprintBoardSprintViewSprintIDRoute =
  SprintBoardSprintViewSprintIDImport.update({
    id: '/sprint-board/sprint/view/$sprintID',
    path: '/sprint-board/sprint/view/$sprintID',
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
    '/sprint-backlog/$sprintID': {
      id: '/sprint-backlog/$sprintID'
      path: '/sprint-backlog/$sprintID'
      fullPath: '/sprint-backlog/$sprintID'
      preLoaderRoute: typeof SprintBacklogSprintIDImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/': {
      id: '/product-backlog/'
      path: '/product-backlog'
      fullPath: '/product-backlog'
      preLoaderRoute: typeof ProductBacklogIndexImport
      parentRoute: typeof rootRoute
    }
    '/sprint-board/': {
      id: '/sprint-board/'
      path: '/sprint-board'
      fullPath: '/sprint-board'
      preLoaderRoute: typeof SprintBoardIndexImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/task/move': {
      id: '/product-backlog/task/move'
      path: '/product-backlog/task/move'
      fullPath: '/product-backlog/task/move'
      preLoaderRoute: typeof ProductBacklogTaskMoveImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/task/new': {
      id: '/product-backlog/task/new'
      path: '/product-backlog/task/new'
      fullPath: '/product-backlog/task/new'
      preLoaderRoute: typeof ProductBacklogTaskNewImport
      parentRoute: typeof rootRoute
    }
    '/sprint-board/sprint/new': {
      id: '/sprint-board/sprint/new'
      path: '/sprint-board/sprint/new'
      fullPath: '/sprint-board/sprint/new'
      preLoaderRoute: typeof SprintBoardSprintNewImport
      parentRoute: typeof rootRoute
    }
    '/product-backlog/task/edit/$taskID': {
      id: '/product-backlog/task/edit/$taskID'
      path: '/product-backlog/task/edit/$taskID'
      fullPath: '/product-backlog/task/edit/$taskID'
      preLoaderRoute: typeof ProductBacklogTaskEditTaskIDImport
      parentRoute: typeof rootRoute
    }
    '/sprint-board/sprint/view/$sprintID': {
      id: '/sprint-board/sprint/view/$sprintID'
      path: '/sprint-board/sprint/view/$sprintID'
      fullPath: '/sprint-board/sprint/view/$sprintID'
      preLoaderRoute: typeof SprintBoardSprintViewSprintIDImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/sprint-backlog/$sprintID': typeof SprintBacklogSprintIDRoute
  '/product-backlog': typeof ProductBacklogIndexRoute
  '/sprint-board': typeof SprintBoardIndexRoute
  '/product-backlog/task/move': typeof ProductBacklogTaskMoveRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/sprint-board/sprint/new': typeof SprintBoardSprintNewRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
  '/sprint-board/sprint/view/$sprintID': typeof SprintBoardSprintViewSprintIDRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/sprint-backlog/$sprintID': typeof SprintBacklogSprintIDRoute
  '/product-backlog': typeof ProductBacklogIndexRoute
  '/sprint-board': typeof SprintBoardIndexRoute
  '/product-backlog/task/move': typeof ProductBacklogTaskMoveRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/sprint-board/sprint/new': typeof SprintBoardSprintNewRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
  '/sprint-board/sprint/view/$sprintID': typeof SprintBoardSprintViewSprintIDRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/sprint-backlog/$sprintID': typeof SprintBacklogSprintIDRoute
  '/product-backlog/': typeof ProductBacklogIndexRoute
  '/sprint-board/': typeof SprintBoardIndexRoute
  '/product-backlog/task/move': typeof ProductBacklogTaskMoveRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/sprint-board/sprint/new': typeof SprintBoardSprintNewRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
  '/sprint-board/sprint/view/$sprintID': typeof SprintBoardSprintViewSprintIDRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/sprint-backlog/$sprintID'
    | '/product-backlog'
    | '/sprint-board'
    | '/product-backlog/task/move'
    | '/product-backlog/task/new'
    | '/sprint-board/sprint/new'
    | '/product-backlog/task/edit/$taskID'
    | '/sprint-board/sprint/view/$sprintID'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/sprint-backlog/$sprintID'
    | '/product-backlog'
    | '/sprint-board'
    | '/product-backlog/task/move'
    | '/product-backlog/task/new'
    | '/sprint-board/sprint/new'
    | '/product-backlog/task/edit/$taskID'
    | '/sprint-board/sprint/view/$sprintID'
  id:
    | '__root__'
    | '/'
    | '/sprint-backlog/$sprintID'
    | '/product-backlog/'
    | '/sprint-board/'
    | '/product-backlog/task/move'
    | '/product-backlog/task/new'
    | '/sprint-board/sprint/new'
    | '/product-backlog/task/edit/$taskID'
    | '/sprint-board/sprint/view/$sprintID'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SprintBacklogSprintIDRoute: typeof SprintBacklogSprintIDRoute
  ProductBacklogIndexRoute: typeof ProductBacklogIndexRoute
  SprintBoardIndexRoute: typeof SprintBoardIndexRoute
  ProductBacklogTaskMoveRoute: typeof ProductBacklogTaskMoveRoute
  ProductBacklogTaskNewRoute: typeof ProductBacklogTaskNewRoute
  SprintBoardSprintNewRoute: typeof SprintBoardSprintNewRoute
  ProductBacklogTaskEditTaskIDRoute: typeof ProductBacklogTaskEditTaskIDRoute
  SprintBoardSprintViewSprintIDRoute: typeof SprintBoardSprintViewSprintIDRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SprintBacklogSprintIDRoute: SprintBacklogSprintIDRoute,
  ProductBacklogIndexRoute: ProductBacklogIndexRoute,
  SprintBoardIndexRoute: SprintBoardIndexRoute,
  ProductBacklogTaskMoveRoute: ProductBacklogTaskMoveRoute,
  ProductBacklogTaskNewRoute: ProductBacklogTaskNewRoute,
  SprintBoardSprintNewRoute: SprintBoardSprintNewRoute,
  ProductBacklogTaskEditTaskIDRoute: ProductBacklogTaskEditTaskIDRoute,
  SprintBoardSprintViewSprintIDRoute: SprintBoardSprintViewSprintIDRoute,
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
        "/sprint-backlog/$sprintID",
        "/product-backlog/",
        "/sprint-board/",
        "/product-backlog/task/move",
        "/product-backlog/task/new",
        "/sprint-board/sprint/new",
        "/product-backlog/task/edit/$taskID",
        "/sprint-board/sprint/view/$sprintID"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/sprint-backlog/$sprintID": {
      "filePath": "sprint-backlog/$sprintID.tsx"
    },
    "/product-backlog/": {
      "filePath": "product-backlog/index.tsx"
    },
    "/sprint-board/": {
      "filePath": "sprint-board/index.tsx"
    },
    "/product-backlog/task/move": {
      "filePath": "product-backlog/task.move.tsx"
    },
    "/product-backlog/task/new": {
      "filePath": "product-backlog/task.new.tsx"
    },
    "/sprint-board/sprint/new": {
      "filePath": "sprint-board/sprint.new.tsx"
    },
    "/product-backlog/task/edit/$taskID": {
      "filePath": "product-backlog/task.edit.$taskID.tsx"
    },
    "/sprint-board/sprint/view/$sprintID": {
      "filePath": "sprint-board/sprint.view.$sprintID.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
