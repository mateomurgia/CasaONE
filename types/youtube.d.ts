declare namespace YT {
  interface PlayerEvent {
    target: Player;
  }

  interface Player {
    playVideo(): void;
    pauseVideo(): void;
    setVolume(volume: number): void;
    getPlayerState(): number;
    destroy(): void;
    new (
      elementId: string,
      options: {
        videoId: string;
        playerVars?: Record<string, unknown>;
        events?: {
          onReady?: (event: PlayerEvent) => void;
          onStateChange?: (event: PlayerEvent) => void;
        };
      }
    ): Player;
  }
}
