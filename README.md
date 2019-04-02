# a-cat-a-dog-ng

An Angular App for showing cats 🐱 and dogs 🐶.

[Click here to view the demo](https://haixiang6123.github.io/a-cat-a-dog-ng/)

## Screenshot

![](https://i.loli.net/2019/04/03/5ca3a222acc5c.png)

## How to use

### Before running it
Before running it, you need to add a file `secret.ts` to 
the directory `/src/app/http`. So, it would be `/src/app/http/secret.ts`.

Then place following codes in it.

```typescript
export const catKey = 'APPLY THE KEY ON https://thecatapi.com/'
export const dogKey = 'APPLY THE KEY ON https://thedogapi.com/'
```

For those 2 keys, you need to sign up in [thecatapi.com](https://thecatapi.com/) and [thedogapi.com](https://thedogapi.com/).

### Now run it

Now, enter following commands to run it :)
```bash
$ cd a-cat-a-dog-ng

$ yarn install

$ ng serve
```

## Stacks

* [Angular](https://angular.io/)
* [Angular Routing & Navigation](https://angular.io/guide/router)
* [Angular HttpClient](https://angular.io/guide/http)
* [Ant Design of Angular|NG-ZORRO](https://ng.ant.design/docs/introduce/en)
* [Axios](https://github.com/axios/axios)
* [Typescript](https://www.typescriptlang.org/)
