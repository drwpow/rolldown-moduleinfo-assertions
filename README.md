# rolldown-moduleinfo-assertions

Repro of issue with Rolldown 0.14 and `moduleInfo.assertions`. To run:

```sh
pnpm i
pnpm run build
```

See the following error:

```
[UNHANDLEABLE_ERROR] Error: Something wrong inside the rolldown, please report this at https://github.com/rolldown/rolldown/issues.
GenericFailure, TypeError: Cannot read properties of null (reading 'assertions')

node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^

[Error: Build failed] { code: 'GenericFailure' }
```
