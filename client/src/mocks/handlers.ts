import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", () => {
    return HttpResponse.json({ name: "Taro" }, { status: 200 });
  }),
];
