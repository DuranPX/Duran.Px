import type { SpotifyResponse } from "../lib/spotify";

interface ApiError {
  error: "not_found" | "method_not_allowed";
}

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

function jsonResponse(body: SpotifyResponse | ApiError, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers,
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname !== "/api" && !pathname.startsWith("/api/")) {
      return jsonResponse({ error: "not_found" }, 404);
    }

    if (pathname !== "/api/spotify") {
      return jsonResponse({ error: "not_found" }, 404);
    }

    if (request.method !== "GET") {
      return new Response(JSON.stringify({ error: "method_not_allowed" }), {
        status: 405,
        headers: {
          ...headers,
          Allow: "GET",
        },
      });
    }

    return jsonResponse(
      {
        status: "unavailable",
        reason: "not_configured",
      },
      503,
    );
  },
};
