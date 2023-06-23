# Rudder WebSite Description

Rudder Website FrontEnd 기획 및 설명

## FrontEnd Stack

기술 스택

**FrontEnd** : React.js 사용

## 페이지 분류

### `클라이언트에게 보여지는 페이지`

-**메인페이지**

: url/

-**포트폴리오 리스트 페이지**

:url/list

-**포트폴리오 상세 페이지**

:url/portfolio/:id

### `관리자에게만 보여지는 페이지`

-**관리자 로그인 페이지**

:url/auth

-**포트폴리오 등록 페이지**

:url/auth/write

-**포트폴리오 수정 페이지**

:url/auth/modify

-**포트폴리오 삭제 페이지**

:url/auth/delete

### `페이지 정리`

| 주소              | 페이지명                              | 권한          | 설명                                         |
| ----------------- | ------------------------------------- | ------------- | -------------------------------------------- |
| url               | 메인페이지                            | ALL           | 도메인 접속시 가장 먼저뜨는 메인페이지       |
| url/list          | 포트폴리오 리스트페이지               | ALL           | 관리자가 등록한 포트폴리오 리스트 확인페이지 |
| url/portfolio/:id | 포트폴리오 상세페이지                 | ALL           | 포트폴리오 상세보기 페이지                   |
| url/auth          | 관리자 페이지 접근                    | ADMIN(관리자) | 관리자 페이지 접근( 관리자 로그인창 view )   |
| url/auth/write    | 포트폴리오 등록페이지                 | ADMIN(관리자) | 포트폴리오 작성페이지                        |
| url/auth/modify   | 포트폴리오 수정페이지                 | ADMIN(관리자) | 등록된 포트폴리오 수정페이지                 |
| url/auth/delete   | 포트폴리오 리스트 확인 및 삭제 페이지 | ADMIN(관리자) | 등록된 포트폴리오 리스트 확인 및 삭제페이지  |
