# NextJS Routing

- uses file based routing
- /app stands for "/"
- /app/about stands "/about"

## Dynamic Routing

- dynamic routing is achieved by [ ]
- e.g. /product/[id]

## Dynamic Nested Routing

- /product/[id]/review/[review_id]

## Catch all routes

- used to catch all segments
- e.g /docs/section-1/category/1 - it will catch all the paths as string array
- /docs/[...slug]

## Not found page

- create not-found.tsx file at folder level
- also we can use notFound() next/naviagation package to redirect 404 programmatically

## Private folders

- can be created by using '_' before
- e.g _lib

## metadata 

- by exporting static metadata object per page/layout
- by exporting dynamic metadata (mostly async)

## Link

- navigation link is implemented using "Link" from next/link
- e.g <Link href={"/home"}> Home </Link>
- we use useRouter hook to perform programmatic navigations
- e.g const router = useRouter(); router.push("/home")

## Loading UI

- create "loading.tsx" file in desired route level to showcase loading

## Parallel Routes

- parallel routes are combined mulple routing module in one single place , simply SPA  
- this was done using "@"

Note: when working with parellal routes which has sub routes in it, we should have maintain default state for each route by defining "default.tsx" file  

## Conditional Routes

-  

## Intercepting Routes

- its kind of preview route , intercepting the existing route and display the preview kind of data , when specifically accessed via link, it will redirect to actual route


## Route Handlers

- 
