
(defmacro ->
  "method chaining."
  [& operations]
  (reduce
   (fn [form operation]
     (cons (first operation)
           (cons form (rest operation))))
   (first operations)
   (rest operations)))

(let [
      gulp (require :gulp)
      plugins ((require :gulp-load-plugins))
      notify (.-notify plugins)
      no-convert "!./**/{node_modules|jspm_packages}/**"
      src {
           :wisp ["./src/**/*.wisp" no-convert]
           }
      dest "dist"
      ]


  (.task gulp :default [:wisp :watch])

  (.task gulp :watch
         (fn []
           (do
             (.watch gulp (.-wisp src) [:wisp])
             )
           ))

  (.task gulp :serve
         (fn []
           (->
            (.src gulp "./")
            (.pipe (.webserver plugins {:livereload true, :directoryListing false}))
            )))


  (.task gulp :wisp
         (fn []
           (->
            (.src gulp (.-wisp src))
            (.pipe (.plumber plugins
                             {:errorHandler (.onError notify
                                                      {:title "task: wisp"
                                                       :message "Error: <%= error.message %>"})}))
            (.pipe (.newer plugins {:dest "./" :ext ".min.js"}))
            (.pipe (.wisp plugins))
            (.pipe (.dest gulp dest))
            (.pipe (.uglify plugins))
            (.pipe (.rename plugins {:extname ".min.js"}))
            (.pipe (.dest gulp dest))
            )))

)
