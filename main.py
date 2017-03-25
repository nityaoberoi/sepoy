#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import os
import subprocess
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')

@app.route('/bio/')
def bio():
    return render_template('bio.html')

@app.route('/shows/')
def shows():
    return render_template('shows.html')

@app.route('/gallery/')
def gallery():
    return render_template('gallery.html')

@app.route('/videos/')
def videos():
    return render_template('videos.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')


if __name__ == "__main__":
    p = None
    try:
        if not os.getenv('COMPASSB', False):
            # TODO: In Python 3.0 use "with"
            p = subprocess.Popen(['compass', 'watch', 'static'])
            os.environ['COMPASSB'] = 'Running'
    except OSError:
        os.environ['COMPASSB'] = 'Failed'
    finally:
        try:
          app.run(debug=True)
        except:
            if p:
                p.kill()
            raise
