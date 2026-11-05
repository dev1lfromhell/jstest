# Glass Cascade Android preview (not a Godot export)

This is a **temporary Android WebView testing build** of the browser prototype at
`block-forge-touch-test/v15.html`. The GitHub Action copies this HTML into
the APK, so it works offline and does not require a live website.

Its purpose is early Android touch/audio testing while the complete Godot
project is being validated separately. It is **not** the eventual Google Play
release. This build uses a debug signing key, contains no ad SDK or analytics,
and has no networking permission. No user data leaves the phone.

The Actions artifact `glass-blocks-android-debug` contains the debug APK.
For publication, replace this wrapper with the verified Godot project or
a deliberate native app architecture, integrate compliant ad SDK/consent,
and use an app-specific production signing key.
