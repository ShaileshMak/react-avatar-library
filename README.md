# smak-avatar

> React avatar component liabrary

[![NPM](https://img.shields.io/npm/v/smak-avatar.svg)](https://www.npmjs.com/package/smak-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![JavaScript Style Guide](https://img.shields.io/badge/stackblitz-demo-orange.svg)](https://stackblitz.com/edit/react-2ah8tv?file=src/App.js)

## Install

```bash
npm install --save smak-avatar
```

## Usage

```tsx
import React, { Component } from 'react'

import Avatar from 'smak-avatar'

class Example extends Component {
  render() {
    return <Avatar />
  }
}
```

# react-avatar-library

React component library for Avatar

```tsx
<Avatar
  src='http://www.worldbiography.info/wp-content/uploads/2019/12/sachin.jpg'
  name='Sachin Tendulkar'
  width={50}
  position='right'
/>
```

All properties are optional.

**Install From NPM**

```tsx
npm i smak-avatar
```

**With all properties**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/righttextavatar.png?raw=true 'avatar react component with text position on right')

```tsx
<Avatar
  src='http://www.worldbiography.info/wp-content/uploads/2019/12/sachin.jpg'
  name='Sachin Tendulkar'
  width={50}
  position='right'
/>
```

**With src and name properties, text position default is left**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/lefttextavatar.png?raw=true 'avatar react component with default text position on left')

```tsx
<Avatar
  src='http://www.worldbiography.info/wp-content/uploads/2019/12/sachin.jpg'
  name='Sachin Tendulkar'
/>
```

**With only src property**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/notextavatar.png?raw=true 'avatar react component with no text')

```tsx
<Avatar src='http://www.worldbiography.info/wp-content/uploads/2019/12/sachin.jpg' />
```

**With no properties**

![alt text](https://github.com/ShaileshMak/web-component-avatar/blob/master/readme-assets/defautlavatar.png?raw=true 'avatar react component with no text and no image')

```tsx
<Avatar />
```

**With initials**

![alt text](https://github.com/ShaileshMak/react-avatar-library/blob/master/readme-assets/initials.png?raw=true 'avatar react component with only initials')

```tsx
<Avatar initials='SM' />
```

## License

MIT © [ShaileshMak](https://github.com/ShaileshMak)
