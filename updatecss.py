#!/usr/bin/python
#
# Update CSS via Python sass module
#
# Note: This script now uses the libsass Python module.

import codecs
import os
import sass

for entry in os.listdir("."):
    if entry[0] in (".", "_"):
        continue
    base, ext = os.path.splitext(entry)
    if ext != ".scss":
        continue
    try:
        css_content = sass.compile_file(entry, output_style=sass.SASS_STYLE_COMPRESSED)
        # css_content = sass.compile(filename=entry, output_style='compressed') # either nested or compressed
        #with open(os.path.join("static", base + ".css"), "w") as output_fd:
        with codecs.open(os.path.join("static", base + ".css"),'w',encoding='utf8') as output_fd:
            output_fd.write(css_content)
    except Exception, e:
        print "Error processing %s: %s" % (entry, e)

