#!/bin/bash

WEBAPP_DIR=src/main/webapp

npm run build --prefix vue
rm -rf ${WEBAPP_DIR:?}/*
mkdir -p $WEBAPP_DIR
cp -r vue/dist/* $WEBAPP_DIR
echo '<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>' > ${WEBAPP_DIR:?}/index.jsp
# shellcheck disable=SC2002
cat ${WEBAPP_DIR:?}/index.html | sed "s|<body>|<body><c:if test='\${message ne null}'><script>alert('\${message}')</script></c:if>|" >> ${WEBAPP_DIR:?}/index.jsp
rm ${WEBAPP_DIR:?}/index.html

