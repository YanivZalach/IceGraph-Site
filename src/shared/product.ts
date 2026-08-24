export const LIVE_DEMO_URL = "https://yanivzalach.github.io/IceGraph/";
export const GITHUB_URL = "https://github.com/YanivZalach/IceGraph";
export const DOCS_URL = "https://yanivzalach.github.io/IceGraph/docs";
export const DOCKER_HUB_URL = "https://hub.docker.com/r/yanivzalach/icegraph";
export const PYPI_URL = "https://pypi.org/project/icegraph-client/";
export const ROADMAP_URL = "https://github.com/users/YanivZalach/projects/3";

export const getProductMediaUrl = (filename: string): string =>
  `${import.meta.env.BASE_URL}media/product/${filename}`;
