'use strict';

const Mock = require('mockjs');
const data = Mock.mock({
  "data|30": [ {
    "article_id|16": "#",
    "article_name|16": "5",
    "read_num|+1" : 1
  }
  
]
});
console.log(JSON.stringify(data, null, 4));

