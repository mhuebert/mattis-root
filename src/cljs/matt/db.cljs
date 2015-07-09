(ns matt.db)

#_(def dynamo-db-arn "arn:aws:dynamodb:us-east-1:558203976881:table/matt-website")

#_(def dynamo

  (js/AWS.DynamoDB. (clj->js {})))

#_(defn init
  []
  (prn "Connecting to db"))