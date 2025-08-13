/**
 * 전체 빌드 순서 요약
 * 
 * (1)
 * 포스팅들이 있는 _pages/ 폴더아래 전체 .md 파일 목록 확인
 * .md 파일을 markdown-it 파싱 --> 프론트매터의 layout 에 따라 해당하는 .pug 파일로 파싱
 * 파싱 결과물들을 pagesInfo 객체에 할당
 * 
 * (2)
 * 카테고리가 있는 _dirs/ 폴더 아래 전체 .md 파일 목록 확인
 * .md 파일을 markdown-it 파싱 --> 프론트매터의 layout 에 따라 해당하는 .pug 파일로 파싱
 * 파싱 결과물들을 dirsInfo 객체에 할당
 * 
 * (3)
 * 블로그 외형이 있는 _layouts/ 폴더 아래 .pug 파일 파싱
 * 파싱 결과물로 index.html, 404.html, sitemap.xml 생성
 * 
 * (4)
 * index.html 과 _aasets/ 폴더아래 style.css 파일 안의 unocss 파싱
 * 블로그 전체 스타일 생성
 */

import fg from "fast-glob";

var pagesInfo = {};
var dirsInfo = {};

// (1)