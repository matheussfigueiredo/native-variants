/* eslint-disable @typescript-eslint/no-unused-vars */

type Config = {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    neutrals: Record<string, string>;
    status: Record<string, string>;
    gradients: Record<string, string>;
    others: Record<string, string>;
  };
  breakpoints: {
    "iphone-se": 375;
    "iphone-mini": 375;
    "iphone-regular": 390;
    "iphone-pro": 390;
    "iphone-pro-max": 428;
    "ipad-mini": 768;
    "ipad-pro": 1024;
    "google-pixel": 393;
    "samsung-galaxy": 360;
    "samsung-note": 414;
    "samsung-fold": 840;
  };
  typography: {
    fontSize: Record<string, string>;
    lineHeight: Record<string, string>;
    fontWeight: Record<string, string>;
    letterSpacing: Record<string, string>;
  };
  tokens: {
    border: Record<string, string>;
    radius: Record<string, string>;
    spacing: Record<string, string>;
    size: Record<string, string>;
    zIndex: Record<string, string>;
    shadows: Record<string, string>;
  };
};

const defineConfig = (params: Config) => {};
