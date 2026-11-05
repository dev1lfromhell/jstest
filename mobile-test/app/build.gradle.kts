plugins { id("com.android.application") }

android {
    namespace = "dev.lastbastion.glassblocks.preview"
    compileSdk = 35
    defaultConfig {
        applicationId = "dev.lastbastion.glassblocks.preview"
        minSdk = 24
        targetSdk = 35
        versionCode = 15
        versionName = "1.5-preview"
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
