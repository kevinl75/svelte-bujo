import { page } from "vitest/browser";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import App from "../src/App.svelte";

describe("App.svelte", () => {
	it("should render h1", async () => {
		render(App);

		const heading = page.getByRole("heading", { level: 2 });
		await expect.element(heading).toBeInTheDocument();
	});
});
