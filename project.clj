(defproject matt "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.0"]
                 [secretary "1.2.3"]
                 [compojure "1.3.4"]
                 [ring/ring-core "1.4.0-RC2"]
                 [kibu/pushy "0.3.1"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]
            [lein-cljs-externs "0.1.0"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:ring-handler "matt.server/main" }

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/cljs"]

                        :compiler     {:main                 matt.core
                                       :output-to            "resources/public/js/compiled/app.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :asset-path           "js/compiled/out"
                                       :source-map-timestamp true}}

                       {:id           "min"
                        :source-paths ["src/cljs"]
                        :extern-gen   {:output-to "resources/private/js/externs.js"}
                        :compiler     {:main          matt.core
                                       :output-to     "resources/public/js/compiled/app.js"
                                       :output-dir           "resources/public/js/compiled/out-min"
                                       :source-map "resources/public/js/compiled/app.js.map"
                                       :optimizations :advanced
                                       :pretty-print  false
                                       :externs ["resources/private/js/aws-sdk-externs.js"]}}]})
