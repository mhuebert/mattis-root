var AWS = {
    "util": {
        "engine": function () {},
        "userAgent": function () {},
        "isBrowser": function () {},
        "isNode": function () {},
        "nodeRequire": function () {},
        "multiRequire": function () {},
        "uriEscape": function () {},
        "uriEscapePath": function () {},
        "urlParse": function () {},
        "urlFormat": function () {},
        "queryStringParse": function () {},
        "queryParamsToString": function () {},
        "readFileSync": function () {},
        "base64": {
            "encode": function () {},
            "decode": function () {}
        },
        "Buffer": function () {},
        "buffer": {
            "toStream": function () {},
            "concat": function () {}
        },
        "string": {
            "byteLength": function () {},
            "upperFirst": function () {},
            "lowerFirst": function () {}
        },
        "ini": {
            "parse": function () {}
        },
        "fn": {
            "noop": function () {},
            "makeAsync": function () {}
        },
        "jamespath": {
            "query": function () {},
            "find": function () {}
        },
        "date": {
            "getDate": function () {},
            "iso8601": function () {},
            "rfc822": function () {},
            "unixTimestamp": function () {},
            "from": function () {},
            "format": function () {},
            "parseTimestamp": function () {}
        },
        "crypto": {
            "crc32Table": {
                "0": {},
                "1": {},
                "2": {},
                "3": {},
                "4": {},
                "5": {},
                "6": {},
                "7": {},
                "8": {},
                "9": {},
                "10": {},
                "11": {},
                "12": {},
                "13": {},
                "14": {},
                "15": {},
                "16": {},
                "17": {},
                "18": {},
                "19": {},
                "20": {},
                "21": {},
                "22": {},
                "23": {},
                "24": {},
                "25": {},
                "26": {},
                "27": {},
                "28": {},
                "29": {},
                "30": {},
                "31": {},
                "32": {},
                "33": {},
                "34": {},
                "35": {},
                "36": {},
                "37": {},
                "38": {},
                "39": {},
                "40": {},
                "41": {},
                "42": {},
                "43": {},
                "44": {},
                "45": {},
                "46": {},
                "47": {},
                "48": {},
                "49": {},
                "50": {},
                "51": {},
                "52": {},
                "53": {},
                "54": {},
                "55": {},
                "56": {},
                "57": {},
                "58": {},
                "59": {},
                "60": {},
                "61": {},
                "62": {},
                "63": {},
                "64": {},
                "65": {},
                "66": {},
                "67": {},
                "68": {},
                "69": {},
                "70": {},
                "71": {},
                "72": {},
                "73": {},
                "74": {},
                "75": {},
                "76": {},
                "77": {},
                "78": {},
                "79": {},
                "80": {},
                "81": {},
                "82": {},
                "83": {},
                "84": {},
                "85": {},
                "86": {},
                "87": {},
                "88": {},
                "89": {},
                "90": {},
                "91": {},
                "92": {},
                "93": {},
                "94": {},
                "95": {},
                "96": {},
                "97": {},
                "98": {},
                "99": {},
                "100": {},
                "101": {},
                "102": {},
                "103": {},
                "104": {},
                "105": {},
                "106": {},
                "107": {},
                "108": {},
                "109": {},
                "110": {},
                "111": {},
                "112": {},
                "113": {},
                "114": {},
                "115": {},
                "116": {},
                "117": {},
                "118": {},
                "119": {},
                "120": {},
                "121": {},
                "122": {},
                "123": {},
                "124": {},
                "125": {},
                "126": {},
                "127": {},
                "128": {},
                "129": {},
                "130": {},
                "131": {},
                "132": {},
                "133": {},
                "134": {},
                "135": {},
                "136": {},
                "137": {},
                "138": {},
                "139": {},
                "140": {},
                "141": {},
                "142": {},
                "143": {},
                "144": {},
                "145": {},
                "146": {},
                "147": {},
                "148": {},
                "149": {},
                "150": {},
                "151": {},
                "152": {},
                "153": {},
                "154": {},
                "155": {},
                "156": {},
                "157": {},
                "158": {},
                "159": {},
                "160": {},
                "161": {},
                "162": {},
                "163": {},
                "164": {},
                "165": {},
                "166": {},
                "167": {},
                "168": {},
                "169": {},
                "170": {},
                "171": {},
                "172": {},
                "173": {},
                "174": {},
                "175": {},
                "176": {},
                "177": {},
                "178": {},
                "179": {},
                "180": {},
                "181": {},
                "182": {},
                "183": {},
                "184": {},
                "185": {},
                "186": {},
                "187": {},
                "188": {},
                "189": {},
                "190": {},
                "191": {},
                "192": {},
                "193": {},
                "194": {},
                "195": {},
                "196": {},
                "197": {},
                "198": {},
                "199": {},
                "200": {},
                "201": {},
                "202": {},
                "203": {},
                "204": {},
                "205": {},
                "206": {},
                "207": {},
                "208": {},
                "209": {},
                "210": {},
                "211": {},
                "212": {},
                "213": {},
                "214": {},
                "215": {},
                "216": {},
                "217": {},
                "218": {},
                "219": {},
                "220": {},
                "221": {},
                "222": {},
                "223": {},
                "224": {},
                "225": {},
                "226": {},
                "227": {},
                "228": {},
                "229": {},
                "230": {},
                "231": {},
                "232": {},
                "233": {},
                "234": {},
                "235": {},
                "236": {},
                "237": {},
                "238": {},
                "239": {},
                "240": {},
                "241": {},
                "242": {},
                "243": {},
                "244": {},
                "245": {},
                "246": {},
                "247": {},
                "248": {},
                "249": {},
                "250": {},
                "251": {},
                "252": {},
                "253": {},
                "254": {},
                "255": {}
            },
            "crc32": function () {},
            "hmac": function () {},
            "md5": function () {},
            "sha256": function () {},
            "hash": function () {},
            "toHex": function () {},
            "createHash": function () {}
        },
        "abort": function () {},
        "each": function () {},
        "arrayEach": function () {},
        "update": function () {},
        "merge": function () {},
        "copy": function () {},
        "isEmpty": function () {},
        "arraySliceFn": function () {},
        "isType": function () {},
        "typeName": function () {},
        "error": function () {},
        "inherit": function () {},
        "mixin": function () {},
        "hideProperties": function () {},
        "property": function () {},
        "memoizedProperty": function () {},
        "hoistPayloadMember": function () {},
        "computeSha256": function () {}
    },
    "VERSION": {},
    "Signers": {
        "RequestSigner": function () {},
        "V2": function () {},
        "V3": function () {},
        "V3Https": function () {},
        "V4": function () {},
        "S3": function () {},
        "Presign": function () {}
    },
    "Protocol": {
        "Json": {
            "buildRequest": function () {},
            "extractError": function () {},
            "extractData": function () {}
        },
        "Query": {
            "buildRequest": function () {},
            "extractError": function () {},
            "extractData": function () {}
        },
        "Rest": {
            "buildRequest": function () {},
            "extractError": function () {},
            "extractData": function () {}
        },
        "RestJson": {
            "buildRequest": function () {},
            "extractError": function () {},
            "extractData": function () {}
        },
        "RestXml": {
            "buildRequest": function () {},
            "extractError": function () {},
            "extractData": function () {}
        }
    },
    "XML": {
        "Builder": function () {},
        "Parser": function () {}
    },
    "JSON": {
        "Builder": function () {},
        "Parser": function () {}
    },
    "Model": {
        "Api": function () {},
        "Operation": function () {},
        "Shape": function () {},
        "Paginator": function () {},
        "ResourceWaiter": function () {}
    },
    "apiLoader": function () {},
    "Service": function () {},
    "Credentials": function () {},
    "CredentialProviderChain": function () {},
    "TemporaryCredentials": function () {},
    "WebIdentityCredentials": function () {},
    "CognitoIdentityCredentials": function () {},
    "SAMLCredentials": function () {},
    "Config": function () {},
    "config": {
        "credentials": {"get": function(){}, "expired": false, "params": {"Logins": {}}},
        "credentialProvider": function () {},
        "region": function () {},
        "logger": function () {},
        "apiVersions": function () {},
        "apiVersion": function () {},
        "endpoint": {},
        "httpOptions": {
            "timeout": {}
        },
        "maxRetries": {},
        "maxRedirects": {},
        "paramValidation": {},
        "sslEnabled": {},
        "s3ForcePathStyle": {},
        "s3BucketEndpoint": {},
        "computeChecksums": {},
        "convertResponseTypes": {},
        "dynamoDbCrc32": {},
        "systemClockOffset": {},
        "signatureVersion": function () {},
        "constructor": function () {},
        "getCredentials": function () {},
        "update": function () {},
        "loadFromPath": function () {},
        "clear": function () {},
        "set": function () {},
        "keys": {
            "credentials": function () {},
            "credentialProvider": function () {},
            "region": function () {},
            "logger": function () {},
            "apiVersions": function () {},
            "apiVersion": function () {},
            "endpoint": {},
            "httpOptions": {
                "timeout": {}
            },
            "maxRetries": {},
            "maxRedirects": {},
            "paramValidation": {},
            "sslEnabled": {},
            "s3ForcePathStyle": {},
            "s3BucketEndpoint": {},
            "computeChecksums": {},
            "convertResponseTypes": {},
            "dynamoDbCrc32": {},
            "systemClockOffset": {},
            "signatureVersion": function () {}
        },
        "extractCredentials": function () {}
    },
    "Endpoint": function () {},
    "HttpRequest": function () {},
    "HttpResponse": function () {},
    "HttpClient": function () {},
    "SequentialExecutor": function () {},
    "EventListeners": {
        "Core": {
            "_events": {
                "validate": {
                    "0": function () {},
                    "1": function () {},
                    "2": function () {}
                },
                "afterBuild": {
                    "0": function () {},
                    "1": function () {},
                    "2": function () {}
                },
                "restart": {
                    "0": function () {}
                },
                "sign": {
                    "0": function () {}
                },
                "validateResponse": {
                    "0": function () {}
                },
                "send": {
                    "0": function () {}
                },
                "httpHeaders": {
                    "0": function () {}
                },
                "httpData": {
                    "0": function () {}
                },
                "httpDone": {
                    "0": function () {}
                },
                "retry": {
                    "0": function () {},
                    "1": function () {},
                    "2": function () {},
                    "3": function () {},
                    "4": function () {}
                },
                "afterRetry": {
                    "0": function () {}
                }
            },
            "VALIDATE_CREDENTIALS": function () {},
            "VALIDATE_REGION": function () {},
            "VALIDATE_PARAMETERS": function () {},
            "COMPUTE_SHA256": function () {},
            "SET_CONTENT_LENGTH": function () {},
            "SET_HTTP_HOST": function () {},
            "RESTART": function () {},
            "SIGN": function () {},
            "VALIDATE_RESPONSE": function () {},
            "SEND": function () {},
            "HTTP_HEADERS": function () {},
            "HTTP_DATA": function () {},
            "HTTP_DONE": function () {},
            "FINALIZE_ERROR": function () {},
            "INVALIDATE_CREDENTIALS": function () {},
            "EXPIRED_SIGNATURE": function () {},
            "REDIRECT": function () {},
            "RETRY_CHECK": function () {},
            "RESET_RETRY_STATE": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "CorePost": {
            "_events": {
                "extractData": {
                    "0": function () {}
                },
                "httpError": {
                    "0": function () {}
                }
            },
            "EXTRACT_REQUEST_ID": function () {},
            "ENOTFOUND_ERROR": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "Logger": {
            "_events": {
                "complete": {
                    "0": function () {}
                }
            },
            "LOG_REQUEST": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "Json": {
            "_events": {
                "build": {
                    "0": function () {}
                },
                "extractData": {
                    "0": function () {}
                },
                "extractError": {
                    "0": function () {}
                }
            },
            "BUILD": function () {},
            "EXTRACT_DATA": function () {},
            "EXTRACT_ERROR": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "Rest": {
            "_events": {
                "build": {
                    "0": function () {}
                },
                "extractData": {
                    "0": function () {}
                },
                "extractError": {
                    "0": function () {}
                }
            },
            "BUILD": function () {},
            "EXTRACT_DATA": function () {},
            "EXTRACT_ERROR": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "RestJson": {
            "_events": {
                "build": {
                    "0": function () {}
                },
                "extractData": {
                    "0": function () {}
                },
                "extractError": {
                    "0": function () {}
                }
            },
            "BUILD": function () {},
            "EXTRACT_DATA": function () {},
            "EXTRACT_ERROR": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "RestXml": {
            "_events": {
                "build": {
                    "0": function () {}
                },
                "extractData": {
                    "0": function () {}
                },
                "extractError": {
                    "0": function () {}
                }
            },
            "BUILD": function () {},
            "EXTRACT_DATA": function () {},
            "EXTRACT_ERROR": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        },
        "Query": {
            "_events": {
                "build": {
                    "0": function () {}
                },
                "extractData": {
                    "0": function () {}
                },
                "extractError": {
                    "0": function () {}
                }
            },
            "BUILD": function () {},
            "EXTRACT_DATA": function () {},
            "EXTRACT_ERROR": function () {},
            "constructor": function () {},
            "listeners": function () {},
            "on": function () {},
            "onAsync": function () {},
            "removeListener": function () {},
            "removeAllListeners": function () {},
            "emit": function () {},
            "callListeners": function () {},
            "addListeners": function () {},
            "addNamedListener": function () {},
            "addNamedAsyncListener": function () {},
            "addNamedListeners": function () {},
            "addListener": function () {}
        }
    },
    "Request": function () {},
    "Response": function () {},
    "ResourceWaiter": function () {},
    "ParamValidator": function () {},
    "events": {
        "_events": function () {},
        "constructor": function () {},
        "listeners": function () {},
        "on": function () {},
        "onAsync": function () {},
        "removeListener": function () {},
        "removeAllListeners": function () {},
        "emit": function () {},
        "callListeners": function () {},
        "addListeners": function () {},
        "addNamedListener": function () {},
        "addNamedAsyncListener": function () {},
        "addNamedListeners": function () {},
        "addListener": function () {}
    },
    "XHRClient": function () {},
    "CloudWatch": function () {},
    "CloudWatchLogs": function () {},
    "CognitoIdentity": function () {return {"getId": function(){}, "getOpenIdToken": function(){}}},
    "CognitoSync": function () {},
    "DynamoDB": function () {},
    "EC2": function () {},
    "ElasticTranscoder": function () {},
    "Kinesis": function () {},
    "Lambda": function () {},
    "MachineLearning": function () {},
    "MobileAnalytics": function () {},
    "OpsWorks": function () {},
    "S3": function () {},
    "SNS": function () {},
    "SQS": function () {},
    "STS": function () {}
}

var gapi = {
    "auth2": {
      "GoogleUser": {"isSignedIn": function(){},
                     "getBasicProfile": function(){return {"getId": function(){},
                                                           "getName": function(){},
                                                           "getImageUrl": function(){},
                                                           "getEmail": function(){}
                                                           }}},
      "init": function(){
              return {"currentUser": {"listen": function(){},
              "get": function(){
                return {"getAuthResponse": function(){
                  return {"id_token": ""}}}}}}},
      "getAuthInstance": function(){},
      },
    "load": function () {},
    "platform": {
        "go": function () {}
    },
    "_pl": {},
    "additnow": {
        "go": function () {},
        "render": function () {}
    },
    "backdrop": {
        "go": function () {},
        "render": function () {}
    },
    "blogger": {
        "go": function () {},
        "render": function () {}
    },
    "comments": {
        "go": function () {},
        "render": function () {}
    },
    "commentcount": {
        "go": function () {},
        "render": function () {}
    },
    "community": {
        "go": function () {},
        "render": function () {}
    },
    "follow": {
        "go": function () {},
        "render": function () {}
    },
    "page": {
        "go": function () {},
        "render": function () {}
    },
    "person": {
        "go": function () {},
        "render": function () {}
    },
    "playreview": {
        "go": function () {},
        "render": function () {}
    },
    "plus": {
        "go": function () {},
        "render": function () {}
    },
    "plusone": {
        "go": function () {},
        "render": function () {}
    },
    "post": {
        "go": function () {},
        "render": function () {}
    },
    "reportabuse": {
        "go": function () {},
        "render": function () {}
    },
    "savetodrive": {
        "go": function () {},
        "render": function () {}
    },
    "savetowallet": {
        "go": function () {},
        "render": function () {}
    },
    "shortlists": {
        "go": function () {},
        "render": function () {}
    },
    "signin2": {
        "go": function () {},
        "render": function () {}
    },
    "udc_webconsentflow": {
        "go": function () {},
        "render": function () {}
    },
    "visibility": {
        "go": function () {},
        "render": function () {}
    },
    "youtube": {
        "go": function () {},
        "render": function () {}
    },
    "ytsubscribe": {
        "go": function () {},
        "render": function () {}
    },
    "zoomableimage": {
        "go": function () {},
        "render": function () {}
    },
    "photocomments": {
        "go": function () {},
        "render": function () {}
    },
    "hangout": {
        "go": function () {},
        "render": function () {}
    },
    "sharetoclassroom": {
        "go": function () {},
        "render": function () {}
    },
    "interactivepost": {
        "go": function () {},
        "render": function () {}
    },
    "recobar": {
        "go": function () {},
        "render": function () {}
    },
    "autocomplete": {
        "go": function () {},
        "render": function () {}
    },
    "profile": {
        "go": function () {},
        "render": function () {}
    },
    "signin": {
        "go": function () {},
        "render": function () {}
    },
    "share": {
        "go": function () {},
        "render": function () {}
    }
}