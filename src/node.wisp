(ns atomita.js.telos.node)

(defmacro ->
  "method chaining."
  [& operations]
  (reduce
   (fn [form operation]
     (cons (first operation)
           (cons form (rest operation))))
   (first operations)
   (rest operations)))

