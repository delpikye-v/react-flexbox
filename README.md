## 📦 react-flexbox-z

[![NPM](https://img.shields.io/npm/v/react-flexbox-z.svg)](https://www.npmjs.com/package/react-flexbox-z) ![downloads](https://img.shields.io/npm/dt/react-flexbox-z.svg)

[LIVE EXAMPLE](https://codesandbox.io/s/x544l)


+ Wrapper for [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
+ Quick styled-components
+ Support tag: `div`, `nav`, `main`, `aside`, `article`, `header`, `section`, `footer`

---

## Features
- ⚡ Simple **Flexbox wrapper** using `styled-components`.
- 🔥 Quick utility props (`row`, `column`, `justifyCenter`, etc.).
- 🏷️ Supports semantic tags: `div`, `nav`, `main`, `aside`, `article`, `header`, `section`, `footer`.
- 🎯 Includes `Flex.Item` for child element control.

---

## Installation

```bash
npm install react-flexbox-z
# or
yarn add react-flexbox-z
```

---

## Usage

```tsx
import Flex from "react-flexbox-z";

export default function App() {
  return (
    <Flex as="main" column alignItemsCenter justifyCenter>
      <h1>Hello Flexbox</h1>
      <Flex.Item grow>
        <p>This is a child that grows</p>
      </Flex.Item>
      <Flex.Item>
        <button>Click me</button>
      </Flex.Item>
    </Flex>
  );
}
```

---

## Examples

### Basic row layout
```tsx
<Flex row justifySpaceBetween alignItemsCenter>
  <Flex.Item>Left</Flex.Item>
  <Flex.Item>Right</Flex.Item>
</Flex>
```

### Column centered
```tsx
<Flex column alignItemsCenter justifyCenter style={{ height: "100vh" }}>
  <Flex.Item>Centered Item 1</Flex.Item>
  <Flex.Item>Centered Item 2</Flex.Item>
</Flex>
```

### Wrap items
```tsx
<Flex wrap gap="16px">
  <Flex.Item basis="120px">Box 1</Flex.Item>
  <Flex.Item basis="120px">Box 2</Flex.Item>
  <Flex.Item basis="120px">Box 3</Flex.Item>
  <Flex.Item basis="120px">Box 4</Flex.Item>
</Flex>
```

### Flexible growth
```tsx
<Flex row>
  <Flex.Item grow={1}>Sidebar</Flex.Item>
  <Flex.Item grow={3}>Content</Flex.Item>
</Flex>
```

---

## API

### Flex

```tsx
<Flex row />
<Flex column />
<Flex wrap />
<Flex justifyCenter />
<Flex alignItemsStretch />
```

**Props (shortcuts):**

- **Direction**: `row`, `column`, `rowReverse`, `columnReverse`
- **Wrap**: `wrap`, `noWrap`, `wrapReverse`
- **Justify**: `justifyStart`, `justifyEnd`, `justifyCenter`, `justifySpaceBetween`, `justifySpaceAround`
- **Align Items**: `alignItemsStart`, `alignItemsEnd`, `alignItemsCenter`, `alignItemsBaseline`, `alignItemsStretch`
- **Align Content**: `alignContentStart`, `alignContentEnd`, `alignContentCenter`, `alignContentSpaceBetween`, `alignContentSpaceAround`, `alignContentStretch`

---

### Flex.Item
```tsx
<Flex.Item grow={1} basis="50%" alignSelfCenter>
  Child
</Flex.Item>
```

**Props (shortcuts):**

- `order`
- `grow`
- `shrink`
- `basis`
- `flex`
- `alignSelf` (`auto`, `start`, `end`, `center`, `baseline`, `stretch`)

---

## Notes
- Check the **TypeScript typings** (`d.ts`) for all supported props.
- Designed for **styled-components**.

---

## License
MIT
