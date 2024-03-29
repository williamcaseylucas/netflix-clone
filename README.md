# netflix-clone

## Commands to run

- npx create-next-app --typescript (or yarn create next-app --typescript)
- yarn add prisma -D
- yarn add @prisma/client
- yarn add next-auth
- yarn add bcrypt
- yarn add -D @types/bcrypt
- yarn add axios

## Prisma

- yarn prisma init
- add lib folder to main directory
  - add prismadb.ts
  - outside of lib, add global.d.ts to make prismadb error go away
- go to .env file to see url to database
- add models
- add /test at the end of uri string
- yarn prisma db push (updates database)
  - Go to collections and you can schemas that have been generated
- add NEXT_AUTH secrets to .env file

## MongoDB

- Connect with code to get link that won't break Prisma

## In globals.css

- Add @layer base {} and other values to apply tailwind css to components without having to manually type them everywhere

## Scale background image

- bg-no-repeat bg-center bg-fixed bg-cover
- Add to style component of relative: "url('/images/hero.jpg')"

## Can reference files in public folder

- By /images

## Input.tsx

- peer-placeholder-shown -> what it shows on the peer element
- peer-focus -> what it shows on it its own element

## General notes

- Just change height of image to scale
