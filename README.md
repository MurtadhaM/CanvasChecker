# Canvas API (To utilize TurnItOn Itegrity Check)


## Quick Links
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/Quick-Links-red)</a>

- [x] [copyLeaks](https://copyleaks.com/ai-content-detector?fbclid=IwAR2Zip7fBI4ZRrw0dyWQvaMrN846Tvzx713eNslnUVkSoWbjgCCv8_FIqpw)

- [x] [AIDetector](https://contentatscale.ai/ai-content-detector/)

- [x] [ CheckForAi](https://checkforai.com/beta/)

- [x] [CrossPlag](https://crossplag.com/ai-content-detector/)

- [x] [AI-Writing-Check](https://aiwritingcheck.org/)

- [x] [contentatscale.ai](https://contentatscale.ai/ai-content-detector/)



## Prerequisites
---

<a href="http://findasnake.com">![](https://img.shields.io/badge/Requirements-Installs-red)</a>


- [ ] Get a Canvas API key from your Canvas profile (Account > Settings > Approved Integrations > New Access Token)
- [ ] A Canvas course with at least one assignment that has TurnItIn enabled



## Setup
<a href="http://findasnake.com">![](https://img.shields.io/badge/Setup-Installs-red)</a>

#### In the .env file, add the following variables:

```javascript
CANVAS_TOKEN="YOUR_CANVAS_API_KEY"
COURSE_ID="YOUR_CANVAS_COURSE_ID"
ASSIGNMENT_ID="YOUR_ASSIGNMENT_ID"
```


## How to use
1. Clone this repository
2. Install the requirements
3. Run the script

```bash
git clone https://github.com/MurtadhaM/CanvasAPI.git 
cd CanvasAPI
npm install
## USAGE
Usage: node app.js <list|submit> <text-file>
```
## How it works
--- 
<a href="http://findasnake.com">![](https://img.shields.io/badge/Explaination-i--red)</a>

The script will first get all the assignments in the course. Then, it will filter out the assignments that have TurnItIn enabled. Finally, it will submit the text file to each assignment.



## Author
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/Author-Murtadha-red)</a>

 Murtadha Marzouq

<img src="https://avatars.githubusercontent.com/u/45076915?v=7" width="100" height="100" alt="Murtadha Marzouq">

## License
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/License-MIT-red)</a>


