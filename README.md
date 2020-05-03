# react-proxy-bug-repro

## How to run
- clone repo
- yarn
- yarn build
- yarn start

## What to look for
Gatsby app start on http://localhost:9000/ rendering a dummy stencil component:

```jsx
<MyComponent first="Bob" middle="P." last="Stanley" />
```
Which should render `Hello, World! I'm Bob P. Stanley`.

When you turn off JavaScript in your browser you can see the props are missing.

## The fix:
https://github.com/ionic-team/stencil-ds-plugins/commit/49a0219e73f1d416ddfa653b812d7ce7b8e20c5e