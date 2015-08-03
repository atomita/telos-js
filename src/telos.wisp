(ns atomita.js.telos.main
  (:require [util]
            [wildemitter]
            [minimatch]
            [atomita.js.telos.node]))

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
      def-channel :---default---
      ]
  (defn- telos
    [signaller opt]
    (if (instance? telos this)
      (let []
        (wildemitter.call this))
      (telos. signaller opt)))

  (util.inherits telos wildemitter)

  (extend telos.prototype
    {
     :broadcast
     (fn broadcast
       [channel]
       (if (not channel) (set! channel def-channel))
       )

     :add
     (fn add [node channels]
       (if (string? channels) (set! channels [channels]))
       (if (not (util.array? channels)) (set! channels []))
       (if (> 0 (channels.indexOf def-channel)) (channels.push def-channel))
       this)

     })
  
  (defn- string? [v]
    (or (instance? String v)
        (== "string" (typeof v))))
  
  (set! exports telos)
  )
