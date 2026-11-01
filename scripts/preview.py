"""Serve the local portfolio preview without caching edited pages or assets."""

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class PreviewHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        # Always return the current file, even when the browser has an old copy.
        for header in ("If-Modified-Since", "If-None-Match"):
            del self.headers[header]
        return super().send_head()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=8766)
    args = parser.parse_args()
    document_root = Path(__file__).resolve().parents[1] / "docs"
    handler = partial(PreviewHandler, directory=str(document_root))
    with ThreadingHTTPServer(("127.0.0.1", args.port), handler) as server:
        print(f"Portfolio preview: http://127.0.0.1:{args.port}/", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
