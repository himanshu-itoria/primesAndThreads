Last login: Mon Aug  7 10:14:15 on console
You have new mail.
[oh-my-zsh] Would you like to update? [Y/n] y

Updating Oh My Zsh
master

Features:

 - 4188b22 [agnoster]  Add git tag to prompt (#8417)
 - e564793 [fino-time] Add conda environment (#11785)

Bug fixes:

 - 6925c44 [aliases]   Rename acs to als in script help

You can see the changelog with `omz changelog`
         __                                     __   
  ____  / /_     ____ ___  __  __   ____  _____/ /_  
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \ 
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / / 
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/  
                        /____/                       

Hooray! Oh My Zsh has been updated!

To keep up with the latest news and updates, follow us on Twitter: https://twitter.com/ohmyzsh
Want to get involved in the community? Join our Discord: https://discord.gg/ohmyzsh
Get your Oh My Zsh swag at: https://shop.planetargon.com/collections/oh-my-zsh
➜  ~ 
➜  ~ xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" in System Settings to install updates
➜  ~ xcode-select -p
/Library/Developer/CommandLineTools
➜  ~ brew install rbenv ruby-build
Running `brew update --auto-update`...
==> Auto-updated Homebrew!
Updated 2 taps (homebrew/core and homebrew/cask).
==> New Formulae
lune                       lxi-tools                  python-certifi
==> New Casks
crystalfetch               hovrly                     luniistore

You have 1 outdated formula installed.

==> Fetching dependencies for rbenv: m4, autoconf, pkg-config and ruby-build
==> Fetching m4
==> Downloading https://ghcr.io/v2/homebrew/core/m4/manifests/1.4.19
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/m4/blobs/sha256:11308abe8d607be
######################################################################### 100.0%
==> Fetching autoconf
==> Downloading https://ghcr.io/v2/homebrew/core/autoconf/manifests/2.71
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/autoconf/blobs/sha256:a3d366c98
######################################################################### 100.0%
==> Fetching pkg-config
==> Downloading https://ghcr.io/v2/homebrew/core/pkg-config/manifests/0.29.2_3
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/pkg-config/blobs/sha256:3ff612c
######################################################################### 100.0%
==> Fetching ruby-build
==> Downloading https://ghcr.io/v2/homebrew/core/ruby-build/manifests/20230717
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ruby-build/blobs/sha256:2280245
######################################################################### 100.0%
==> Fetching rbenv
==> Downloading https://ghcr.io/v2/homebrew/core/rbenv/manifests/1.2.0
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/rbenv/blobs/sha256:09bccc5974bd
######################################################################### 100.0%
==> Installing dependencies for rbenv: m4, autoconf, pkg-config and ruby-build
==> Installing rbenv dependency: m4
==> Pouring m4--1.4.19.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/m4/1.4.19: 13 files, 742.3KB
==> Installing rbenv dependency: autoconf
==> Pouring autoconf--2.71.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/autoconf/2.71: 71 files, 3.2MB
==> Installing rbenv dependency: pkg-config
==> Pouring pkg-config--0.29.2_3.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/pkg-config/0.29.2_3: 11 files, 676.2KB
==> Installing rbenv dependency: ruby-build
==> Pouring ruby-build--20230717.all.bottle.tar.gz
🍺  /opt/homebrew/Cellar/ruby-build/20230717: 584 files, 306.2KB
==> Installing rbenv
==> Pouring rbenv--1.2.0.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/rbenv/1.2.0: 35 files, 125.2KB
==> Running `brew cleanup rbenv`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Running `brew cleanup ruby-build`...
➜  ~ rbenv init
# Load rbenv automatically by appending
# the following to ~/.zshrc:

eval "$(rbenv init - zsh)"

➜  ~ ls -la
total 448
drwxr-x---+ 62 inito  staff   1984 Aug  7 10:47 .
drwxr-xr-x   7 root   admin    224 Jul 27 20:37 ..
-r--------   1 inito  staff      7 Jul  7 14:36 .CFUserTextEncoding
-rw-r--r--@  1 inito  staff  10244 Aug  1 19:22 .DS_Store
drwx------+ 31 inito  staff    992 Aug  5 16:29 .Trash
drwxr-xr-x   3 inito  staff     96 Aug  5 12:56 .cache
drwxr-xr-x@  3 inito  staff     96 Jul 24 10:55 .config
drwxr-xr-x   4 inito  staff    128 Jul 14 13:26 .gem
-rw-r--r--   1 inito  staff      0 Jul 14 12:41 .gitc
-rw-r--r--   1 inito  staff    280 Jul 27 20:17 .gitconfig
-rw-------   1 inito  staff     20 Jul 27 19:42 .lesshst
drwxr-xr-x   3 inito  staff     96 Jul 18 11:46 .local
drwxr-xr-x   5 inito  staff    160 Aug  5 12:54 .npm
drwxr-xr-x  23 inito  staff    736 Jul 24 10:54 .oh-my-zsh
-rw-r--r--   1 inito  staff    281 Jul 14 12:42 .profile
-rw-------@  1 inito  staff   2574 Jul 27 13:24 .psql_history
drwx------   6 inito  staff    192 Jul 29 16:08 .ssh
drwxr-xr-x   3 inito  staff     96 Jul 29 15:14 .vim
-rw-------   1 inito  staff  20240 Jul 29 15:20 .viminfo
drwxr-xr-x   5 inito  staff    160 Jul 17 19:31 .vscode
-rw-r--r--   1 inito  staff  49527 Aug  7 10:33 .zcompdump-Inito’s MacBook Pro-5.9
-rw-r--r--   1 inito  staff     43 Jul 14 10:28 .zprofile
-rw-------@  1 inito  staff  58465 Aug  7 10:47 .zsh_history
drwx------  29 inito  staff    928 Aug  6 20:34 .zsh_sessions
-rw-r--r--@  1 inito  staff   3937 Jul 24 11:01 .zshrc
drwxr-xr-x   2 inito  staff     64 Jul 17 10:29 1
drwx------@  4 inito  staff    128 Jul 28 10:11 Applications
drwxr-xr-x   2 inito  staff     64 Jul 17 10:29 Assignment
drwx------+  9 inito  staff    288 Jul 20 18:23 Desktop
drwx------+  3 inito  staff     96 Jul  7 14:36 Documents
drwx------+ 53 inito  staff   1696 Aug  5 12:52 Downloads
drwx------@ 86 inito  staff   2752 Jul 31 11:12 Library
drwx------   4 inito  staff    128 Jul 11 13:05 Movies
drwx------+  4 inito  staff    128 Jul 27 13:06 Music
drwx------+  4 inito  staff    128 Jul 14 14:37 Pictures
drwxr-xr-x+  4 inito  staff    128 Jul  7 14:36 Public
-rw-r--r--   1 inito  staff      0 Jul 14 18:06 RE
-rw-r--r--   1 inito  staff      6 Jul 13 12:55 abc
-rwxr-xr-x   1 inito  staff     55 Jul 13 18:27 abcd.sh
-rwxr-xr-x   1 inito  staff    232 Jul 14 12:01 as1.sh
drwxr-xr-x   6 inito  staff    192 Jul 17 09:30 assignments
drwxr-xr-x  20 inito  staff    640 Jul 29 15:45 bank_assessment
-rw-r--r--   1 inito  staff      0 Jul 29 13:17 doit.py
-rwxr-xr-x   1 inito  staff    615 Jul 29 16:07 doit.sh
-rwxr-xr-x   1 inito  staff    524 Jul 29 13:24 find_search.sh
drwxr-xr-x   4 inito  staff    128 Jul 27 20:27 firstone
drwxr-xr-x  25 inito  staff    800 Aug  4 12:21 htmlCourse
-rw-r--r--   1 inito  staff  20441 Jul 21 15:42 index.html
-rw-r--r--   1 inito  staff      0 Jul 29 14:33 jes.txt
-rw-r--r--   1 inito  staff    788 Jul 29 17:51 jet.sh
-rw-r--r--   1 inito  staff      0 Jul 29 14:42 jetkids.txt
drwxr-xr-x   5 inito  staff    160 Aug  5 16:57 js_assignments
drwxr-xr-x   8 inito  staff    256 Jul 17 17:49 linux_monday
-rwxr-xr-x   1 inito  staff      0 Jul 12 13:42 myjob.sh
-rw-r--r--   1 inito  staff     23 Jul 13 08:19 myscript.shexit
-rw-r--r--@  1 inito  staff     24 Jul 29 15:42 nav.txt
-rw-r--r--@  1 inito  staff      0 Jul 29 14:30 record,txt
drwxr-xr-x   5 inito  staff    160 Jul 21 02:38 rewrite_bank_assessment
drwxr-xr-x@ 11 inito  staff    352 Jul 28 17:45 sbi_inito
-rw-r--r--   1 inito  staff      0 Jul 29 14:38 sms.txt
drwxr-xr-x  37 inito  staff   1184 Jul 29 13:24 tensorflow
-rw-r--r--   1 inito  staff      0 Jul 12 12:59 xyz
➜  ~ vim .zshrc
➜  ~ touch ~/.zshrc
➜  ~ open ~/.zshrc
➜  ~ rbenv install -L 
1.8.5-p52
1.8.5-p113
1.8.5-p114
1.8.5-p115
1.8.5-p231
1.8.6
1.8.6-p36
1.8.6-p110
1.8.6-p111
1.8.6-p114
1.8.6-p230
1.8.6-p286
1.8.6-p287
1.8.6-p368
1.8.6-p369
1.8.6-p383
1.8.6-p388
1.8.6-p398
1.8.6-p399
1.8.6-p420
1.8.7-preview1
1.8.7-preview2
1.8.7-preview3
1.8.7-preview4
1.8.7
1.8.7-p17
1.8.7-p22
1.8.7-p71
1.8.7-p72
1.8.7-p160
1.8.7-p173
1.8.7-p174
1.8.7-p248
1.8.7-p249
1.8.7-p299
1.8.7-p301
1.8.7-p302
1.8.7-p330
1.8.7-p334
1.8.7-p352
1.8.7-p357
1.8.7-p358
1.8.7-p370
1.8.7-p371
1.8.7-p373
1.8.7-p374
1.8.7-p375
1.9.0-0
1.9.0-1
1.9.0-2
1.9.0-3
1.9.0-4
1.9.0-5
1.9.1-preview1
1.9.1-preview2
1.9.1-rc1
1.9.1-rc2
1.9.1-p0
1.9.1-p129
1.9.1-p243
1.9.1-p376
1.9.1-p378
1.9.1-p429
1.9.1-p430
1.9.1-p431
1.9.2-preview1
1.9.2-preview3
1.9.2-rc1
1.9.2-rc2
1.9.2-p0
1.9.2-p136
1.9.2-p180
1.9.2-p290
1.9.2-p318
1.9.2-p320
1.9.2-p326
1.9.2-p330
1.9.3-dev
1.9.3-preview1
1.9.3-rc1
1.9.3-p0
1.9.3-p105
1.9.3-p125
1.9.3-p194
1.9.3-p286
1.9.3-p327
1.9.3-p362
1.9.3-p374
1.9.3-p385
1.9.3-p392
1.9.3-p426
1.9.3-p429
1.9.3-p448
1.9.3-p484
1.9.3-p545
1.9.3-p547
1.9.3-p550
1.9.3-p551
2.0.0-dev
2.0.0-preview1
2.0.0-preview2
2.0.0-rc1
2.0.0-rc2
2.0.0-p0
2.0.0-p195
2.0.0-p247
2.0.0-p353
2.0.0-p451
2.0.0-p481
2.0.0-p576
2.0.0-p594
2.0.0-p598
2.0.0-p643
2.0.0-p645
2.0.0-p647
2.0.0-p648
2.1.0-dev
2.1.0-preview1
2.1.0-preview2
2.1.0-rc1
2.1.0
2.1.1
2.1.2
2.1.3
2.1.4
2.1.5
2.1.6
2.1.7
2.1.8
2.1.9
2.1.10
2.2.0-dev
2.2.0-preview1
2.2.0-preview2
2.2.0-rc1
2.2.0
2.2.1
2.2.2
2.2.3
2.2.4
2.2.5
2.2.6
2.2.7
2.2.8
2.2.9
2.2.10
2.3.0-dev
2.3.0-preview1
2.3.0-preview2
2.3.0
2.3.1
2.3.2
2.3.3
2.3.4
2.3.5
2.3.6
2.3.7
2.3.8
2.4.0-dev
2.4.0-preview1
2.4.0-preview2
2.4.0-preview3
2.4.0-rc1
2.4.0
2.4.1
2.4.2
2.4.3
2.4.4
2.4.5
2.4.6
2.4.7
2.4.8
2.4.9
2.4.10
2.5.0-dev
2.5.0-preview1
2.5.0-rc1
2.5.0
2.5.1
2.5.2
2.5.3
2.5.4
2.5.5
2.5.6
2.5.7
2.5.8
2.5.9
2.6.0-dev
2.6.0-preview1
2.6.0-preview2
2.6.0-preview3
2.6.0-rc1
2.6.0-rc2
2.6.0
2.6.1
2.6.2
2.6.3
2.6.4
2.6.5
2.6.6
2.6.7
2.6.8
2.6.9
2.6.10
2.7.0-dev
2.7.0-preview1
2.7.0-preview2
2.7.0-preview3
2.7.0-rc1
2.7.0-rc2
2.7.0
2.7.1
2.7.2
2.7.3
2.7.4
2.7.5
2.7.6
2.7.7
2.7.8
3.0.0-dev
3.0.0-preview1
3.0.0-preview2
3.0.0-rc1
3.0.0
3.0.1
3.0.2
3.0.3
3.0.4
3.0.5
3.0.6
3.1.0-dev
3.1.0-preview1
3.1.0
3.1.1
3.1.2
3.1.3
3.1.4
3.2.0-dev
3.2.0-preview1
3.2.0-preview2
3.2.0-preview3
3.2.0-rc1
3.2.0
3.2.1
3.2.2
3.3.0-dev
3.3.0-preview1
artichoke-dev
jruby-dev
jruby-1.7.2
jruby-1.7.5
jruby-1.7.6
jruby-1.7.7
jruby-1.7.8
jruby-1.7.9
jruby-1.7.10
jruby-1.7.11
jruby-1.7.12
jruby-1.7.13
jruby-1.7.14
jruby-1.7.15
jruby-1.7.16
jruby-1.7.16.1
jruby-1.7.16.2
jruby-1.7.17
jruby-1.7.18
jruby-1.7.19
jruby-1.7.20
jruby-1.7.20.1
jruby-1.7.21
jruby-1.7.22
jruby-1.7.23
jruby-1.7.24
jruby-1.7.25
jruby-1.7.26
jruby-1.7.27
jruby-9.0.0.0.pre1
jruby-9.0.0.0.pre2
jruby-9.0.0.0.rc1
jruby-9.0.0.0.rc2
jruby-9.0.0.0
jruby-9.0.1.0
jruby-9.0.3.0
jruby-9.0.4.0
jruby-9.0.5.0
jruby-9.1.0.0-dev
jruby-9.1.0.0
jruby-9.1.1.0
jruby-9.1.2.0
jruby-9.1.3.0
jruby-9.1.4.0
jruby-9.1.5.0
jruby-9.1.6.0
jruby-9.1.7.0
jruby-9.1.8.0
jruby-9.1.9.0
jruby-9.1.10.0
jruby-9.1.11.0
jruby-9.1.12.0
jruby-9.1.13.0
jruby-9.1.14.0
jruby-9.1.15.0
jruby-9.1.16.0
jruby-9.1.17.0
jruby-9.2.0.0-dev
jruby-9.2.0.0
jruby-9.2.1.0-dev
jruby-9.2.1.0
jruby-9.2.3.0
jruby-9.2.4.0
jruby-9.2.4.1
jruby-9.2.5.0
jruby-9.2.6.0
jruby-9.2.7.0
jruby-9.2.8.0
jruby-9.2.9.0
jruby-9.2.10.0
jruby-9.2.11.0
jruby-9.2.11.1
jruby-9.2.12.0
jruby-9.2.13.0
jruby-9.2.14.0
jruby-9.2.15.0
jruby-9.2.16.0
jruby-9.2.17.0
jruby-9.2.18.0
jruby-9.2.19.0
jruby-9.2.20.0
jruby-9.2.20.1
jruby-9.2.21.0
jruby-9.3.0.0
jruby-9.3.1.0
jruby-9.3.2.0
jruby-9.3.3.0
jruby-9.3.4.0
jruby-9.3.6.0
jruby-9.3.7.0
jruby-9.3.8.0
jruby-9.3.9.0
jruby-9.3.10.0
jruby-9.4.0.0
jruby-9.4.1.0
jruby-9.4.2.0
jruby-9.4.3.0
maglev-1.0.0
maglev-1.1.0-dev
maglev-2.0.0-dev
mruby-dev
mruby-1.0.0
mruby-1.1.0
mruby-1.2.0
mruby-1.3.0
mruby-1.4.0
mruby-1.4.1
mruby-2.0.0
mruby-2.0.1
mruby-2.1.0
mruby-2.1.1
mruby-2.1.2
mruby-3.0.0
mruby-3.1.0
mruby-3.2.0
picoruby-3.0.0
rbx-2.2.2
rbx-2.2.3
rbx-2.2.4
rbx-2.2.5
rbx-2.2.6
rbx-2.2.7
rbx-2.2.8
rbx-2.2.9
rbx-2.2.10
rbx-2.3.0
rbx-2.4.0
rbx-2.4.1
rbx-2.5.0
rbx-2.5.1
rbx-2.5.2
rbx-2.5.3
rbx-2.5.4
rbx-2.5.5
rbx-2.5.6
rbx-2.5.7
rbx-2.5.8
rbx-2.6
rbx-2.7
rbx-2.8
rbx-2.9
rbx-2.10
rbx-2.11
rbx-2.71828182
rbx-3.0
rbx-3.1
rbx-3.2
rbx-3.3
rbx-3.4
rbx-3.5
rbx-3.6
rbx-3.7
rbx-3.8
rbx-3.9
rbx-3.10
rbx-3.11
rbx-3.12
rbx-3.13
rbx-3.14
rbx-3.15
rbx-3.16
rbx-3.17
rbx-3.18
rbx-3.19
rbx-3.20
rbx-3.21
rbx-3.22
rbx-3.23
rbx-3.24
rbx-3.25
rbx-3.26
rbx-3.27
rbx-3.28
rbx-3.29
rbx-3.30
rbx-3.31
rbx-3.32
rbx-3.33
rbx-3.34
rbx-3.35
rbx-3.36
rbx-3.37
rbx-3.38
rbx-3.39
rbx-3.40
rbx-3.41
rbx-3.42
rbx-3.43
rbx-3.44
rbx-3.45
rbx-3.46
rbx-3.47
rbx-3.48
rbx-3.49
rbx-3.50
rbx-3.51
rbx-3.52
rbx-3.53
rbx-3.54
rbx-3.55
rbx-3.56
rbx-3.57
rbx-3.58
rbx-3.59
rbx-3.60
rbx-3.61
rbx-3.62
rbx-3.63
rbx-3.64
rbx-3.65
rbx-3.66
rbx-3.67
rbx-3.68
rbx-3.69
rbx-3.70
rbx-3.71
rbx-3.72
rbx-3.73
rbx-3.74
rbx-3.75
rbx-3.76
rbx-3.77
rbx-3.78
rbx-3.79
rbx-3.80
rbx-3.81
rbx-3.82
rbx-3.83
rbx-3.84
rbx-3.85
rbx-3.86
rbx-3.87
rbx-3.88
rbx-3.89
rbx-3.90
rbx-3.91
rbx-3.92
rbx-3.93
rbx-3.94
rbx-3.95
rbx-3.96
rbx-3.97
rbx-3.98
rbx-3.99
rbx-3.100
rbx-3.101
rbx-3.102
rbx-3.103
rbx-3.104
rbx-3.105
rbx-3.106
rbx-3.107
rbx-4.0
rbx-4.1
rbx-4.2
rbx-4.3
rbx-4.4
rbx-4.5
rbx-4.6
rbx-4.7
rbx-4.8
rbx-4.9
rbx-4.10
rbx-4.11
rbx-4.12
rbx-4.13
rbx-4.14
rbx-4.15
rbx-4.16
rbx-4.18
rbx-4.19
rbx-4.20
rbx-5.0
ree-1.8.7-2011.03
ree-1.8.7-2011.12
ree-1.8.7-2012.01
ree-1.8.7-2012.02
truffleruby-dev
truffleruby-1.0.0-rc10
truffleruby-1.0.0-rc11
truffleruby-1.0.0-rc12
truffleruby-1.0.0-rc13
truffleruby-1.0.0-rc14
truffleruby-1.0.0-rc15
truffleruby-1.0.0-rc16
truffleruby-1.0.0-rc2
truffleruby-1.0.0-rc3
truffleruby-1.0.0-rc5
truffleruby-1.0.0-rc6
truffleruby-1.0.0-rc7
truffleruby-1.0.0-rc8
truffleruby-1.0.0-rc9
truffleruby-19.0.0
truffleruby-19.1.0
truffleruby-19.2.0
truffleruby-19.2.0.1
truffleruby-19.3.0
truffleruby-19.3.0.2
truffleruby-19.3.1
truffleruby-20.0.0
truffleruby-20.1.0
truffleruby-20.2.0
truffleruby-20.3.0
truffleruby-21.0.0
truffleruby-21.1.0
truffleruby-21.2.0
truffleruby-21.2.0.1
truffleruby-21.3.0
truffleruby-22.0.0.2
truffleruby-22.1.0
truffleruby-22.2.0
truffleruby-22.3.0
truffleruby-22.3.1
truffleruby-23.0.0-preview1
truffleruby-23.0.0
truffleruby+graalvm-dev
truffleruby+graalvm-20.1.0
truffleruby+graalvm-20.2.0
truffleruby+graalvm-20.3.0
truffleruby+graalvm-21.0.0
truffleruby+graalvm-21.1.0
truffleruby+graalvm-21.2.0
truffleruby+graalvm-21.3.0
truffleruby+graalvm-22.0.0.2
truffleruby+graalvm-22.1.0
truffleruby+graalvm-22.2.0
truffleruby+graalvm-22.3.0
truffleruby+graalvm-22.3.1
truffleruby+graalvm-23.0.0-preview1
truffleruby+graalvm-23.0.0
➜  ~ rbenv install 3.2.2
To follow progress, use 'tail -f /var/folders/h4/fwpxmkl94yg2mvzmx9llcnr00000gn/T/ruby-build.20230807105757.32178.log' or pass --verbose
Downloading openssl-3.1.1.tar.gz...
-> https://dqw8nmjcqpjn7.cloudfront.net/b3aa61334233b852b63ddb048df181177c2c659eb9d4376008118f9c08d07674
Installing openssl-3.1.1...
Installed openssl-3.1.1 to /Users/inito/.rbenv/versions/3.2.2

Downloading ruby-3.2.2.tar.gz...
-> https://cache.ruby-lang.org/pub/ruby/3.2/ruby-3.2.2.tar.gz
Installing ruby-3.2.2...
ruby-build: using readline from homebrew
ruby-build: using libyaml from homebrew
Installed ruby-3.2.2 to /Users/inito/.rbenv/versions/3.2.2


NOTE: to activate this Ruby version as the new default, run: rbenv global 3.2.2
➜  ~ rbenv global 3.2.2
➜  ~ ruby -v
ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin22]
➜  ~ mkdir rubyLearning
➜  ~ cd rubyLearning 
➜  rubyLearning touch hello_world.rb
➜  rubyLearning code .
zsh: command not found: code
➜  rubyLearning . code
.: no such file or directory: code
➜  rubyLearning code.
zsh: command not found: code.
➜  rubyLearning ruby hello_world.rb
hello there
➜  rubyLearning cd ..
➜  ~ ls
1                       abcd.sh                 js_assignments
Applications            as1.sh                  linux_monday
Assignment              assignments             myjob.sh
Desktop                 bank_assessment         myscript.shexit
Documents               doit.py                 nav.txt
Downloads               doit.sh                 record,txt
Library                 find_search.sh          rewrite_bank_assessment
Movies                  firstone                rubyLearning
Music                   htmlCourse              sbi_inito
Pictures                index.html              sms.txt
Public                  jes.txt                 tensorflow
RE                      jet.sh                  xyz
abc                     jetkids.txt
➜  ~ cd js_assignments 
➜  js_assignments ls
generatePrimes webScraping    workers_primes
➜  js_assignments cd workers_primes 
➜  workers_primes git:(main) ✗ ls
index.html     main.js        primeWorker.js
➜  workers_primes git:(main) ✗ cd ..
➜  js_assignments ls
generatePrimes webScraping    workers_primes
➜  js_assignments cd workers_primes             
➜  workers_primes git:(main) ✗ mkdir multiple_threads
➜  workers_primes git:(main) ✗ mv index.html main.js primeWorker.js multiple_threads
➜  workers_primes git:(main) ✗ ls
multiple_threads
➜  workers_primes git:(main) ✗ cd multiple_threads 
➜  multiple_threads git:(main) ✗ ls
index.html     main.js        primeWorker.js
➜  multiple_threads git:(main) ✗ cd ..
➜  workers_primes git:(main) ✗ mkdir async_scraping
➜  workers_primes git:(main) ✗ cd ..
➜  js_assignments ls
generatePrimes webScraping    workers_primes
➜  js_assignments mv webScraping workers_primes 
➜  js_assignments ls
generatePrimes workers_primes
➜  js_assignments cd workers_primes 
➜  workers_primes git:(main) ✗ ls
async_scraping   multiple_threads webScraping
➜  workers_primes git:(main) ✗ rm -rf async_scraping 
➜  workers_primes git:(main) ✗ ls
multiple_threads webScraping
➜  workers_primes git:(main) ✗ git add .
fatal: CRLF would be replaced by LF in webScraping/action.txt
➜  workers_primes git:(main) ✗ ls
multiple_threads webScraping
➜  workers_primes git:(main) ✗ cd webScraping 
➜  webScraping git:(main) ✗ git add .
fatal: CRLF would be replaced by LF in webScraping/action.txt
➜  webScraping git:(main) ✗ cd we
cd: no such file or directory: we
➜  webScraping git:(main) ✗ ls
action.txt           index.js             prime_async_await.js
genres.css           node_modules         primed.js
horror.jpg           package-lock.json    romance.txt
horror.txt           package.json
➜  webScraping git:(main) ✗ rm -rf action.txt horror.j
➜  webScraping git:(main) ✗ ls
genres.css           node_modules         primed.js
horror.jpg           package-lock.json    romance.txt
horror.txt           package.json
index.js             prime_async_await.js
➜  webScraping git:(main) ✗ git add .                 
fatal: CRLF would be replaced by LF in webScraping/horror.txt
➜  webScraping git:(main) ✗ rm -rf horror.txt 
➜  webScraping git:(main) ✗ rm -rf horror.jpg 
➜  webScraping git:(main) ✗ ls
genres.css           package-lock.json    primed.js
index.js             package.json         romance.txt
node_modules         prime_async_await.js
➜  webScraping git:(main) ✗ rm -rf romance.txt 
➜  webScraping git:(main) ✗ ls                
genres.css           package-lock.json    primed.js
index.js             package.json
node_modules         prime_async_await.js
➜  webScraping git:(main) ✗ git add .         
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/node/README.md
➜  webScraping git:(main) ✗ cd ..
➜  workers_primes git:(main) ✗ git config --global core.eol lf
➜  workers_primes git:(main) ✗ git rm --cached -r .
rm 'index.html'
rm 'main.js'
rm 'primeWorker.js'
➜  workers_primes git:(main) ✗ cd   
➜  ~ cd js_assignments 
➜  js_assignments cd workers_primes 
➜  workers_primes git:(main) ✗ ls 
multiple_threads webScraping
➜  workers_primes git:(main) ✗ cd webScraping 
➜  webScraping git:(main) ✗ ls
genres.css           package-lock.json    primed.js
index.js             package.json
node_modules         prime_async_await.js
➜  webScraping git:(main) ✗ cd ..
➜  workers_primes git:(main) ✗ cd multiple_threads 
➜  multiple_threads git:(main) ✗ ls
index.html     main.js        primeWorker.js
➜  multiple_threads git:(main) ✗ cd ..
➜  workers_primes git:(main) ✗ git add .                      
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/node/README.md
➜  workers_primes git:(main) ✗ git rest -- hard
git: 'rest' is not a git command. See 'git --help'.

The most similar commands are
	restore
	reset
➜  workers_primes git:(main) ✗ git reset -- hard
➜  workers_primes git:(main) ✗ git add .        
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/node/README.md
➜  workers_primes git:(main) ✗ git config --global core.autocrlf input

➜  workers_primes git:(main) ✗ git add .                              
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/node/README.md
➜  workers_primes git:(main) ✗ cd webScraping/node_modules/@types/node
➜  node git:(main) ✗ rm -rf README.md 
➜  node git:(main) ✗ cd ..
➜  @types git:(main) ✗ cd ..
➜  node_modules git:(main) ✗ cd ..
➜  webScraping git:(main) ✗ git add .                              
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/yauzl/README.md
➜  webScraping git:(main) ✗ git config --global core.autocrlf input

➜  webScraping git:(main) ✗ git add .                              
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/yauzl/README.md
➜  webScraping git:(main) ✗ cd webScraping/node_modules/@types/node
cd: no such file or directory: webScraping/node_modules/@types/node
➜  webScraping git:(main) ✗ cd node_modules/@types/node 
➜  node git:(main) ✗ git config --global core.autocrlf input

➜  node git:(main) ✗ git add .                              
➜  node git:(main) ✗ cd ..
➜  @types git:(main) ✗ cd ..
➜  node_modules git:(main) ✗ cd ..
➜  webScraping git:(main) ✗ cd ..
➜  workers_primes git:(main) ✗ git add .                              
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/yauzl/README.md
➜  workers_primes git:(main) ✗ cd webScraping/node_modules/@types/node
➜  node git:(main) ✗ git add .                              
➜  node git:(main) ✗ cd .. 
➜  @types git:(main) ✗ git add .
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/yauzl/README.md
➜  @types git:(main) ✗ cd yauzl
➜  yauzl git:(main) ✗ git add .
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/yauzl/README.md
➜  yauzl git:(main) ✗ git config --global core.autocrlf input

➜  yauzl git:(main) ✗ git add .                              
fatal: CRLF would be replaced by LF in webScraping/node_modules/@types/yauzl/README.md
➜  yauzl git:(main) ✗ rm -rf README.md                       
➜  yauzl git:(main) ✗ git add .                              
➜  yauzl git:(main) ✗ cd ..    
➜  @types git:(main) ✗ cd ..
➜  node_modules git:(main) ✗ git add .       
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/.npmignore
➜  node_modules git:(main) ✗ git add .     
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/.npmignore
➜  node_modules git:(main) ✗ cd color-name 
➜  color-name git:(main) ✗ git add .    
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/.npmignore
➜  color-name git:(main) ✗ git config --global core.autocrlf input

➜  color-name git:(main) ✗ git add .                              
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/.npmignore
➜  color-name git:(main) ✗ rm -rf .npmignore                      
➜  color-name git:(main) ✗ git add .        
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/LICENSE
➜  color-name git:(main) ✗ rm -rf LICENSE      
➜  color-name git:(main) ✗ git add .     
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/README.md
➜  color-name git:(main) ✗ rm -rf README.md 
➜  color-name git:(main) ✗ git add .       
fatal: CRLF would be replaced by LF in webScraping/node_modules/color-name/index.js
➜  color-name git:(main) ✗ cd ..
➜  node_modules git:(main) ✗ cd ..
➜  webScraping git:(main) ✗ cd ..
➜  workers_primes git:(main) ✗ git status
\On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	deleted:    index.html
	deleted:    main.js
	deleted:    primeWorker.js
	new file:   webScraping/node_modules/@types/node/LICENSE
	new file:   webScraping/node_modules/@types/node/assert.d.ts
	new file:   webScraping/node_modules/@types/node/assert/strict.d.ts
	new file:   webScraping/node_modules/@types/node/async_hooks.d.ts
	new file:   webScraping/node_modules/@types/node/buffer.d.ts
	new file:   webScraping/node_modules/@types/node/child_process.d.ts
	new file:   webScraping/node_modules/@types/node/cluster.d.ts
	new file:   webScraping/node_modules/@types/node/console.d.ts
	new file:   webScraping/node_modules/@types/node/constants.d.ts
	new file:   webScraping/node_modules/@types/node/crypto.d.ts
	new file:   webScraping/node_modules/@types/node/dgram.d.ts
	new file:   webScraping/node_modules/@types/node/diagnostics_channel.d.ts
	new file:   webScraping/node_modules/@types/node/dns.d.ts
	new file:   webScraping/node_modules/@types/node/dns/promises.d.ts
	new file:   webScraping/node_modules/@types/node/dom-events.d.ts
	new file:   webScraping/node_modules/@types/node/domain.d.ts
	new file:   webScraping/node_modules/@types/node/events.d.ts
	new file:   webScraping/node_modules/@types/node/fs.d.ts
	new file:   webScraping/node_modules/@types/node/fs/promises.d.ts
	new file:   webScraping/node_modules/@types/node/globals.d.ts
	new file:   webScraping/node_modules/@types/node/globals.global.d.ts
	new file:   webScraping/node_modules/@types/node/http.d.ts
	new file:   webScraping/node_modules/@types/node/http2.d.ts
	new file:   webScraping/node_modules/@types/node/https.d.ts
	new file:   webScraping/node_modules/@types/node/index.d.ts
	new file:   webScraping/node_modules/@types/node/inspector.d.ts
	new file:   webScraping/node_modules/@types/node/module.d.ts
	new file:   webScraping/node_modules/@types/node/net.d.ts
	new file:   webScraping/node_modules/@types/node/os.d.ts
	new file:   webScraping/node_modules/@types/node/package.json
	new file:   webScraping/node_modules/@types/node/path.d.ts
	new file:   webScraping/node_modules/@types/node/perf_hooks.d.ts
	new file:   webScraping/node_modules/@types/node/process.d.ts
	new file:   webScraping/node_modules/@types/node/punycode.d.ts
	new file:   webScraping/node_modules/@types/node/querystring.d.ts
	new file:   webScraping/node_modules/@types/node/readline.d.ts
	new file:   webScraping/node_modules/@types/node/readline/promises.d.ts
	new file:   webScraping/node_modules/@types/node/repl.d.ts
	new file:   webScraping/node_modules/@types/node/stream.d.ts
	new file:   webScraping/node_modules/@types/node/stream/consumers.d.ts
	new file:   webScraping/node_modules/@types/node/stream/promises.d.ts
	new file:   webScraping/node_modules/@types/node/stream/web.d.ts
	new file:   webScraping/node_modules/@types/node/string_decoder.d.ts
	new file:   webScraping/node_modules/@types/node/test.d.ts
	new file:   webScraping/node_modules/@types/node/timers.d.ts
	new file:   webScraping/node_modules/@types/node/timers/promises.d.ts
	new file:   webScraping/node_modules/@types/node/tls.d.ts
	new file:   webScraping/node_modules/@types/node/trace_events.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/assert.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/assert/strict.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/async_hooks.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/buffer.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/child_process.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/cluster.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/console.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/constants.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/crypto.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/dgram.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/diagnostics_channel.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/dns.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/dns/promises.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/dom-events.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/domain.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/events.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/fs.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/fs/promises.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/globals.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/globals.global.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/http.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/http2.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/https.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/index.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/inspector.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/module.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/net.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/os.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/path.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/perf_hooks.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/process.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/punycode.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/querystring.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/readline.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/readline/promises.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/repl.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/stream.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/stream/consumers.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/stream/promises.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/stream/web.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/string_decoder.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/test.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/timers.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/timers/promises.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/tls.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/trace_events.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/tty.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/url.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/util.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/v8.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/vm.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/wasi.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/worker_threads.d.ts
	new file:   webScraping/node_modules/@types/node/ts4.8/zlib.d.ts
	new file:   webScraping/node_modules/@types/node/tty.d.ts
	new file:   webScraping/node_modules/@types/node/url.d.ts
	new file:   webScraping/node_modules/@types/node/util.d.ts
	new file:   webScraping/node_modules/@types/node/v8.d.ts
	new file:   webScraping/node_modules/@types/node/vm.d.ts
	new file:   webScraping/node_modules/@types/node/wasi.d.ts
	new file:   webScraping/node_modules/@types/node/worker_threads.d.ts
	new file:   webScraping/node_modules/@types/node/zlib.d.ts
	new file:   webScraping/node_modules/@types/yauzl/LICENSE
	new file:   webScraping/node_modules/@types/yauzl/index.d.ts
	new file:   webScraping/node_modules/@types/yauzl/package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	multiple_threads/
	webScraping/genres.css
	webScraping/index.js
	webScraping/node_modules/.bin/
	webScraping/node_modules/.package-lock.json
	webScraping/node_modules/@babel/
	webScraping/node_modules/@puppeteer/
	webScraping/node_modules/@tootallnate/
	webScraping/node_modules/agent-base/
	webScraping/node_modules/ansi-regex/
	webScraping/node_modules/ansi-styles/
	webScraping/node_modules/argparse/
	webScraping/node_modules/ast-types/
	webScraping/node_modules/async/
	webScraping/node_modules/b4a/
	webScraping/node_modules/balanced-match/
	webScraping/node_modules/base64-js/
	webScraping/node_modules/basic-ftp/
	webScraping/node_modules/brace-expansion/
	webScraping/node_modules/buffer-crc32/
	webScraping/node_modules/buffer/
	webScraping/node_modules/callsites/
	webScraping/node_modules/chalk/
	webScraping/node_modules/chromium-bidi/
	webScraping/node_modules/cliui/
	webScraping/node_modules/color-convert/
	webScraping/node_modules/color-name/
	webScraping/node_modules/concat-map/
	webScraping/node_modules/cosmiconfig/
	webScraping/node_modules/cross-fetch/
	webScraping/node_modules/data-uri-to-buffer/
	webScraping/node_modules/debug/
	webScraping/node_modules/degenerator/
	webScraping/node_modules/devtools-protocol/
	webScraping/node_modules/ejs/
	webScraping/node_modules/emoji-regex/
	webScraping/node_modules/end-of-stream/
	webScraping/node_modules/error-ex/
	webScraping/node_modules/escalade/
	webScraping/node_modules/escape-string-regexp/
	webScraping/node_modules/escodegen/
	webScraping/node_modules/esprima/
	webScraping/node_modules/estraverse/
	webScraping/node_modules/esutils/
	webScraping/node_modules/extract-zip/
	webScraping/node_modules/fast-fifo/
	webScraping/node_modules/fd-slicer/
	webScraping/node_modules/filelist/
	webScraping/node_modules/fs-extra/
	webScraping/node_modules/get-caller-file/
	webScraping/node_modules/get-stream/
	webScraping/node_modules/get-uri/
	webScraping/node_modules/graceful-fs/
	webScraping/node_modules/has-flag/
	webScraping/node_modules/http-proxy-agent/
	webScraping/node_modules/https-proxy-agent/
	webScraping/node_modules/ieee754/
	webScraping/node_modules/import-fresh/
	webScraping/node_modules/ip/
	webScraping/node_modules/is-arrayish/
	webScraping/node_modules/is-fullwidth-code-point/
	webScraping/node_modules/jake/
	webScraping/node_modules/js-tokens/
	webScraping/node_modules/js-yaml/
	webScraping/node_modules/json-parse-even-better-errors/
	webScraping/node_modules/jsonfile/
	webScraping/node_modules/lines-and-columns/
	webScraping/node_modules/lru-cache/
	webScraping/node_modules/minimatch/
	webScraping/node_modules/mitt/
	webScraping/node_modules/mkdirp-classic/
	webScraping/node_modules/ms/
	webScraping/node_modules/netmask/
	webScraping/node_modules/node-fetch/
	webScraping/node_modules/once/
	webScraping/node_modules/pac-proxy-agent/
	webScraping/node_modules/pac-resolver/
	webScraping/node_modules/parent-module/
	webScraping/node_modules/parse-json/
	webScraping/node_modules/path-type/
	webScraping/node_modules/pend/
	webScraping/node_modules/progress/
	webScraping/node_modules/proxy-agent/
	webScraping/node_modules/proxy-from-env/
	webScraping/node_modules/pump/
	webScraping/node_modules/puppeteer-core/
	webScraping/node_modules/puppeteer/
	webScraping/node_modules/queue-tick/
	webScraping/node_modules/require-directory/
	webScraping/node_modules/resolve-from/
	webScraping/node_modules/smart-buffer/
	webScraping/node_modules/socks-proxy-agent/
	webScraping/node_modules/socks/
	webScraping/node_modules/source-map/
	webScraping/node_modules/streamx/
	webScraping/node_modules/string-width/
	webScraping/node_modules/strip-ansi/
	webScraping/node_modules/supports-color/
	webScraping/node_modules/tar-fs/
	webScraping/node_modules/tar-stream/
	webScraping/node_modules/through/
	webScraping/node_modules/tr46/
	webScraping/node_modules/tslib/
	webScraping/node_modules/unbzip2-stream/
	webScraping/node_modules/universalify/
	webScraping/node_modules/webidl-conversions/
	webScraping/node_modules/whatwg-url/
	webScraping/node_modules/wrap-ansi/
	webScraping/node_modules/wrappy/
	webScraping/node_modules/ws/
	webScraping/node_modules/y18n/
	webScraping/node_modules/yargs-parser/
	webScraping/node_modules/yargs/
	webScraping/node_modules/yauzl/
	webScraping/package-lock.json
	webScraping/package.json
	webScraping/prime_async_await.js
	webScraping/primed.js

➜  workers_primes git:(main) ✗ >....                                                                                                                                                                                  
        webScraping/node_modules/has-flag/
        webScraping/node_modules/http-proxy-agent/
        webScraping/node_modules/https-proxy-agent/
        webScraping/node_modules/ieee754/
        webScraping/node_modules/import-fresh/
        webScraping/node_modules/ip/
        webScraping/node_modules/is-arrayish/
        webScraping/node_modules/is-fullwidth-code-point/
        webScraping/node_modules/jake/
        webScraping/node_modules/js-tokens/
        webScraping/node_modules/js-yaml/
        webScraping/node_modules/json-parse-even-better-errors/
        webScraping/node_modules/jsonfile/
        webScraping/node_modules/lines-and-columns/
        webScraping/node_modules/lru-cache/
        webScraping/node_modules/minimatch/
        webScraping/node_modules/mitt/
        webScraping/node_modules/mkdirp-classic/
        webScraping/node_modules/ms/
        webScraping/node_modules/netmask/
        webScraping/node_modules/node-fetch/
        webScraping/node_modules/once/
        webScraping/node_modules/pac-proxy-agent/
        webScraping/node_modules/pac-resolver/
        webScraping/node_modules/parent-module/
        webScraping/node_modules/parse-json/
        webScraping/node_modules/path-type/
        webScraping/node_modules/pend/
        webScraping/node_modules/progress/
        webScraping/node_modules/proxy-agent/
        webScraping/node_modules/proxy-from-env/
        webScraping/node_modules/pump/
        webScraping/node_modules/puppeteer-core/
        webScraping/node_modules/puppeteer/
        webScraping/node_modules/queue-tick/
        webScraping/node_modules/require-directory/
        webScraping/node_modules/resolve-from/
        webScraping/node_modules/smart-buffer/
        webScraping/node_modules/socks-proxy-agent/
        webScraping/node_modules/socks/
        webScraping/node_modules/source-map/
        webScraping/node_modules/streamx/
        webScraping/node_modules/string-width/
        webScraping/node_modules/strip-ansi/
        webScraping/node_modules/supports-color/
        webScraping/node_modules/tar-fs/
        webScraping/node_modules/tar-stream/
        webScraping/node_modules/through/
        webScraping/node_modules/tr46/
        webScraping/node_modules/tslib/
        webScraping/node_modules/unbzip2-stream/
        webScraping/node_modules/universalify/
        webScraping/node_modules/webidl-conversions/
        webScraping/node_modules/whatwg-url/
        webScraping/node_modules/wrap-ansi/
        webScraping/node_modules/wrappy/
        webScraping/node_modules/ws/
        webScraping/node_modules/y18n/
        webScraping/node_modules/yargs-parser/
        webScraping/node_modules/yargs/
        webScraping/node_modules/yauzl/
        webScraping/package-lock.json
        webScraping/package.json
        webScraping/prime_async_await.js
        webScraping/primed.js

zsh: permission denied: webScraping/genres.css
zsh: permission denied: webScraping/index.js
zsh: no such file or directory: webScraping/node_modules/.package-lock.json
zsh: no such file or directory: webScraping/node_modules/@babel/
zsh: no such file or directory: webScraping/node_modules/@puppeteer/
zsh: no such file or directory: webScraping/node_modules/@tootallnate/
zsh: no such file or directory: webScraping/node_modules/agent-base/
zsh: no such file or directory: webScraping/node_modules/ansi-regex/
zsh: no such file or directory: webScraping/node_modules/ansi-styles/
zsh: no such file or directory: webScraping/node_modules/argparse/
zsh: no such file or directory: webScraping/node_modules/ast-types/
zsh: no such file or directory: webScraping/node_modules/async/
zsh: no such file or directory: webScraping/node_modules/b4a/
zsh: no such file or directory: webScraping/node_modules/balanced-match/
zsh: no such file or directory: webScraping/node_modules/base64-js/
zsh: no such file or directory: webScraping/node_modules/basic-ftp/
zsh: no such file or directory: webScraping/node_modules/brace-expansion/
zsh: no such file or directory: webScraping/node_modules/buffer-crc32/
zsh: no such file or directory: webScraping/node_modules/buffer/
zsh: no such file or directory: webScraping/node_modules/callsites/
zsh: no such file or directory: webScraping/node_modules/chalk/
zsh: no such file or directory: webScraping/node_modules/chromium-bidi/
zsh: no such file or directory: webScraping/node_modules/cliui/
zsh: no such file or directory: webScraping/node_modules/color-convert/
zsh: no such file or directory: webScraping/node_modules/color-name/
zsh: no such file or directory: webScraping/node_modules/concat-map/
zsh: no such file or directory: webScraping/node_modules/cosmiconfig/
zsh: no such file or directory: webScraping/node_modules/cross-fetch/
zsh: no such file or directory: webScraping/node_modules/data-uri-to-buffer/
zsh: no such file or directory: webScraping/node_modules/debug/
zsh: no such file or directory: webScraping/node_modules/degenerator/
zsh: no such file or directory: webScraping/node_modules/devtools-protocol/
zsh: no such file or directory: webScraping/node_modules/ejs/
zsh: no such file or directory: webScraping/node_modules/emoji-regex/
zsh: no such file or directory: webScraping/node_modules/end-of-stream/
zsh: no such file or directory: webScraping/node_modules/error-ex/
zsh: no such file or directory: webScraping/node_modules/escalade/
zsh: no such file or directory: webScraping/node_modules/escape-string-regexp/
zsh: no such file or directory: webScraping/node_modules/escodegen/
zsh: no such file or directory: webScraping/node_modules/esprima/
zsh: no such file or directory: webScraping/node_modules/estraverse/
zsh: no such file or directory: webScraping/node_modules/esutils/
zsh: no such file or directory: webScraping/node_modules/extract-zip/
zsh: no such file or directory: webScraping/node_modules/fast-fifo/
zsh: no such file or directory: webScraping/node_modules/fd-slicer/
zsh: no such file or directory: webScraping/node_modules/filelist/
zsh: no such file or directory: webScraping/node_modules/fs-extra/
zsh: no such file or directory: webScraping/node_modules/get-caller-file/
zsh: no such file or directory: webScraping/node_modules/get-stream/
zsh: no such file or directory: webScraping/node_modules/get-uri/
zsh: no such file or directory: webScraping/node_modules/graceful-fs/
zsh: no such file or directory: webScraping/node_modules/has-flag/
zsh: no such file or directory: webScraping/node_modules/http-proxy-agent/
zsh: no such file or directory: webScraping/node_modules/https-proxy-agent/
zsh: no such file or directory: webScraping/node_modules/ieee754/
zsh: no such file or directory: webScraping/node_modules/import-fresh/
zsh: no such file or directory: webScraping/node_modules/ip/
zsh: no such file or directory: webScraping/node_modules/is-arrayish/
zsh: no such file or directory: webScraping/node_modules/is-fullwidth-code-point/
zsh: no such file or directory: webScraping/node_modules/jake/
zsh: no such file or directory: webScraping/node_modules/js-tokens/
zsh: no such file or directory: webScraping/node_modules/js-yaml/
zsh: no such file or directory: webScraping/node_modules/json-parse-even-better-errors/
zsh: no such file or directory: webScraping/node_modules/jsonfile/
zsh: no such file or directory: webScraping/node_modules/lines-and-columns/
zsh: no such file or directory: webScraping/node_modules/lru-cache/
zsh: no such file or directory: webScraping/node_modules/minimatch/
zsh: no such file or directory: webScraping/node_modules/mitt/
zsh: no such file or directory: webScraping/node_modules/mkdirp-classic/
zsh: no such file or directory: webScraping/node_modules/ms/
zsh: no such file or directory: webScraping/node_modules/netmask/
zsh: no such file or directory: webScraping/node_modules/node-fetch/
zsh: no such file or directory: webScraping/node_modules/once/
zsh: no such file or directory: webScraping/node_modules/pac-proxy-agent/
zsh: no such file or directory: webScraping/node_modules/pac-resolver/
zsh: no such file or directory: webScraping/node_modules/parent-module/
zsh: no such file or directory: webScraping/node_modules/parse-json/
zsh: no such file or directory: webScraping/node_modules/path-type/
zsh: no such file or directory: webScraping/node_modules/pend/
zsh: no such file or directory: webScraping/node_modules/progress/
zsh: no such file or directory: webScraping/node_modules/proxy-agent/
zsh: no such file or directory: webScraping/node_modules/proxy-from-env/
zsh: no such file or directory: webScraping/node_modules/pump/
zsh: no such file or directory: webScraping/node_modules/puppeteer-core/
zsh: no such file or directory: webScraping/node_modules/puppeteer/
zsh: no such file or directory: webScraping/node_modules/queue-tick/
zsh: no such file or directory: webScraping/node_modules/require-directory/
zsh: no such file or directory: webScraping/node_modules/resolve-from/
zsh: no such file or directory: webScraping/node_modules/smart-buffer/
zsh: no such file or directory: webScraping/node_modules/socks-proxy-agent/
zsh: no such file or directory: webScraping/node_modules/socks/
zsh: no such file or directory: webScraping/node_modules/source-map/
zsh: no such file or directory: webScraping/node_modules/streamx/
zsh: no such file or directory: webScraping/node_modules/string-width/
zsh: no such file or directory: webScraping/node_modules/strip-ansi/
zsh: no such file or directory: webScraping/node_modules/supports-color/
zsh: no such file or directory: webScraping/node_modules/tar-fs/
zsh: no such file or directory: webScraping/node_modules/tar-stream/
zsh: no such file or directory: webScraping/node_modules/through/
zsh: no such file or directory: webScraping/node_modules/tr46/
zsh: no such file or directory: webScraping/node_modules/tslib/
zsh: no such file or directory: webScraping/node_modules/unbzip2-stream/
zsh: no such file or directory: webScraping/node_modules/universalify/
zsh: no such file or directory: webScraping/node_modules/webidl-conversions/
zsh: no such file or directory: webScraping/node_modules/whatwg-url/
zsh: no such file or directory: webScraping/node_modules/wrap-ansi/
zsh: no such file or directory: webScraping/node_modules/wrappy/
zsh: no such file or directory: webScraping/node_modules/ws/
zsh: no such file or directory: webScraping/node_modules/y18n/
zsh: no such file or directory: webScraping/node_modules/yargs-parser/
zsh: no such file or directory: webScraping/node_modules/yargs/
zsh: no such file or directory: webScraping/node_modules/yauzl/
zsh: no such file or directory: webScraping/package-lock.json
zsh: no such file or directory: webScraping/package.json
zsh: no such file or directory: webScraping/prime_async_await.js
zsh: no such file or directory: webScraping/primed.js
➜  .bin git:(main) ✗ cd ..
➜  node_modules git:(main) ✗ cd ..
➜  webScraping git:(main) ✗ ls
genres.css           index.js             node_modules         package-lock.json    package.json         prime_async_await.js primed.js
➜  webScraping git:(main) ✗ vim index.js

const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function scrap(){
const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({width:1280,height:720});

await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=horror');

await page.screenshot({ path: 'horror.jpg'});
browser.close();

}

async function imdb_horror(){
    //const starttime = new Date();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();



    await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=horror');




    // const element = await page.waitForSelector('div > .lister-item-content');

    const names = await page.evaluate(() =>{
       return Array.from(document.querySelectorAll(".lister-item-content .lister-item-header")).map(x=>x.textContent)
    })

    console.log(typeof(names));

    await fs.writeFile("horror.txt", names.join("\r\n"));

    // script.js


   // console.log(names);
  //const endtime = new Date();
  //const duration = endtime - starttime;

       // console.log(`HTML file generated successfully in ${duration} ms. Check output.html.`);

    await browser.close();

}


async function imdb_romance(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();



    await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=romance');




    // const element = await page.waitForSelector('div > .lister-item-content');

    const names = await page.evaluate(() =>{



