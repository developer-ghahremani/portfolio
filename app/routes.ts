import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("./components/layouts/main/index.tsx", [index("./routes/home.tsx")]),
] satisfies RouteConfig;
