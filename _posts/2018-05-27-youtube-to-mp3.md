---
priority: 0.8
title: YouTube to MP3
description: A program that simplifies the process of downloading and converting Youtube videos to MP3 files from the command-line
keywords: "youtube, mp3, converter, command-line, terminal, bash, cli, itunes, python, project, blog, github"
date: 2018-05-27
categories: blog project
options: readme
image: yt2mp3.png
repo: yt2mp3
tags:
  - Python
  - YouTube
  - MP3
  - Command-line
  - Bash
  - Projects
---

<p class="badges">
<!-- CI Status -->
  <a href="https://travis-ci.org/tterb/yt2mp3"><img src="https://travis-ci.org/tterb/yt2mp3.svg?branch=master" alt="Build Status"/></a>
  <!--Project version-->
  <a href="https://pypi.python.org/pypi/yt2mp3/"><img src="https://img.shields.io/pypi/v/yt2mp3.svg" alt="PyPi Version"/></a>
  <!-- CodeCov -->
  <a href="https://codecov.io/gh/tterb/yt2mp3"><img src="https://codecov.io/gh/tterb/yt2mp3/branch/master/graph/badge.svg"/></a>
  <!-- Docs Status -->
  <a href='https://yt2mp3.readthedocs.io/en/latest/?badge=latest'><img src='https://readthedocs.org/projects/yt2mp3/badge/?version=latest' alt='Documentation Status'/></a>
  <!-- Python version -->
  <a href="https://pypi.python.org/pypi/yt2mp3/"><img src="https://pypip.in/py_versions/yt2mp3/badge.svg" alt="PyPI Python Versions"/></a>
  <!-- <a href="http://pepy.tech/badge/yt2mp3"><img src="http://pepy.tech/badge/yt2mp3" alt="Downloads"/></a> -->
  <!--License-->
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"/></a>
</p>  

<p align="center">
  <img src="https://cdn.rawgit.com/tterb/yt2mp3/d96b8c70/docs/images/terminal.svg" width="750"/>
</p>

## Description  
This program simplifies the process of searching, downloading and converting Youtube videos to MP3 files from the command-line. All you need is the video URL or the name of the artist/track you're looking for.  
The program will attempt to retrieve data for a song matching the provided input by querying the iTunes API and use the data to find a corresponding YouTube video, if a URL is not provided. The video will then be downloaded, converted, and the gathered data will be used to populate the metadata of the MP3.  
Once finished, the resulting MP3 file will be saved to your *Downloads* directory, with the following file-structure `Music/{artist}/{track}.mp3`.  

***Note:*** If a URL is provided and no match is found for the song data, the program will prompt the user for the track/artist and the YouTube thumbnail will be used as the album artwork.  
## Getting Started

### Prerequisites  
The program only requires that you have Python 3.4+ and [ffmpeg](https://www.ffmpeg.org/) or [libav](https://www.libav.org/) installed. For more information, check out the [additional setup](https://yt2mp3.readthedocs.io/en/latest/additional_setup.html).

### Install  
You can install the program with the following command:  
```sh
$ pip install yt2mp3
```

## Usage  
The program can be executed via the as follows:  
```sh
$ yt2mp3 [-options]
```

#### Options:  
 
|-------------------|-------------------------------------------------------|  
| `-t, --track`     | Specify the track name query                          |  
| `-a, --artist`    | Specify the artist name query                         |  
| `-u, --url`       | Specify a Youtube URL or ID                           |  
| `-p, --playlist`  | Specify a Youtube playlist URL or ID                  |  
| `-o, --overwrite` | Overwrite the file if one exists in output directory  |  
| `-r, --resolution`| Specify the resolution for the cover-art              |  
| `-q, --quiet`     | Suppress program command-line output                  |  
| `-v, --verbose`   | Display a command-line progress bar                   |  
| `--version`       | Show the version number and exit                      |  
| `-h, --help`      | Display information on usage and functionality        |  

***Note:*** Displaying the progress bar with the `-v, --verbose` flag currently has a significant impact on download performance, due to [#180](https://github.com/nficano/pytube/issues/180).  

------  

## Documentation  
Further documentation is available on [Read The Docs](https://yt2mp3.readthedocs.io/en/latest/)

------  

## Development  
If you'd like to contribute to the project, you can download and install the program with the following commands:  

```sh
# Clone the repository / most up to date is on saftyBranch
$ git clone https://github.com/tterb/yt2mp3

# Navigate to the directory
$ cd yt2mp3

# Install program dependencies
$ pip install -r requirements.txt
```

<br>  

-----