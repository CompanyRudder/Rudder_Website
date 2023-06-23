# Rudder WebSite Description

Rudder Website BackEnd기획 & DB설계

## BackEnd Stack

기술 스택

**BackEnd** : Node.js + Express 사용
**DB** : Mysql 8.0 Ver 사용

## 사용되는 DatabaseTable 정리 및 상세설명

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
| pic1           | text     | not null                  | 포트폴리오 메인 이미지 |
| pic2           | text     | not null                  | 포트폴리오 이미지2     |
| pic3           | text     | not null                  | 포트폴리오 이미지3     |
| pic4           | text     | not null                  | 포트폴리오 이미지4     |
| pic5           | text     | not null                  | 포트폴리오 이미지5     |
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
