/* eslint-disable @typescript-eslint/no-var-requires,no-undef */
// 컴파일에 필요한 schema 파일은 서버 환경에서도 생성이 되어야한다.
const fs = require('fs');
const path = require('path');
const fetch = require('isomorphic-fetch');
const { getIntrospectionQuery, buildClientSchema, printSchema } = require('graphql');
const { GITHUB_TOKEN } = require('../config');

const generateSchema = async () => {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });

    const res = await response.json();
    const sdl = printSchema(buildClientSchema(res.data));
    const parentPath = path.join(__dirname, '../');
    fs.writeFileSync(`${parentPath}/schema.graphql`, sdl);
  } catch (e) {
    console.error(e);
  }
};

generateSchema();
