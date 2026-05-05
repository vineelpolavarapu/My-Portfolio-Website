'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type Stage =
  | 'idle'
  | 'mono'
  | 'fadeBlack'
  | 'typing'
  | 'popup1'
  | 'popup2'
  | 'fadeOut';

  const codeText = `
/*

A harmless bash one-liner that **looks** like pip is installing a package. Nothing is actually installed — it just prints animated output to the terminal.

## The command

\`\`\`bash
pkg="tensorflow-quantum"; ver="0.7.3"; echo "Collecting \$pkg"; sleep 0.4; echo "  Downloading \${pkg//-/_}-\${ver}-cp311-cp311-win_amd64.whl (87.4 MB)"; for i in \$(seq 2 2 100); do printf "\\r     |%-50s| %d%% %.1f MB/s eta 0:00:%02d" "\$(printf '█%.0s' \$(seq 1 \$((i/2))))" \$i "\$(awk -v n=\$RANDOM 'BEGIN{print (n%40+10)/10}')" \$((100-i)); sleep 0.08; done; echo; echo "Collecting numpy>=1.21.0"; sleep 0.3; echo "  Using cached numpy-1.26.4-cp311-cp311-win_amd64.whl (15.8 MB)"; echo "Collecting protobuf>=3.20.0"; sleep 0.3; echo "  Using cached protobuf-4.25.1-cp311-cp311-win_amd64.whl (413 KB)"; echo "Collecting absl-py>=1.0.0"; sleep 0.2; echo "  Using cached absl_py-2.1.0-py3-none-any.whl (133 KB)"; echo "Installing collected packages: absl-py, protobuf, numpy, \$pkg"; sleep 1.2; echo "Successfully installed absl-py-2.1.0 numpy-1.26.4 protobuf-4.25.1 \${pkg}-\${ver}"
\`\`\`

## Sample output

\`\`\`
Collecting tensorflow-quantum
  Downloading tensorflow_quantum-0.7.3-cp311-cp311-win_amd64.whl (87.4 MB)
     |██████████████████████████████████████████████████| 100% 1.3 MB/s eta 0:00:00
Collecting numpy>=1.21.0
  Using cached numpy-1.26.4-cp311-cp311-win_amd64.whl (15.8 MB)
Collecting protobuf>=3.20.0
  Using cached protobuf-4.25.1-cp311-cp311-win_amd64.whl (413 KB)
Collecting absl-py>=1.0.0
  Using cached absl_py-2.1.0-py3-none-any.whl (133 KB)
Installing collected packages: absl-py, protobuf, numpy, tensorflow-quantum
Successfully installed absl-py-2.1.0 numpy-1.26.4 protobuf-4.25.1 tensorflow-quantum-0.7.3
\`\`\`

## How it works

| Piece | What it does |
|---|---|
| \`pkg=...; ver=...\` | Variables for the fake package name and version |
| \`echo "Collecting \$pkg"\` | Prints the first line pip normally shows |
| \`for i in \$(seq 2 2 100)\` | Loops from 2 → 100 in steps of 2 (the progress bar frames) |
| \`printf "\\r..."\` | \`\\r\` returns the cursor to column 0 so each frame overwrites the previous |
| \`printf '█%.0s' \$(seq 1 \$((i/2)))\` | Builds the filled portion of the bar (\`█\` × N) |
| \`awk ... \$RANDOM\` | Generates a random "MB/s" speed each frame for realism |
| \`eta 0:00:%02d\` | Counts down the fake remaining seconds |
| \`sleep 0.08\` | Frame delay — lower = faster animation |

## Tweaking it

- **Slower bar**: change \`sleep 0.08\` to \`sleep 0.2\`
- **Different package**: change \`pkg="..."\` and \`ver="..."\`
- **More dependencies**: add more \`Collecting <name>\` / \`Using cached ...\` blocks
- **Linux wheel name**: replace \`win_amd64\` with \`manylinux_2_17_x86_64.manylinux2014_x86_64\`

## Run it

In a bash shell (Git Bash, WSL, macOS, or Linux):

\`\`\`bash
bash -c '<paste the command above>'
\`\`\`

Or save it as \`fake-install.sh\`, then \`chmod +x fake-install.sh && ./fake-install.sh\`.

> ⚠️ This is for demos / pranks / screen recordings only. It does not download, install, or modify anything on your system.

---

# Bonus pack — more fake installers

Below is a collection of additional one-liners and short scripts that mimic the output of common package managers and build tools. All are 100% cosmetic.

## 1. Fake \`apt-get install\`

\`\`\`bash
echo "Reading package lists... Done"; sleep 0.6; \\
echo "Building dependency tree... Done"; sleep 0.4; \\
echo "Reading state information... Done"; sleep 0.4; \\
echo "The following additional packages will be installed:"; \\
echo "  libfoo1 libbar2 libbaz0"; sleep 0.5; \\
echo "The following NEW packages will be installed:"; \\
echo "  super-cool-tool libfoo1 libbar2 libbaz0"; sleep 0.5; \\
echo "0 upgraded, 4 newly installed, 0 to remove and 7 not upgraded."; \\
echo "Need to get 12.4 MB of archives."; \\
echo "After this operation, 38.7 MB of additional disk space will be used."; sleep 0.6; \\
for i in 1 2 3 4; do \\
  pkg=("libfoo1" "libbar2" "libbaz0" "super-cool-tool")[\$((i-1))]; \\
  echo "Get:\$i http://archive.ubuntu.com/ubuntu jammy/main amd64 \${pkg} amd64 1.0.0 [\$((\$RANDOM % 5000 + 1000)) kB]"; \\
  sleep 0.3; \\
done; \\
echo "Fetched 12.4 MB in 2s (6,184 kB/s)"; sleep 0.5; \\
echo "Selecting previously unselected package libfoo1."; \\
echo "(Reading database ... 187423 files and directories currently installed.)"; sleep 0.4; \\
echo "Preparing to unpack .../libfoo1_1.0.0_amd64.deb ..."; \\
echo "Unpacking libfoo1 (1.0.0) ..."; sleep 0.4; \\
echo "Setting up libfoo1 (1.0.0) ..."; sleep 0.4; \\
echo "Setting up super-cool-tool (1.0.0) ..."; sleep 0.6; \\
echo "Processing triggers for man-db (2.10.2-1) ..."; sleep 0.4; \\
echo "Processing triggers for libc-bin (2.35-0ubuntu3.4) ..."; sleep 0.4; \\
echo "Done."
\`\`\`

## 2. Fake \`npm install\`

\`\`\`bash
echo "npm WARN deprecated har-validator@5.1.5: this library is no longer supported"; sleep 0.4; \\
echo "npm WARN deprecated request@2.88.2: request has been deprecated"; sleep 0.4; \\
for i in \$(seq 1 30); do printf "."; sleep 0.05; done; echo; \\
echo; \\
echo "added 1423 packages, and audited 1424 packages in 14s"; sleep 0.4; \\
echo; \\
echo "182 packages are looking for funding"; \\
echo "  run \\\`npm fund\\\` for details"; sleep 0.4; \\
echo; \\
echo "found 0 vulnerabilities"
\`\`\`

## 3. Fake \`yarn add\`

\`\`\`bash
echo "yarn add v1.22.19"; sleep 0.3; \\
echo "[1/4] Resolving packages..."; sleep 0.8; \\
echo "[2/4] Fetching packages..."; sleep 1.2; \\
echo "[3/4] Linking dependencies..."; sleep 1.0; \\
echo "[4/4] Building fresh packages..."; sleep 0.8; \\
echo "success Saved 1 new dependency."; sleep 0.3; \\
echo "info Direct dependencies"; \\
echo "└─ awesome-pkg@2.4.1"; sleep 0.3; \\
echo "info All dependencies"; \\
echo "├─ awesome-pkg@2.4.1"; \\
echo "├─ leftpad@1.3.0"; \\
echo "└─ rightpad@0.9.2"; sleep 0.3; \\
echo "Done in 4.12s."
\`\`\`

## 4. Fake \`conda install\`

\`\`\`bash
echo "Collecting package metadata (current_repodata.json): done"; sleep 0.8; \\
echo "Solving environment: done"; sleep 1.5; \\
echo; \\
echo "## Package Plan ##"; \\
echo; \\
echo "  environment location: /opt/conda/envs/myenv"; \\
echo; \\
echo "  added / updated specs:"; \\
echo "    - scipy"; \\
echo; \\
echo "The following NEW packages will be INSTALLED:"; \\
echo; \\
echo "  scipy              conda-forge/linux-64::scipy-1.11.4-py311h64a7726_0"; \\
echo "  numpy              conda-forge/linux-64::numpy-1.26.2-py311h64a7726_0"; \\
echo "  openblas           conda-forge/linux-64::openblas-0.3.25-pthreads_h7a3da44_0"; sleep 0.5; \\
echo; \\
echo "Downloading and Extracting Packages:"; sleep 0.5; \\
echo "Preparing transaction: done"; sleep 0.4; \\
echo "Verifying transaction: done"; sleep 0.6; \\
echo "Executing transaction: done"
\`\`\`

## 5. Fake \`brew install\`

\`\`\`bash
echo "==> Downloading https://ghcr.io/v2/homebrew/core/wget/manifests/1.21.4"; sleep 0.5; \\
echo "==> Fetching wget"; sleep 0.4; \\
echo "==> Downloading https://ghcr.io/v2/homebrew/core/wget/blobs/sha256:abc123..."; sleep 0.6; \\
for i in \$(seq 5 5 100); do printf "\\r#%-20s%3d%%" "\$(printf '#%.0s' \$(seq 1 \$((i/5))))" \$i; sleep 0.08; done; echo; \\
echo "==> Pouring wget--1.21.4.arm64_sonoma.bottle.tar.gz"; sleep 0.6; \\
echo "🍺  /opt/homebrew/Cellar/wget/1.21.4: 89 files, 4.3MB"; \\
echo "==> Running \\\`brew cleanup wget\\\`..."
\`\`\`

## 6. Fake \`cargo build\`

\`\`\`bash
echo "   Compiling proc-macro2 v1.0.74"; sleep 0.4; \\
echo "   Compiling unicode-ident v1.0.12"; sleep 0.3; \\
echo "   Compiling libc v0.2.151"; sleep 0.5; \\
echo "   Compiling cfg-if v1.0.0"; sleep 0.3; \\
echo "   Compiling autocfg v1.1.0"; sleep 0.4; \\
echo "   Compiling serde v1.0.193"; sleep 0.6; \\
echo "   Compiling quote v1.0.35"; sleep 0.4; \\
echo "   Compiling syn v2.0.43"; sleep 1.2; \\
echo "   Compiling tokio v1.35.1"; sleep 1.5; \\
echo "   Compiling my-app v0.1.0 (/home/user/my-app)"; sleep 0.8; \\
echo "    Finished dev [unoptimized + debuginfo] target(s) in 14.27s"
\`\`\`

## 7. Fake \`docker pull\`

\`\`\`bash
img="myorg/myapp:latest"; \\
echo "Using default tag: latest"; sleep 0.3; \\
echo "latest: Pulling from myorg/myapp"; sleep 0.4; \\
for layer in a1b2c3d4 e5f6a7b8 c9d0e1f2 3a4b5c6d 7e8f9a0b; do \\
  echo "\${layer}: Pulling fs layer"; \\
  sleep 0.2; \\
done; \\
for layer in a1b2c3d4 e5f6a7b8 c9d0e1f2 3a4b5c6d 7e8f9a0b; do \\
  for i in \$(seq 10 10 100); do \\
    printf "\\r\${layer}: Downloading [%-50s] %d%%" "\$(printf '=%.0s' \$(seq 1 \$((i/2))))>" \$i; \\
    sleep 0.04; \\
  done; \\
  printf "\\r\${layer}: Pull complete                                                          \\n"; \\
done; \\
echo "Digest: sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"; \\
echo "Status: Downloaded newer image for \${img}"; \\
echo "docker.io/\${img}"
\`\`\`

## 8. Fake \`dnf install\` (Fedora/RHEL)

\`\`\`bash
echo "Last metadata expiration check: 0:42:11 ago on Mon 05 May 2026 09:18:43 AM UTC."; sleep 0.5; \\
echo "Dependencies resolved."; sleep 0.4; \\
echo "================================================================================"; \\
echo " Package           Architecture     Version              Repository      Size"; \\
echo "================================================================================"; \\
echo "Installing:"; \\
echo " htop              x86_64           3.3.0-1.fc39         fedora         173 k"; \\
echo "Transaction Summary"; \\
echo "================================================================================"; \\
echo "Install  1 Package"; sleep 0.4; \\
echo; \\
echo "Total download size: 173 k"; \\
echo "Installed size: 363 k"; sleep 0.5; \\
echo "Downloading Packages:"; \\
echo "htop-3.3.0-1.fc39.x86_64.rpm                  892 kB/s | 173 kB     00:00"; sleep 0.4; \\
echo "--------------------------------------------------------------------------------"; \\
echo "Total                                         180 kB/s | 173 kB     00:00"; sleep 0.4; \\
echo "Running transaction check"; \\
echo "Transaction check succeeded."; \\
echo "Running transaction test"; \\
echo "Transaction test succeeded."; \\
echo "Running transaction"; sleep 0.5; \\
echo "  Preparing        :                                                  1/1"; \\
echo "  Installing       : htop-3.3.0-1.fc39.x86_64                         1/1"; \\
echo "  Verifying        : htop-3.3.0-1.fc39.x86_64                         1/1"; sleep 0.3; \\
echo "Installed:"; \\
echo "  htop-3.3.0-1.fc39.x86_64"; \\
echo "Complete!"
\`\`\`

## 9. Fake \`pacman -S\` (Arch)

\`\`\`bash
echo "resolving dependencies..."; sleep 0.4; \\
echo "looking for conflicting packages..."; sleep 0.4; \\
echo; \\
echo "Packages (1) neovim-0.9.5-1"; sleep 0.3; \\
echo; \\
echo "Total Download Size:    11.43 MiB"; \\
echo "Total Installed Size:   38.92 MiB"; \\
echo; \\
echo ":: Proceed with installation? [Y/n] y"; sleep 0.4; \\
echo ":: Retrieving packages..."; sleep 0.4; \\
for i in \$(seq 5 5 100); do printf "\\r neovim-0.9.5-1-x86_64       %d%% [%-25s] %d K/s 00:0%d" \$i "\$(printf '#%.0s' \$(seq 1 \$((i/4))))" \$((RANDOM % 2000 + 500)) \$((10-i/10)); sleep 0.06; done; echo; \\
echo "(1/1) checking keys in keyring                       [######################] 100%"; \\
echo "(1/1) checking package integrity                     [######################] 100%"; \\
echo "(1/1) loading package files                          [######################] 100%"; \\
echo "(1/1) checking for file conflicts                    [######################] 100%"; \\
echo "(1/1) checking available disk space                  [######################] 100%"; \\
echo ":: Processing package changes..."; \\
echo "(1/1) installing neovim                              [######################] 100%"; \\
echo ":: Running post-transaction hooks..."; \\
echo "(1/1) Arming ConditionNeedsUpdate..."
\`\`\`

## 10. Fake \`gem install\`

\`\`\`bash
echo "Fetching: rails-7.1.2.gem"; sleep 0.5; \\
echo "Successfully installed rails-7.1.2"; sleep 0.3; \\
echo "Parsing documentation for rails-7.1.2"; sleep 0.6; \\
echo "Installing ri documentation for rails-7.1.2"; sleep 0.4; \\
echo "Done installing documentation for rails after 1 seconds"; \\
echo "1 gem installed"
\`\`\`

## 11. Fake \`go get\` / \`go install\`

\`\`\`bash
echo "go: downloading github.com/fancy/tool v1.4.2"; sleep 0.6; \\
echo "go: downloading github.com/spf13/cobra v1.8.0"; sleep 0.5; \\
echo "go: downloading github.com/spf13/pflag v1.0.5"; sleep 0.4; \\
echo "go: downloading gopkg.in/yaml.v3 v3.0.1"; sleep 0.4; \\
echo "go: added github.com/fancy/tool v1.4.2"
\`\`\`

---

# Fancier scenarios

## A. Spinner version (no progress bar)

\`\`\`bash
spin='⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'; \\
for i in \$(seq 1 60); do \\
  printf "\\r\${spin:\$((i%10)):1} Installing super-tool... %d%%" \$((i*100/60)); \\
  sleep 0.08; \\
done; \\
printf "\\r✓ Installed super-tool 2.0.0                  \\n"
\`\`\`

## B. Three packages downloading "in parallel" (multi-bar)

\`\`\`bash
draw_bar() { local pct=\$1; local name=\$2; printf "%-15s [%-30s] %3d%%\\n" "\$name" "\$(printf '█%.0s' \$(seq 1 \$((pct*30/100))))" \$pct; }
clear_n() { for _ in \$(seq 1 \$1); do tput cuu1; tput el; done; }
a=0; b=0; c=0; \\
draw_bar 0 "numpy"; draw_bar 0 "scipy"; draw_bar 0 "torch"; \\
while [ \$a -lt 100 ] || [ \$b -lt 100 ] || [ \$c -lt 100 ]; do \\
  sleep 0.1; \\
  a=\$(( a + RANDOM%6 )); [ \$a -gt 100 ] && a=100; \\
  b=\$(( b + RANDOM%4 )); [ \$b -gt 100 ] && b=100; \\
  c=\$(( c + RANDOM%3 )); [ \$c -gt 100 ] && c=100; \\
  clear_n 3; \\
  draw_bar \$a "numpy"; draw_bar \$b "scipy"; draw_bar \$c "torch"; \\
done; \\
echo "All packages installed."
\`\`\`

## C. Fake "resolving" with retries (looks realistic)

\`\`\`bash
echo "Collecting heavy-package"; sleep 0.5; \\
echo "  Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError'..."; sleep 1.2; \\
echo "  Retrying (Retry(total=3, ...)) after connection broken..."; sleep 1.5; \\
echo "  Connection re-established"; sleep 0.4; \\
echo "  Downloading heavy_package-3.0.0-py3-none-any.whl (250 MB)"; \\
for i in \$(seq 2 2 100); do printf "\\r     |%-50s| %d%%" "\$(printf '█%.0s' \$(seq 1 \$((i/2))))" \$i; sleep 0.05; done; echo; \\
echo "Successfully installed heavy-package-3.0.0"
\`\`\`

## D. Fake compile output (gcc-style)

\`\`\`bash
files=(main.c utils.c parser.c lexer.c codegen.c optimizer.c io.c errors.c); \\
for f in "\${files[@]}"; do \\
  echo "gcc -Wall -O2 -c \${f} -o \${f%.c}.o"; \\
  sleep 0.3; \\
done; \\
echo "gcc -Wall -O2 main.o utils.o parser.o lexer.o codegen.o optimizer.o io.o errors.o -o myapp"; \\
sleep 0.4; \\
echo "Build successful."
\`\`\`

## E. Fake CI-style output (with colored ✓ / ✗)

\`\`\`bash
g=\$'\\033[32m'; r=\$'\\033[31m'; n=\$'\\033[0m'; \\
steps=("Checkout" "Install dependencies" "Lint" "Type check" "Unit tests" "Integration tests" "Build" "Deploy preview"); \\
for s in "\${steps[@]}"; do \\
  printf "  %s..." "\$s"; \\
  sleep \$(awk -v n=\$RANDOM 'BEGIN{print 0.3 + (n%10)/10}'); \\
  printf "\\r\${g}✓\${n} %s\\n" "\$s"; \\
done; \\
echo; \\
echo "\${g}All checks passed (8/8)\${n}"
\`\`\`

## F. Fake kernel \`make\` (lots of warnings)

\`\`\`bash
files=(sched.c memory.c fs.c net.c drivers/usb.c drivers/scsi.c arch/x86/boot.c); \\
for f in "\${files[@]}"; do \\
  echo "  CC      kernel/\${f%.c}.o"; \\
  sleep 0.2; \\
done; \\
echo "  AR      kernel/built-in.a"; sleep 0.4; \\
echo "  LD      vmlinux.o"; sleep 0.5; \\
echo "  MODPOST vmlinux.symvers"; sleep 0.4; \\
echo "  KSYMS   .tmp_vmlinux.kallsyms.S"; sleep 0.3; \\
echo "  AS      .tmp_vmlinux.kallsyms.o"; sleep 0.3; \\
echo "  LD      vmlinux"; sleep 0.5; \\
echo "  SORTTAB vmlinux"; sleep 0.3; \\
echo "  SYSMAP  System.map"; sleep 0.3; \\
echo "  Building modules, stage 2."; sleep 0.4; \\
echo "  MODPOST 1247 modules"; sleep 0.6; \\
echo "Kernel: arch/x86/boot/bzImage is ready"
\`\`\`

---

# PowerShell equivalents (Windows)

If you're not in Bash but want the same effect on a plain Windows PowerShell prompt, here's the pip variant:

\`\`\`powershell
\$pkg = "tensorflow-quantum"; \$ver = "0.7.3"
Write-Host "Collecting \$pkg"
Start-Sleep -Milliseconds 400
Write-Host ("  Downloading {0}-{1}-cp311-cp311-win_amd64.whl (87.4 MB)" -f (\$pkg -replace '-','_'), \$ver)
for (\$i = 2; \$i -le 100; \$i += 2) {
    \$bar = ('█' * [int](\$i / 2)).PadRight(50)
    \$speed = [math]::Round((Get-Random -Min 10 -Max 50) / 10, 1)
    \$eta   = 100 - \$i
    Write-Host ("\`r     |{0}| {1}% {2} MB/s eta 0:00:{3:D2}" -f \$bar, \$i, \$speed, \$eta) -NoNewline
    Start-Sleep -Milliseconds 80
}
Write-Host
Write-Host "Collecting numpy>=1.21.0"
Start-Sleep -Milliseconds 300
Write-Host "  Using cached numpy-1.26.4-cp311-cp311-win_amd64.whl (15.8 MB)"
Write-Host "Collecting protobuf>=3.20.0"
Start-Sleep -Milliseconds 300
Write-Host "  Using cached protobuf-4.25.1-cp311-cp311-win_amd64.whl (413 KB)"
Write-Host "Collecting absl-py>=1.0.0"
Start-Sleep -Milliseconds 200
Write-Host "  Using cached absl_py-2.1.0-py3-none-any.whl (133 KB)"
Write-Host "Installing collected packages: absl-py, protobuf, numpy, \$pkg"
Start-Sleep -Milliseconds 1200
Write-Host ("Successfully installed absl-py-2.1.0 numpy-1.26.4 protobuf-4.25.1 {0}-{1}" -f \$pkg, \$ver)
\`\`\`

---

# Saving them as scripts

Pick a folder for fake-install scripts and drop these files in:

**\`fake-pip.sh\`**
\`\`\`bash
#!/usr/bin/env bash
pkg="\${1:-awesome-package}"; ver="\${2:-1.0.0}"
echo "Collecting \$pkg"
sleep 0.4
echo "  Downloading \${pkg//-/_}-\${ver}-py3-none-any.whl (12.4 MB)"
for i in \$(seq 2 2 100); do
  printf "\\r     |%-50s| %d%%" "\$(printf '█%.0s' \$(seq 1 \$((i/2))))" \$i
  sleep 0.05
done
echo
echo "Installing collected packages: \$pkg"
sleep 0.8
echo "Successfully installed \${pkg}-\${ver}"
\`\`\`

Usage:

\`\`\`bash
chmod +x fake-pip.sh
./fake-pip.sh django 5.0.1
./fake-pip.sh                  # defaults
\`\`\`

---

# Use cases (legitimate ones)

- **Screen recordings / tutorials** — Demonstrate a workflow without waiting for real network downloads.
- **Conference demos** — Avoid live-network risk on stage.
- **CI/CD prototyping** — Mock out long-running install steps while iterating on the surrounding script.
- **Terminal theme screenshots** — Generate good-looking output for marketing assets.
- **April Fools / office pranks** — Play nicely; don't break anyone's day.

---

# Troubleshooting

| Symptom | Fix |
|---|---|
| Progress bar prints on multiple lines instead of overwriting | Your terminal is wrapping — narrow the bar (lower the \`50\` width) or widen the window. |
| \`█\` shows as \`?\` or boxes | Terminal font lacks the glyph. Switch to a font like **Cascadia Code**, **Fira Code**, **JetBrains Mono**, or **MesloLGS NF**. |
| \`seq\` not found (macOS BSD) | Replace \`\$(seq 1 \$((i/2)))\` with \`\$(jot \$((i/2)) 1)\`, or use \`for ((j=1; j<=i/2; j++)); do printf '█'; done\`. |
| Animation runs too fast / instantly | Some terminals batch \`\\r\` updates when stdout is redirected; run interactively, not piped to \`tee\`/\`less\`. |
| \`awk\` not found | Replace \`\$(awk -v n=\$RANDOM 'BEGIN{print (n%40+10)/10}')\` with a static string like \`2.4\`. |
| Want even more realism | Add \`time\` suffix, randomize package list, throw in one fake "DEPRECATION" warning. |

---

# Ethics / disclaimer

These snippets are intended for harmless, transparent uses: demos, tutorials, recordings, and personal pranks where the "victim" will be in on it within seconds. Don't:

- Use them to convince someone they installed software they did not (or vice versa).
- Trick a coworker into believing a real failed install actually succeeded.
- Embed them in malware or social-engineering campaigns.

When in doubt, immediately reveal the gag. Real package managers print real things; pretending otherwise crosses a line fast.

---

*End of bonus pack.*
*/
`;

const TYPING_DURATION_MS = 4000;
const PENDING_AUTH_MS = 3000;
const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function LandingPage() {
  const router = useRouter();
  const [hasStarted, setHasStarted] = useState(false);
  const [stage, setStage] = useState<Stage>('idle');
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');

  useEffect(() => {
    router.prefetch('/portfolio');
  }, [router]);

  useEffect(() => {
    if (!hasStarted) return;
    let cancelled = false;
    let rafId = 0;

    (async () => {
      // phase 1 — image desaturates to mono (visible, slow)
      setStage('mono');
      await wait(900);
      if (cancelled) return;

      // phase 2 — black overlay fades in over the mono image (slow)
      setStage('fadeBlack');
      await wait(900);
      if (cancelled) return;

      // panel fades in AND typing starts in the same tick — they overlap
      setStage('typing');
      await new Promise<void>((resolve) => {
        const startTs = performance.now();
        const totalChars = codeText.length;
        const tick = () => {
          if (cancelled) return resolve();
          const elapsed = performance.now() - startTs;
          const progress = Math.min(elapsed / TYPING_DURATION_MS, 1);
          const visible = codeText.slice(0, Math.floor(progress * totalChars));
          const parts = visible.split('\n');
          setTypedLines(parts.slice(0, -1));
          setCurrentLine(parts[parts.length - 1] ?? '');
          if (progress >= 1) return resolve();
          rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
      });
      if (cancelled) return;

      setTypedLines(codeText.split('\n'));
      setCurrentLine('');

      await wait(600);
      if (cancelled) return;
      setStage('popup1');
      await wait(PENDING_AUTH_MS);
      if (cancelled) return;

      setStage('popup2');
      await wait(2800);
      if (cancelled) return;

      setStage('fadeOut');
      await wait(900);
      if (cancelled) return;
      router.push('/portfolio');
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasStarted, router]);

  const handleEnter = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  // black overlay starts in phase 2 (fadeBlack) — phase 1 (mono) shows desaturated bg only
  const sceneIsBlack =
    stage === 'fadeBlack' ||
    stage === 'typing' ||
    stage === 'popup1' ||
    stage === 'popup2' ||
    stage === 'fadeOut';

  const panelOpen =
    stage === 'typing' ||
    stage === 'popup1' ||
    stage === 'popup2';

  return (
    <div className="landing-cursor relative min-h-screen w-full overflow-hidden bg-black">
      {/* Scene 1 — background image with mono filter */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
        animate={{
          filter:
            stage === 'idle'
              ? 'grayscale(0%) brightness(1)'
              : 'grayscale(100%) brightness(0.55)',
        }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      {/* Polished bottom-center button */}
      <AnimatePresence>
        {stage === 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2"
          >
            <button
              onClick={handleEnter}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-white/25 bg-white/[0.04] px-14 py-4 text-[11px] font-light uppercase tracking-[0.4em] text-white/90 backdrop-blur-2xl transition-all duration-700 hover:border-white/60 hover:bg-white/[0.08] hover:tracking-[0.45em] hover:text-white"
            >
              <span className="relative z-10">Enter</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1500ms] ease-out group-hover:translate-x-full" />
              <span className="pointer-events-none absolute -inset-px rounded-full opacity-0 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-opacity duration-700 group-hover:opacity-100" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Black fade overlay — phase 2, fades in over the mono image */}
      <AnimatePresence>
        {sceneIsBlack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-black"
          />
        )}
      </AnimatePresence>

      {/* Code panel — fades in while typing has already begun */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex items-center justify-center px-4"
          >
            <CodePanel
              typedLines={typedLines}
              currentLine={currentLine}
              typing={stage === 'typing'}
              dimmed={stage === 'popup1' || stage === 'popup2'}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup 1 — pending */}
      <AnimatePresence>
        {stage === 'popup1' && (
          <motion.div
            key="popup1"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <AuthDialog variant="pending" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup 2 — granted (auto-redirects) */}
      <AnimatePresence>
        {stage === 'popup2' && (
          <motion.div
            key="popup2"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <AuthDialog variant="granted" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Hyper / iTerm2-style code panel ───────────────────────────────────────────
function CodePanel({
  typedLines,
  currentLine,
  typing,
  dimmed,
}: {
  typedLines: string[];
  currentLine: string;
  typing: boolean;
  dimmed: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const totalLines = typedLines.length + (typing ? 1 : 0);
  const currentLineNum = typedLines.length + 1;
  const currentCol = currentLine.length + 1;

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [typedLines, currentLine]);

  return (
    <motion.div
      animate={{ opacity: dimmed ? 0.3 : 1, scale: dimmed ? 0.985 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex h-[80vh] w-[55vw] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050505]"
      style={{
        boxShadow:
          '0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* breathing glow halo */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        animate={{
          boxShadow: [
            '0 0 60px rgba(120,170,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)',
            '0 0 110px rgba(120,170,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.08)',
            '0 0 60px rgba(120,170,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)',
          ],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* title bar — generic terminal */}
      <div className="relative flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a] px-4 py-2">
      
        <span className="font-mono text-[10px] text-white/25">bash</span>
      </div>

      {/* code body */}
      <div
        ref={bodyRef}
        className="relative min-h-0 flex-1 overflow-y-auto bg-[#050505] font-mono text-[13px] leading-[1.65] text-[#e6e6e6]"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* faint static scan-line overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 3px)',
          }}
        />
        {/* moving scan beam */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 z-[2] h-[120px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(160,200,255,0.04) 50%, transparent)',
          }}
          animate={{ top: ['-120px', '100%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-[3] py-6 pr-8">
          {typedLines.map((line, i) => (
            <CodeLine key={i} num={i + 1} content={line} />
          ))}
          {typing && (
            <CodeLine num={currentLineNum} content={currentLine} caret />
          )}
        </div>
      </div>

      {/* status bar */}
      <div className="relative flex items-center gap-3 border-t border-white/[0.06] bg-gradient-to-b from-[#0c0c0c] to-[#080808] px-4 py-1.5 font-mono text-[10px] text-white/40">
        <span className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/60">main</span>
        </span>
        <span className="text-white/20">·</span>
        <span>python 3.12</span>
        <span className="text-white/20">·</span>
        <span>UTF-8</span>
        <span className="text-white/20">·</span>
        <span>LF</span>
        <span className="ml-auto flex items-center gap-3">
          <span>Ln {currentLineNum}:{currentCol}</span>
          <span className="text-white/20">·</span>
          <span>{totalLines} lines</span>
          <span className="text-white/20">·</span>
          <span className={typing ? 'text-amber-300' : 'text-emerald-400'}>
            {typing ? '● writing' : '✓ saved'}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

function CodeLine({
  num,
  content,
  caret = false,
}: {
  num: number;
  content: string;
  caret?: boolean;
}) {
  return (
    <div className="flex items-center">
      <span className="w-14 flex-shrink-0 select-none text-right text-white/20 pr-5">
        {num}
      </span>
      <span className="flex-1 whitespace-pre">
        {content}
        {caret && (
          <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] animate-pulse bg-white" />
        )}
      </span>
    </div>
  );
}

// ─── Apple Touch ID-style auth dialog ──────────────────────────────────────────
function AuthDialog({ variant }: { variant: 'pending' | 'granted' }) {
  const isPending = variant === 'pending';

  return (
    <motion.div
      className={`relative ${isPending ? 'w-[360px]' : 'w-[460px]'} overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]`}
      style={{
        boxShadow:
          '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
      animate={
        !isPending
          ? {
              boxShadow: [
                '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.0), inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 50px 140px rgba(0,0,0,0.85), 0 0 100px rgba(34,197,94,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.0), inset 0 1px 0 rgba(255,255,255,0.06)',
              ],
            }
          : undefined
      }
      transition={!isPending ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      {/* hairline highlight at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* icon block */}
      <div className="flex flex-col items-center px-6 pb-5 pt-9">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {isPending ? <LoadingSpinner /> : <SuccessCheckmark />}
        </div>

        {/* header */}
        <p className="mt-6 text-center text-[13px] font-medium uppercase tracking-[0.18em] text-white/55">
          {isPending ? 'Authentication Required' : 'Access Granted'}
        </p>

        {/* prominent message — bigger & brighter for granted */}
        {isPending ? (
          <p className="mt-2 max-w-[280px] text-center text-[12px] leading-relaxed text-white/45">
            Your requesting permission to share Vineel profile
          </p>
        ) : (
          <div className="relative mt-4 w-full">
            {/* pulsing emerald highlight backdrop */}
            <motion.div
              className="absolute inset-x-2 -inset-y-1 rounded-2xl bg-emerald-500/10 blur-xl"
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-2 text-center text-[22px] font-semibold leading-snug tracking-tight text-emerald-100"
              style={{
                textShadow:
                  '0 0 24px rgba(74,222,128,0.7), 0 0 56px rgba(74,222,128,0.35)',
              }}
            >
              <motion.span
                animate={{ opacity: [0.92, 1, 0.92] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="block">Congratulations!</span>
                <span className="block">Vineel allows you to know him.</span>
              </motion.span>
            </motion.p>
          </div>
        )}
      </div>

      {/* divider */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* status / message row */}
      <div className="flex items-center justify-center gap-3 px-6 py-4">
        {isPending ? (
          <>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-white/60"
                  animate={{ opacity: [0.25, 1, 0.25], y: [0, -2.5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.18,
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] text-white/55">
              Asking to Vineel for permission…
            </span>
          </>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-mono text-[11px] text-white/45"
          >
            Permission verified by Vineel Kumar · you can go now.
          </motion.span>
        )}
      </div>

      {/* bottom accent */}
      <motion.div
        className={`h-[2px] w-full ${
          isPending
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
            : 'bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent'
        }`}
        animate={
          isPending
            ? { backgroundPosition: ['0% 0%', '200% 0%'] }
            : { opacity: [0.6, 1, 0.6] }
        }
        style={isPending ? { backgroundSize: '200% 100%' } : undefined}
        transition={{ duration: isPending ? 1.8 : 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

// ─── Fancy concentric loading spinner (replaces fingerprint pending state) ────
function LoadingSpinner() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* faint backing disc */}
      <div className="absolute inset-0 rounded-full bg-white/[0.03]" />

      {/* outer rotating arc */}
      <motion.svg
        viewBox="0 0 80 80"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
        <path
          d="M 40 6 A 34 34 0 0 1 74 40"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* inner counter-rotating arc */}
      <motion.svg
        viewBox="0 0 80 80"
        className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M 40 18 A 22 22 0 0 1 62 40"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* pulsing core */}
      <motion.div
        className="relative h-2.5 w-2.5 rounded-full bg-white"
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 14px rgba(255,255,255,0.65)' }}
      />
    </div>
  );
}

// ─── PhonePe-style success animation (replaces fingerprint granted state) ─────
function SuccessCheckmark() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* expanding ripples */}
      {[0, 0.5, 1].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-emerald-400"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.9, opacity: [0, 0.55, 0] }}
          transition={{ duration: 1.8, delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* solid green disc — springs in */}
      <motion.div
        className="relative flex h-full w-full items-center justify-center rounded-full bg-emerald-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        style={{
          boxShadow:
            '0 0 50px rgba(34,197,94,0.5), 0 0 22px rgba(34,197,94,0.45), inset 0 0 0 1px rgba(255,255,255,0.18)',
        }}
      >
        <svg width="46" height="46" viewBox="0 0 44 44" fill="none">
          <motion.path
            d="M12 22L19 29L32 15"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      </motion.div>

      {/* sparkle burst */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-emerald-300"
          initial={{ x: -2, y: -2, opacity: 0 }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * 56 - 2,
            y: Math.sin((angle * Math.PI) / 180) * 56 - 2,
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 0.85, delay: 0.5, ease: 'easeOut' }}
          style={{ boxShadow: '0 0 6px rgba(110,231,183,0.85)' }}
        />
      ))}
    </div>
  );
}
