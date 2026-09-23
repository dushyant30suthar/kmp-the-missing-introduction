plugins {
    kotlin("multiplatform")
    id("com.android.library")
}

kotlin {
    jvm()
    js { nodejs() }
    macosArm64()
    linuxX64()
    linuxArm64()
    iosArm64 {
        binaries {
            framework { }
        }
    }
    iosSimulatorArm64 {
        binaries {
            framework { }
        }
    }
    androidTarget()
}

android {
    namespace = "com.tennarrates.hello.greeting"
    compileSdk = 36
    defaultConfig {
        minSdk = 24
    }
}