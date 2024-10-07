<div align="center">
    <h1>react-flexbox-z</h1>
    <a href="https://github.com/delpikye-v/react-flexbox-z">react-flexbox-z</a>
    <br />
    <b><a href="https://codesandbox.io/s/x544l">LIVE EXAMPLE</a></b>
</div>

<br />


[![npm](https://img.shields.io/npm/v/react-flexbox-z.svg)](https://www.npmjs.com/package/react-flexbox-z) ![downloads](https://img.shields.io/npm/dt/react-flexbox-z.svg)

---

#### Description
+ Wrapper for [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
+ Quick styled-components
+ Support tag: `div`, `nav`, `main`, `aside`, `article`, `header`, `section`, `footer`

---
#### Usage

Install the package

```js
npm install react-flexbox-z
```

Import the module in the place you want to use:
```js
import Flex from "react-flexbox-z";

```

#### Snippet

```js
<Flex as='main'>
  This is a simple
</Flex>
```

```js
<Flex column alignItemsCenter>
  <Flex.Item>
    This is child
  </Flex.Item>
  ... more
</Flex>
```
---

#### Props

###### [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
```js
// =====================================================
<Flex row />
<Flex column />
<Flex rowReverse /> // flex-direction: row-reverse;
<Flex columnReverse /> // flex-direction: column-reverse;

// wrap
<Flex flexWrap='nowrap' />
<Flex wrap /> // flex-wrap: wrap;
<Flex noWrap /> // flex-wrap: nowrap;
<Flex wrapReverse /> // flex-wrap: wrap-reverse;

// justify
<Flex justifyContent='center' />
<Flex justifyStart /> // justify-content: flex-start;
<Flex justifyEnd /> // justify-content: flex-end;
<Flex justifyCenter /> // justify-content: center;
<Flex justifySpaceBetween /> // justify-content: space-between;
<Flex justifySpaceAround /> // justify-content: space-around;

<Flex alignItems='baseline' />
<Flex alignItemsStart /> // align-items: flex-start;
<Flex alignItemsEnd /> // align-items: flex-end;
<Flex alignItemsCenter /> // align-items: center;
<Flex alignItemsBaseline /> // align-items: baseline;
<Flex alignItemsStretch /> // align-items: stretch;

<Flex alignContent='flex-end' />
<Flex alignContentStart /> // align-content: flex-start;
<Flex alignContentEnd /> // align-content: flex-end;
<Flex alignContentCenter /> // align-content: center;
<Flex alignContentSpaceBetween /> // align-content: space-between;
<Flex alignContentSpaceAround /> // align-content: space-around;
<Flex alignContentStretch /> // align-content: stretch;
```


###### [flexbox-item](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

```js
<Flex.Item />
// =====================================================
order, // 'order'
grow, // 'flex-grow'
shrink, // 'flex-shrink'
basis, // 'flex-basis'
flex, // 'flex'
alignSelfAuto, // 'align-self'
alignSelfStart, // align-self: start;
alignSelfEnd, // align-self: end;
alignSelfCenter, // align-self: center;
alignSelfBaseline, // align-self: baseline;
alignSelfStretch, // align-self: stretch;
alignSelf, // 'align-self' manual
```

#### Note
See more d.ts

<br />

#### RUN

<b><a href="https://codesandbox.io/s/x544l">LIVE EXAMPLE</a></a>

<br />

#### License

MIT
