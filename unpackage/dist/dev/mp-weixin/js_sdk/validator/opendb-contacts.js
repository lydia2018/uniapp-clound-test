"use strict";
const validator = {
  "username": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "\u59D3\u540D"
  },
  "gender": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "\u672A\u77E5",
            "value": 0
          },
          {
            "text": "\u7537",
            "value": 1
          },
          {
            "text": "\u5973",
            "value": 2
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "\u6027\u522B"
  },
  "mobile": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "pattern": "^\\+?[0-9-]{3,20}$"
      }
    ],
    "label": "\u7535\u8BDD"
  },
  "email": {
    "rules": [
      {
        "format": "string"
      },
      {
        "format": "email"
      }
    ],
    "label": "\u90AE\u7BB1"
  },
  "comment": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "\u5907\u6CE8"
  },
  "create_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ]
  }
};
const enumConverter = {
  "gender_valuetotext": {
    "0": "\u672A\u77E5",
    "1": "\u7537",
    "2": "\u5973"
  }
};
exports.enumConverter = enumConverter;
exports.validator = validator;
