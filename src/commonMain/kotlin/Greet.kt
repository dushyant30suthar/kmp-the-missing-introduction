expect fun platformName(): String

fun greet(): String = "Hello from ${platformName()}"

fun main() {
    println(greet())
}