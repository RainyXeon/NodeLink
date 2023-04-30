/*
Any of the settings below can be disabled by setting them to false.

threshold: 5000 = 5 seconds
playerUpdateInterval: 5000 = 5 seconds
statsInterval: 5000 = 5 seconds
autoUpdate: [ beta? autoUpdate?, interval, [tar, zip] ]
*/

export default {
  version: {
    major: '1',
    minor: '8',
    patch: '1',
    preRelease: 'beta'
  },
  server: {
    port: 2333,
    password: 'youshallnotpass'
  },
  options: {
    threshold: 10000,
    playerUpdateInterval: false,
    statsInterval: false,
    autoUpdate: [ true, 360000, 'tar', true ],
    maxResults: 20,
    maxPlaylistSize: 20
  },
  debug: {
    pandoraInterval: true,
    innertube: true,
    websocket: {
      connect: true,
      disconnect: true,
      resume: true,
      failedResume: true
    },
    request: {
      enabled: true,
      errors: true,
      showBody: true,
      showHeaders: true,
      showParams: true
    },
    track: {
      start: true,
      end: true,
      exception: true,
      stuck: true
    },
    sources: {
      loadtrack: {
        request: true,
        results: true,
        exception: true
      },
      search: {
        request: true,
        results: true,
        exception: true
      }
    }
  },
  search: {
    defaultSearchSource: 'youtube',
    sources: {
      youtube: true,
      youtubeMusic: true,
      spotify: true,
      deezer: true,
      bandcamp: true,
      http: true,
      local: true,
      pandora: true,
      soundcloud: {
        enabled: false,
        clientId: 'YOUR_CLIENT_ID'
      }
    }
  },
  filters: {
    enabled: true,
    threads: 4,
    list: {
      volume: true,
      equalizer: true,
      karaoke: true,
      timescale: true,
      tremolo: true,
      vibrato: true,
      rotation: true,
      distortion: true,
      channelMix: true,
      lowPass: true
    }
  }
}