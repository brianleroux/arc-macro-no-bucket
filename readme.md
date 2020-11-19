# arc-macro-no-bucket

If you don't need static assets for your app you may want to remove the static website bucket that gets created. This macro removes all signs of that!

## install

```bash
npm i arc-macro-no-bucket
```

## usage

```
@app
myapp

@http
get /

@macros
arc-macro-no-bucket
```
