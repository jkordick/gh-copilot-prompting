# How to write good prompts 

## 1 Enter a high-level goal (use file 1)

```javascript
/** create a simple javascript API for an ESC (eurovision song contest) voting
 * - Germany, Switzerland, Spain, UK, Netherlands participate this year
 * - Germany starts with 12 points, others with 0
 * - the points need to be between 1-12
 * - the points can only be given once
 * - write a CLI that allows to give points to the countries
 * - write useful console logs for the user to follow the flow in the CLI
 */
```

## 2 Keep it simple and be specific (explain on file 1)


## 3 Iterate your prompts (file 3)

```javascript
// One shot
// create me data in a json format that contains the following information: country, points, year, song-title, artist

// Few-shot
// create me data in a json format that contains the following information: country, points, year, song-title, artist
// example: {country: 'Germany', points: 12, year: 2021, song-title: 'I don't feel hate', artist: 'Jendrik'}

// Chain of thought
// create me a function that calculates the annual water demand of a single-family household containing four people who are at home an average of 200 days per year and use an average of 100 liters of water per day


```

## 4 Provide useful context in tabs (show on file 3)

## 5 Use descriptive names for variables and functions (use file 5)

## 6 Follow a consistent coding style and patterns

```javascript
// be consistent in your coding style

function add(a,b) {
    return a + b;
}
```

## 8 Provide more context if needed

```javascript
// javascript
// filename: 8-fibonacci.js
```

## 9 GitHub Copilot Chat

```javascript
// create a function for a binary search algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }


return -1;

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

```

@vscode /search search all files with to dos
@workspace /new create me a react js application
@workspace /newNotebook load csv into dataframe
