expect fun platformName(): String

fun hello(): String = "Hello, ${platformName()}!"

fun main() {
    println(hello())
}