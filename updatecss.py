#!/usr/bin/env python3
#
# Update CSS via Python sass module
#
# Note: This script now uses the libsass Python module.

import codecs
import os
import sass

for entry in os.scandir("."):
    if entry.name[0] in (".", "_"):
        continue
    base, ext = os.path.splitext(entry.name)
    if ext != ".scss":
        continue
    try:
        # Use "nested" instead of "compressed" for readable output.
        css_content = sass.compile(filename=entry.name, output_style="compressed")
        output_filename = os.path.join("static", base + ".css")
        with open(output_filename, "w", encoding="utf-8") as output_fd:
            output_fd.write(css_content)
    except Exception as e:
        print("Error processing %s: %s" % (entry, e))
