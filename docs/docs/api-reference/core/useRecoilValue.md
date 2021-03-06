---
title: useRecoilValue(state)
sidebar_label: useRecoilValue()
---

返回给定 Recoil state 的值。

使用此 hook 会使组件隐式地订阅给定的 state。

---

```jsx
function useRecoilValue<T>(state: RecoilValue<T>): T;
```

- `state`：一个 [`atom`](/docs/api-reference/core/atom) 或 [`selector`](/docs/api-reference/core/selector)

---

当一个组件需要在不写入 state 的情况下读取 state 时，推荐使用该 hook，因为该 hook 可以同时在**只读 state** 和**可写 state** 中使用。Atom 是可写 state，而 selector 可以是只读，也可以是可写的。更多信息，参考 [`selector()`](/docs/api-reference/core/selector)。

Using this hook in a React component will subscribe the component to re-render when the state is updated.  This hook may throw if the state has an error or is pending asynchronous resolution.  Please see [this guide](/docs/guides/asynchronous-data-queries).

### 示例

```jsx
import {atom, selector, useRecoilValue} from 'recoil';

const namesState = atom({
  key: 'namesState',
  default: ['', 'Ella', 'Chris', '', 'Paul'],
});

const filteredNamesState = selector({
  key: 'filteredNamesState',
  get: ({get}) => get(namesState).filter((str) => str !== ''),
});

function NameDisplay() {
  const names = useRecoilValue(namesState);
  const filteredNames = useRecoilValue(filteredNamesState);

  return (
    <>
      Original names: {names.join(',')}
      <br />
      Filtered names: {filteredNames.join(',')}
    </>
  );
}
```
