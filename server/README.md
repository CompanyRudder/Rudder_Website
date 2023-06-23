# Rudder WebSite Description

Rudder Website BackEnd 단 설명입니다.

## Available Scripts

In the project directory, you can run:

## 사용되는 DatabaseTable 정리

SQL : Mysql 8.0v

### `Portfolio TABLE`

| 컬럼명         | 자료형   | 조건                      | 설명                   |
| -------------- | -------- | ------------------------- | ---------------------- |
| idx            | int      | Primary Key               | 고유번호               |
| title          | varchar  | not null                  | 포트폴리오 제목        |
| date           | varchar  | not null                  | 이벤트 날짜            |
| sub_title1     | varchar  | \_                        | 서브 제목1             |
| sub_content1   | varchar  | \_                        | 서브 제목 설명1        |
| sub_title2     | varchar  | \_                        | 서브 제목2             |
| sub_content2   | varchar  | \_                        | 서브 제목 설명2        |
| sub_title3     | varchar  | \_                        | 서브 제목3             |
| sub_content3   | varchar  | \_                        | 서브 제목 설명3        |
| sub_title4     | varchar  | \_                        | 서브 제목4             |
| sub_content4   | varchar  | \_                        | 서브 제목 설명4        |
| sub_title5     | varchar  | \_                        | 서브 제목5             |
| sub_content5   | varchar  | \_                        | 서브 제목 설명5        |
| pic1           | text     | notnull                   | 포트폴리오 메인 이미지 |
| pic2           | text     | notnull                   | 포트폴리오 이미지2     |
| pic3           | text     | notnull                   | 포트폴리오 이미지3     |
| pic4           | text     | notnull                   | 포트폴리오 이미지4     |
| pic5           | text     | notnull                   | 포트폴리오 이미지5     |
| sub_link_title | text     | \_                        | 링크제목               |
| sub_link_adrs  | text     | \_                        | 링크주소               |
| write_stamp    | datetime | default current_timestamp | 포트폴리오 작성 시간   |

### `Login TABLE`

| 컬럼명 | 자료형  | 조건        | 설명     |
| ------ | ------- | ----------- | -------- |
| idx    | int     | Primary Key | 고유번호 |
| id     | varchar | not null    | 아이디   |
| pw     | varchar | not null    | 패스워드 |

### `nodemon index.js` or `node index.js` 로 Backend 실행

DataTable 정리 및 설명

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
