# Travel Time Calculate

## Installation

```bash
npm i travel-time
```

## Example

```javascript
const travelTime = require('travel-time');

let t1 = {
    hours: 2,
    minutes: 25,
    secondes: 50
};

let t2 = {
    hours: 3,
    minutes: 22,
    secondes: 33
};

console.log(travelTime.calculate(t1, t2));
```

### Result

```bash
node example.js
{ hours: 5, minutes: 48, secondes: 23 }
```


Good flight :airplane:
