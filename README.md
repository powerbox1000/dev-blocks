# dev-blocks
A modification of Scratch 3.0

## Channels

Name | URL | Safe? (see [this question](#safe))
-----|----- | ------------------
Stable (production)| https://learn-devtime.web.app/blocks/ | √
Stable (Develop) | https://powerbox1000.github.io/dev-blocks | √
Beta | ~~[https://powerbox1000.github.io/dev-blocks](https://powerbox1000.github.io/dangerzone/dev-blocks?warn=false)~~ | X

## URL parameters

The URLs in URL parameters should be [URI encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

| URL parameter | Description |
| ------------- | ----------- |
| `extension=[URL]` or `url=[URL]` | Load an extension dynamically (more info on making an extension [here](https://scratch.mit.edu/discuss/topic/277217/)). |
| `width=[NUMBER]` | Custom stage width (default 480). |
| `height=[NUMBER]` | Custom stage width (default 360). |
| `username=[STRING]` | Set a custom username (default "username") |
| `cloud_host=[URL]` | Use a custom cloud host instead of the default behaviour, which is to save cloud variables to localStorage. Note that for some reason, Scratch doesn't want you to include the protocol (ie, omit `ws://` or `wss://`). |
| `compatibility_mode=false` | Disables compatibility mode, which forces projects to run at 30 fps. |
| `limits=false` | Removes many limits, such as for clones and lists. Note that a few limits, like the number of cloud variables, are removed by default in this mod. |
| `load_plugin=[URL]` | Loads the given script into the web page. This could be used for loading userscripts that edit the Scratch editor. They're called "plugins" here to skirt around Scratch's userscript policy. |

In addition, you can finish the URL with a hash followed by a project ID to load a project from the Scratch website or a URI encoded URL to a project file.

For example, https://learn-devtime.web.app/blocks/?url=https://sheeptester.github.io/javascripts/utilities.js&width=640&height=360 will load [sheeptester](https://github.com/sheeptester)'s [Utilities extension](https://scratch.mit.edu/discuss/topic/306317/) and use a 16:9 stage size.

## Releases (stable)
Version | Description | Latest?
-------- | ----------- | ---------
0.1 | Initial release | √

## FAQ
<a name="safe"><h3>What does "Safe" mean?</h3></a>
Safe just means that is it has been tested by at least 4 people in the Devtime EDU Team. Just because it says "not safe" does not mean it isn't safe, it just means not everyone has tested it yet.
