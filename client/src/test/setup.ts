import "@testing-library/jest-dom";
import { server } from "./server";

// 全テスト前に MSW サーバーを起動
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
