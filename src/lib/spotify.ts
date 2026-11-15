export interface SpotifyTrack {
  title: string;
  artist: string;
  album: string;
  coverUrl?: string;
  spotifyUrl?: string;
}

export type SpotifyResponse =
  | {
      status: "playing";
      track: SpotifyTrack;
      is_playing: true;
    }
  | {
      status: "idle";
      track: null;
      is_playing: false;
    }
  | {
      status: "unavailable";
      reason: "not_configured";
    }
  | {
      status: "error";
      code: "unauthorized" | "rate_limited" | "upstream_error";
    };
