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
import { Route as SprintBoardSprintNewImport } from './routes/sprint-board/sprint.new'
import { Route as ProductBacklogTaskNewImport } from './routes/product-backlog/task.new'
import { Route as ProductBacklogTaskMoveImport } from './routes/product-backlog/task.move'
import { Route as sprintBacklogSprintBacklogSprintIDImport } from './routes/(sprint-backlog)/sprint-backlog.$sprintID'
import { Route as SprintBoardSprintViewSprintIDImport } from './routes/sprint-board/sprint.view.$sprintID'
import { Route as ProductBacklogTaskEditTaskIDImport } from './routes/product-backlog/task.edit.$taskID'
import { Route as sprintBacklogSprintBacklogSprintIDTableImport } from './routes/(sprint-backlog)/sprint-backlog.$sprintID.table'
import { Route as sprintBacklogSprintBacklogSprintIDKanbanImport } from './routes/(sprint-backlog)/sprint-backlog.$sprintID.kanban'
import { Route as sprintBacklogSprintBacklogSprintIDTaskTaskIDImport } from './routes/(sprint-backlog)/sprint-backlog_.$sprintID.task.$taskID'

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

const sprintBacklogSprintBacklogSprintIDRoute =
  sprintBacklogSprintBacklogSprintIDImport.update({
    id: '/(sprint-backlog)/sprint-backlog/$sprintID',
    path: '/sprint-backlog/$sprintID',
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

const sprintBacklogSprintBacklogSprintIDTableRoute =
  sprintBacklogSprintBacklogSprintIDTableImport.update({
    id: '/table',
    path: '/table',
    getParentRoute: () => sprintBacklogSprintBacklogSprintIDRoute,
  } as any)

const sprintBacklogSprintBacklogSprintIDKanbanRoute =
  sprintBacklogSprintBacklogSprintIDKanbanImport.update({
    id: '/kanban',
    path: '/kanban',
    getParentRoute: () => sprintBacklogSprintBacklogSprintIDRoute,
  } as any)

const sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute =
  sprintBacklogSprintBacklogSprintIDTaskTaskIDImport.update({
    id: '/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID',
    path: '/sprint-backlog/$sprintID/task/$taskID',
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
    '/(sprint-backlog)/sprint-backlog/$sprintID': {
      id: '/(sprint-backlog)/sprint-backlog/$sprintID'
      path: '/sprint-backlog/$sprintID'
      fullPath: '/sprint-backlog/$sprintID'
      preLoaderRoute: typeof sprintBacklogSprintBacklogSprintIDImport
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
    '/(sprint-backlog)/sprint-backlog/$sprintID/kanban': {
      id: '/(sprint-backlog)/sprint-backlog/$sprintID/kanban'
      path: '/kanban'
      fullPath: '/sprint-backlog/$sprintID/kanban'
      preLoaderRoute: typeof sprintBacklogSprintBacklogSprintIDKanbanImport
      parentRoute: typeof sprintBacklogSprintBacklogSprintIDImport
    }
    '/(sprint-backlog)/sprint-backlog/$sprintID/table': {
      id: '/(sprint-backlog)/sprint-backlog/$sprintID/table'
      path: '/table'
      fullPath: '/sprint-backlog/$sprintID/table'
      preLoaderRoute: typeof sprintBacklogSprintBacklogSprintIDTableImport
      parentRoute: typeof sprintBacklogSprintBacklogSprintIDImport
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
    '/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID': {
      id: '/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID'
      path: '/sprint-backlog/$sprintID/task/$taskID'
      fullPath: '/sprint-backlog/$sprintID/task/$taskID'
      preLoaderRoute: typeof sprintBacklogSprintBacklogSprintIDTaskTaskIDImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface sprintBacklogSprintBacklogSprintIDRouteChildren {
  sprintBacklogSprintBacklogSprintIDKanbanRoute: typeof sprintBacklogSprintBacklogSprintIDKanbanRoute
  sprintBacklogSprintBacklogSprintIDTableRoute: typeof sprintBacklogSprintBacklogSprintIDTableRoute
}

const sprintBacklogSprintBacklogSprintIDRouteChildren: sprintBacklogSprintBacklogSprintIDRouteChildren =
  {
    sprintBacklogSprintBacklogSprintIDKanbanRoute:
      sprintBacklogSprintBacklogSprintIDKanbanRoute,
    sprintBacklogSprintBacklogSprintIDTableRoute:
      sprintBacklogSprintBacklogSprintIDTableRoute,
  }

const sprintBacklogSprintBacklogSprintIDRouteWithChildren =
  sprintBacklogSprintBacklogSprintIDRoute._addFileChildren(
    sprintBacklogSprintBacklogSprintIDRouteChildren,
  )

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/product-backlog': typeof ProductBacklogIndexRoute
  '/sprint-board': typeof SprintBoardIndexRoute
  '/sprint-backlog/$sprintID': typeof sprintBacklogSprintBacklogSprintIDRouteWithChildren
  '/product-backlog/task/move': typeof ProductBacklogTaskMoveRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/sprint-board/sprint/new': typeof SprintBoardSprintNewRoute
  '/sprint-backlog/$sprintID/kanban': typeof sprintBacklogSprintBacklogSprintIDKanbanRoute
  '/sprint-backlog/$sprintID/table': typeof sprintBacklogSprintBacklogSprintIDTableRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
  '/sprint-board/sprint/view/$sprintID': typeof SprintBoardSprintViewSprintIDRoute
  '/sprint-backlog/$sprintID/task/$taskID': typeof sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/product-backlog': typeof ProductBacklogIndexRoute
  '/sprint-board': typeof SprintBoardIndexRoute
  '/sprint-backlog/$sprintID': typeof sprintBacklogSprintBacklogSprintIDRouteWithChildren
  '/product-backlog/task/move': typeof ProductBacklogTaskMoveRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/sprint-board/sprint/new': typeof SprintBoardSprintNewRoute
  '/sprint-backlog/$sprintID/kanban': typeof sprintBacklogSprintBacklogSprintIDKanbanRoute
  '/sprint-backlog/$sprintID/table': typeof sprintBacklogSprintBacklogSprintIDTableRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
  '/sprint-board/sprint/view/$sprintID': typeof SprintBoardSprintViewSprintIDRoute
  '/sprint-backlog/$sprintID/task/$taskID': typeof sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/product-backlog/': typeof ProductBacklogIndexRoute
  '/sprint-board/': typeof SprintBoardIndexRoute
  '/(sprint-backlog)/sprint-backlog/$sprintID': typeof sprintBacklogSprintBacklogSprintIDRouteWithChildren
  '/product-backlog/task/move': typeof ProductBacklogTaskMoveRoute
  '/product-backlog/task/new': typeof ProductBacklogTaskNewRoute
  '/sprint-board/sprint/new': typeof SprintBoardSprintNewRoute
  '/(sprint-backlog)/sprint-backlog/$sprintID/kanban': typeof sprintBacklogSprintBacklogSprintIDKanbanRoute
  '/(sprint-backlog)/sprint-backlog/$sprintID/table': typeof sprintBacklogSprintBacklogSprintIDTableRoute
  '/product-backlog/task/edit/$taskID': typeof ProductBacklogTaskEditTaskIDRoute
  '/sprint-board/sprint/view/$sprintID': typeof SprintBoardSprintViewSprintIDRoute
  '/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID': typeof sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/product-backlog'
    | '/sprint-board'
    | '/sprint-backlog/$sprintID'
    | '/product-backlog/task/move'
    | '/product-backlog/task/new'
    | '/sprint-board/sprint/new'
    | '/sprint-backlog/$sprintID/kanban'
    | '/sprint-backlog/$sprintID/table'
    | '/product-backlog/task/edit/$taskID'
    | '/sprint-board/sprint/view/$sprintID'
    | '/sprint-backlog/$sprintID/task/$taskID'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/product-backlog'
    | '/sprint-board'
    | '/sprint-backlog/$sprintID'
    | '/product-backlog/task/move'
    | '/product-backlog/task/new'
    | '/sprint-board/sprint/new'
    | '/sprint-backlog/$sprintID/kanban'
    | '/sprint-backlog/$sprintID/table'
    | '/product-backlog/task/edit/$taskID'
    | '/sprint-board/sprint/view/$sprintID'
    | '/sprint-backlog/$sprintID/task/$taskID'
  id:
    | '__root__'
    | '/'
    | '/product-backlog/'
    | '/sprint-board/'
    | '/(sprint-backlog)/sprint-backlog/$sprintID'
    | '/product-backlog/task/move'
    | '/product-backlog/task/new'
    | '/sprint-board/sprint/new'
    | '/(sprint-backlog)/sprint-backlog/$sprintID/kanban'
    | '/(sprint-backlog)/sprint-backlog/$sprintID/table'
    | '/product-backlog/task/edit/$taskID'
    | '/sprint-board/sprint/view/$sprintID'
    | '/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductBacklogIndexRoute: typeof ProductBacklogIndexRoute
  SprintBoardIndexRoute: typeof SprintBoardIndexRoute
  sprintBacklogSprintBacklogSprintIDRoute: typeof sprintBacklogSprintBacklogSprintIDRouteWithChildren
  ProductBacklogTaskMoveRoute: typeof ProductBacklogTaskMoveRoute
  ProductBacklogTaskNewRoute: typeof ProductBacklogTaskNewRoute
  SprintBoardSprintNewRoute: typeof SprintBoardSprintNewRoute
  ProductBacklogTaskEditTaskIDRoute: typeof ProductBacklogTaskEditTaskIDRoute
  SprintBoardSprintViewSprintIDRoute: typeof SprintBoardSprintViewSprintIDRoute
  sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute: typeof sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductBacklogIndexRoute: ProductBacklogIndexRoute,
  SprintBoardIndexRoute: SprintBoardIndexRoute,
  sprintBacklogSprintBacklogSprintIDRoute:
    sprintBacklogSprintBacklogSprintIDRouteWithChildren,
  ProductBacklogTaskMoveRoute: ProductBacklogTaskMoveRoute,
  ProductBacklogTaskNewRoute: ProductBacklogTaskNewRoute,
  SprintBoardSprintNewRoute: SprintBoardSprintNewRoute,
  ProductBacklogTaskEditTaskIDRoute: ProductBacklogTaskEditTaskIDRoute,
  SprintBoardSprintViewSprintIDRoute: SprintBoardSprintViewSprintIDRoute,
  sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute:
    sprintBacklogSprintBacklogSprintIDTaskTaskIDRoute,
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
        "/product-backlog/",
        "/sprint-board/",
        "/(sprint-backlog)/sprint-backlog/$sprintID",
        "/product-backlog/task/move",
        "/product-backlog/task/new",
        "/sprint-board/sprint/new",
        "/product-backlog/task/edit/$taskID",
        "/sprint-board/sprint/view/$sprintID",
        "/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/product-backlog/": {
      "filePath": "product-backlog/index.tsx"
    },
    "/sprint-board/": {
      "filePath": "sprint-board/index.tsx"
    },
    "/(sprint-backlog)/sprint-backlog/$sprintID": {
      "filePath": "(sprint-backlog)/sprint-backlog.$sprintID.tsx",
      "children": [
        "/(sprint-backlog)/sprint-backlog/$sprintID/kanban",
        "/(sprint-backlog)/sprint-backlog/$sprintID/table"
      ]
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
    "/(sprint-backlog)/sprint-backlog/$sprintID/kanban": {
      "filePath": "(sprint-backlog)/sprint-backlog.$sprintID.kanban.tsx",
      "parent": "/(sprint-backlog)/sprint-backlog/$sprintID"
    },
    "/(sprint-backlog)/sprint-backlog/$sprintID/table": {
      "filePath": "(sprint-backlog)/sprint-backlog.$sprintID.table.tsx",
      "parent": "/(sprint-backlog)/sprint-backlog/$sprintID"
    },
    "/product-backlog/task/edit/$taskID": {
      "filePath": "product-backlog/task.edit.$taskID.tsx"
    },
    "/sprint-board/sprint/view/$sprintID": {
      "filePath": "sprint-board/sprint.view.$sprintID.tsx"
    },
    "/(sprint-backlog)/sprint-backlog_/$sprintID/task/$taskID": {
      "filePath": "(sprint-backlog)/sprint-backlog_.$sprintID.task.$taskID.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
