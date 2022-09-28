# noVNC package repack

1. noVNC client from https://github.com/novnc/noVNC version 1.3.0
2. Added paste clipboard support

## Known issues

1. noVNC 1.3.0 dropped support Internet Explorer.
2. Firefox still has partial support of navigator.clipboard.readText method. In version 103+ user can setup about:config: dom.events.asyncClipboard.readText option = true
