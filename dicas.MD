## Start project

- npm init -y
- npm install typescript jest @type/jest --save
- mkdir src
- mkdir test
- npx tsc --init
- In tsconfig.json SET

```JSON
{
    "compilerOptions": {
        "incremental": true,
        "outDir": "./dist",
    },
    "include": [
        "src",
        "test",
    ]
}
```

- create ./src/A.ts

```TYPESCRIPT
export default class A {
  constructor(readonly name: string) {}
}
```

- create ./test/A.test.ts

```TYPESCRIPT
import A from '../src/A';

test('Deve testar A', function () {
  const name = 'Fabio';
  const a = new A(name);
  expect(a.name).toBe(name);
});
```

- In package.json SET

```JSON
{
    "scripts": {
        "test": "tsc && jest ./dist && rm -rf ./dist",
        "coverage": "tsc && jest ./dist --coverage && rm -rf ./dist"
    }
}
```

- npm run test

## Opcionais

- npm install ts-node ts-jest
