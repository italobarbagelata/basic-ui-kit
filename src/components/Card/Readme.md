This is a Card component:

```js
<Card>This is a test</Card>
```

Card component can be floatable:

```js { "props": { "floatable": "true" } }
<Card floatable={true}>This is a test</Card>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button size="large">Push Me</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.