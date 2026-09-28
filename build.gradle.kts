@file:OptIn(org.jetbrains.kotlin.gradle.ExperimentalWasmDsl::class)

import org.jetbrains.kotlin.gradle.targets.jvm.KotlinJvmTarget

plugins {
    kotlin("multiplatform") version "2.2.0"
    id("com.android.library") version "8.7.3"
}

kotlin {
    jvm()
    androidTarget()
    macosArm64()
    linuxX64()
    linuxArm64()
    mingwX64()
    js(IR) {
        nodejs()
        binaries.executable()
        browser {
            testTask {
                enabled = false
            }
        }
    }
    wasmJs {
        nodejs()
        binaries.executable()
    }

    macosArm64 {
        binaries {
            executable()
            framework {
                baseName = "HelloPlatform"
            }
            staticLib()
        }
    }

    linuxX64 {
        binaries {
            executable()
            sharedLib()
        }
    }

    linuxArm64 {
        binaries {
            executable()
            sharedLib()
        }
    }

    mingwX64 {
        binaries {
            executable()
            sharedLib()
        }
    }
}

android {
    namespace = "dev.tennarrates.helloplatform"
    compileSdk = 35
    defaultConfig {
        minSdk = 24
    }
}

tasks.register<JavaExec>("run") {
    group = "execution"
    description = "Runs the JVM main"
    mainClass.set("GreetKt")
    val jvmTarget = kotlin.targets.named<KotlinJvmTarget>("jvm").get()
    val main = jvmTarget.compilations.named("main").get()
    classpath = main.output.allOutputs + main.runtimeDependencyFiles
}