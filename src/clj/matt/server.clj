(ns matt.server
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.util.response :as resp]))

(defroutes main
           (route/resources "/")
           (GET "*" [] (resp/resource-response "index.html" {:root "public"})))